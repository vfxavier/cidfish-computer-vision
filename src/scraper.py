import twitch as tw
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

client = tw.TwitchHelix(client_id='1cucopngw8otq1si8etwpdjzngtcrm',oauth_token='uqf6is7m885e0vkq2zkztjk1z2ysub')
videos = client.get_videos(user_id=138375255)
url_list = []

for x in videos:
    url_list.append(x.__getitem__('url'))


# url = url_list[1]

r = requests.get(url)
if r.status_code != 200:
    raise Exception("API returned {0}".format(r.status_code))
# try:
#     j = r.json()
# except ValueError as e:
#     print("API did not return valid JSON: {}".format(e))
#     pp.pprint("{}".format(r.text))


pp.pprint(r.__dict__)


url = 'https://www.twitch.tv/videos/384051033'
page = urllib.request.urlopen(url)
soup = BeautifulSoup(page, 'html.parser')
print(soup)

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from bs4 import BeautifulSoup
import pandas as pd
import re
import os

# Firefox session
driver = webdriver.Firefox(executable_path='./geckodriver')
driver.get(videos_url)
driver.implicitly_wait(100)