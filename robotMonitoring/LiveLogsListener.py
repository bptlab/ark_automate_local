import os
import json
import webbrowser

class liveLogsListener:

    ROBOT_LISTENER_API_VERSION = 2

    def __init__(self):
        liveLogs = {}
        with open('./robotMonitoring/robotLogs.json','w') as liveLogsFile:
            json.dump(liveLogs, liveLogsFile)

    def start_suite(self, name, attrs):
        self.activityCount = len(attrs['tests'])
        self.robotName = name

        if self.activityCount != 0:

            with open('./robotMonitoring/robotLogs.json', 'r') as liveLogsFile:
                liveLogs = json.load(liveLogsFile)

            liveLogs[f'robotRun'] = {
                'name': name,
                'activityCount': self.activityCount,
                'activities': []
            }

            with open('./robotMonitoring/robotLogs.json', 'w') as liveLogsFile:
                json.dump(liveLogs, liveLogsFile)

    def start_test(self, name, attrs):
        self.activityName = name
        if self.activityCount != 0:
            with open('./robotMonitoring/robotLogs.json', 'r') as liveLogsFile:
                liveLogs = json.load(liveLogsFile)

            robotName = self.robotName.replace(' ', '')
            nameWithoutSpaces = name.replace(' ', '')
            liveLogs[f'robotRun']['activities'].append({
                'activityName': name,
                'tasks': []
            })

            with open('./robotMonitoring/robotLogs.json', 'w') as liveLogsFile:
                json.dump(liveLogs, liveLogsFile)

    def end_keyword(self, name, attrs):
        if self.activityCount != 0:
            with open('./robotMonitoring/robotLogs.json', 'r') as liveLogsFile:
                liveLogs = json.load(liveLogsFile)

            robotName = self.robotName.replace(' ', '')
            activityName = self.activityName.replace(' ', '')
            taskName = attrs['kwname']
            taskStatus = attrs['status']
            nameWithoutSpaces = taskName.replace(' ', '')
            currentActivity = len(liveLogs[f'robotRun']['activities']) - 1
            liveLogs[f'robotRun']['activities'][currentActivity]['tasks'].append({
                'taskName': taskName,
                'status': taskStatus
            })

            with open('./robotMonitoring/robotLogs.json', 'w') as liveLogsFile:
                json.dump(liveLogs, liveLogsFile)

    def end_test(self, name, attrs):
        if self.activityCount != 0:
            with open('./robotMonitoring/robotLogs.json', 'r') as liveLogsFile:
                liveLogs = json.load(liveLogsFile)

            robotName = self.robotName.replace(' ', '')
            activityName = self.activityName.replace(' ', '')
            nameWithoutSpaces = name.replace(' ', '')
            activityStatus = attrs['status']
            activityMessage = attrs['message']
            currentActivity = len(liveLogs[f'robotRun']['activities']) - 1
            liveLogs[f'robotRun']['activities'][currentActivity]['status'] = activityStatus
            liveLogs[f'robotRun']['activities'][currentActivity]['message'] = activityMessage

            with open('./robotMonitoring/robotLogs.json', 'w') as liveLogsFile:
                json.dump(liveLogs, liveLogsFile)

    def end_suite(self, name, attrs):
        if self.activityCount != 0:
            with open('./robotMonitoring/robotLogs.json', 'r') as liveLogsFile:
                liveLogs = json.load(liveLogsFile)

            robotName = self.robotName.replace(' ', '')
            robotStatus = attrs['status']
            liveLogs[f'robotRun']['status'] = robotStatus

            with open('./robotMonitoring/robotLogs.json', 'w') as liveLogsFile:
                json.dump(liveLogs, liveLogsFile)

    def close(self):
        with open('./robotMonitoring/robotLogs.json', 'r') as liveLogsFile:
            liveLogs = json.load(liveLogsFile)
        liveLogs['finalMessage'] = 'Execution completed'

        with open('./robotMonitoring/robotLogs.json', 'w') as liveLogsFile:
            json.dump(liveLogs, liveLogsFile)
