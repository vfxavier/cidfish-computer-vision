import twitch as tw
import twitchdl as dl
import pprint as pp
import requests
import sys
import json
import re
import os
import string
import argparse
from bs4 import BeautifulSoup
import urllib.request
from subprocess import call

# client = tw.TwitchHelix(client_id='1cucopngw8otq1si8etwpdjzngtcrm',oauth_token='uqf6is7m885e0vkq2zkztjk1z2ysub')
# videos = client.get_videos(user_id=138375255)
# url_list = []

# for x in videos:
#     url_list.append(x.__getitem__('url'))


url = 'https://www.twitch.tv/videos/683547667'
# url = url_list[1]

# r = requests.get(url)
# if r.status_code != 200:
#     raise Exception("API returned {0}".format(r.status_code))
# try:
#     j = r.json()
# except ValueError as e:
#     print("API did not return valid JSON: {}".format(e))
#     pp.pprint("{}".format(r.text))


# pp.pprint(r.__dict__)


call(['twitch-dl', 'download', url])

Procurar por: 'Catfish - Webnamoro pode ser perigoso' inicialmente da metade pro fim, se não encontrar, olhar primeira metade