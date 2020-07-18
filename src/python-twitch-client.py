### references: 
### https://dev.twitch.tv/docs/api/reference#search-channels
### https://dev.twitch.tv/docs/authentication/getting-tokens-oauth/

from twitch import TwitchClient
import twitch as tw
import pprint as pp
import requests
import sys
import json
import re
import os
import string
import argparse
from oauthlib.oauth2 import BackendApplicationClient

# client_old = TwitchClient(client_id='1cucopngw8otq1si8etwpdjzngtcrm',
#                       oauth_token='q150ns3q3l7vkmhmffvty3we14kl7i')
# channel = client.channels.get_by_id(138375255)
# print(channel.id)
# print(channel.name)
# print(channel.display_name)
# pp.pprint(client.get_videos(138375255))

client = tw.TwitchHelix(client_id='1cucopngw8otq1si8etwpdjzngtcrm',oauth_token='uqf6is7m885e0vkq2zkztjk1z2ysub')


videos = client.get_videos(user_id=138375255)
url_list = []

for x in videos:
    url_list.append(x.__getitem__('url'))

url_list


BASE_URL = 'https://api.twitch.tv'

def download_file(url, local_filename):
    print("downloading {0}".format(local_filename))
    CS = 1024
    done = 0
    r = requests.get(url, stream=True)
    with open(local_filename, 'wb') as f:
        for chunk in r.iter_content(chunk_size=CS):
            if not chunk: # filter out keep-alive new chunks
                continue
            f.write(chunk)
            f.flush()
            done += CS
            sys.stdout.write("\r{0:>7.2f} MB".format(done/float(pow(1024,2))))

def download_broadcast(id_):
    """ download all video parts for broadcast 'id_' """

    pattern = '{base}/helix/videos?id={id_}'
    url = pattern.format(base=BASE_URL, id_=id_)
    # id = url.rpartition('=')[-1]
    r = requests.get(url)
    if r.status_code != 200:
        raise Exception("API returned {0}".format(r.status_code))
    try:
        j = r.json()
    except ValueError as e:
        print("API did not return valid JSON: {}".format(e))
        pp.pprint("{}".format(r.text))
        quit()

    qualities = j['chunks']
    res = [int(q[:-1]) for q in qualities if re.match("^\d+p", q)]
    best_resolution = "{}p".format(max(res))

    for nr, chunk in enumerate(j['chunks'][best_resolution]):
        video_url = chunk['url']
        ext = os.path.splitext(video_url)[1]
        filename = "{0}_{1:0>2}{2}".format(id_, nr, ext)
        download_file(video_url, filename)


# if __name__=="__main__":
#     parser = argparse.ArgumentParser()
#     parser.add_argument('video_id', help='twitch video id')
#     args = parser.parse_args()
#     download_broadcast(args.video_id)



# download_broadcast(url_list[1])

download_broadcast('682950851')

url = 'https://api.twitch.tv/helix/videos?id=533177550'
r = requests.get(url)

r

# j = r.json()

# if 'json' in r.headers.get('Content-Type'):
#     js = r.json()
# else:
#     print('Response content is not in JSON format.')
#     js = 'spam'


# r.content