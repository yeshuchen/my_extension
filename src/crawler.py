import requests
from bs4 import BeautifulSoup
url = "https://www.luogu.com.cn/record/list?user=374318"
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"}
response = requests.get(url, headers=headers)
print(response.status_code)
print(response.text)
soup = BeautifulSoup(response.text, "html.parser")
for item in soup.select("div.am-u-sm-12 > div > div > div > a"):
    print(item.text)