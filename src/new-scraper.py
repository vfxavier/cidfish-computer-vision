# https://github.com/reshawn/reshawn.github.io/blob/source/content/posts/2020-07-12-scraping-live-stream-video-with-python.md
# https://github.com/ihabunek/twitch-dl

from selenium import webdriver
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
import json
import os
import requests
import pprint as pp
from bs4 import BeautifulSoup
import time

url_source = 'https://www.twitch.tv/videos/603013553'
# url_source = 'https://www.twitch.tv/'
# url_source = 'https://www.twitch.tv/cidcidoso/clip/FaithfulShakingSashimiYouDontSay'




caps = DesiredCapabilities.CHROME
caps['goog:loggingPrefs'] = {'performance': 'ALL'}
options = webdriver.ChromeOptions()
options.add_argument('headless')
options.add_argument("--window-size=1920,1080")
driver = webdriver.Chrome(executable_path='./chromedriver', desired_capabilities=caps,options=options)
driver.get(url_source)

time.sleep(2)

try:
    driver.find_element_by_id("play-button").Click()
except:
    pass

def process_browser_log_entry(entry):
    response = json.loads(entry['message'])['message']
    return response

# while True:
browser_log = driver.get_log('performance') 
events = [process_browser_log_entry(entry) for entry in browser_log]
events2 = [event for event in events if event['method']=='Network.responseReceived']

if len(events2) > 0:
    print(len(events2))

for e in events2:
    if e['params']['response']['url'].endswith('.ts'):
        url=e['params']['response']['url']
        r1 = requests.get(url, stream=True)
        if(r1.status_code == 200):
            with open('testvod.mpeg','ab') as f:
                for chunk in r1.iter_content(chunk_size=1024):
                    f.write(chunk)
        else:
            print("Received unexpected status code {}".format(r1.status_code))

len(events)

# pp.pprint(set([(json.loads(browser_log[x]['message'])['message'])['method'] for x in range(len(browser_log))]))

# (json.loads(browser_log[200]['message'])['message'])['method']


# driver.quit()