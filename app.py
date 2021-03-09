import requests
import time
import os

def deleteLogs():
    if os.path.exists("./output.xml"):
        os.remove("./output.xml")
    if os.path.exists("./log.html"):
        os.remove("./log.html")
    if os.path.exists("./report.html"):
        os.remove("./report.html")
    if os.path.exists("./geckodriver-1.log"):
        os.remove("./geckodriver-1.log")

while True:
    deleteLogs()
    response = requests.get("http://localhost:5000/robot/jobs/execute")
    if (response.text == 'No new job'):
        time.sleep(10)
    else:
        file = open('./executable.robot', 'w')
        file.write(response.text)
        os.system('robot executable.robot')
        time.sleep(10)