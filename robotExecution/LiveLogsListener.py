import os 
import json
import webbrowser

class LiveLogsListener:

    ROBOT_LISTENER_API_VERSION = 2

    def __init__(self):
        liveLogs = {}
        with open('robotLogs.json','w') as live_logs_file:
            json.dump(liveLogs, live_logs_file)

    def start_suite(self, name, attrs):
        self.activity_count = len(attrs['tests'])
        self.robotName = name

        if self.activity_count != 0:

            with open('robotLogs.json', 'r') as live_logs_file:
                liveLogs = json.load(live_logs_file)
            
            nameWithoutSpaces = name.replace(' ', '')
            liveLogs[f'robot_{nameWithoutSpaces}'] = {
                'name': name,
                'activity_count': self.activity_count,
                'activities': []
            }

            with open('robotLogs.json', 'w') as live_logs_file:
                json.dump(liveLogs, live_logs_file)
    
    def start_test(self, name, attrs):
        self.activityName = name
        if self.activity_count != 0:
            with open('robotLogs.json', 'r') as live_logs_file:
                liveLogs = json.load(live_logs_file)
            
            robotName = self.robotName.replace(' ', '')
            nameWithoutSpaces = name.replace(' ', '')
            liveLogs[f'robot_{robotName}']['activities'].append({
                'activity_name': name,
                'tasks': []
            })

            with open('robotLogs.json', 'w') as live_logs_file:
                json.dump(liveLogs, live_logs_file)
    
    def end_keyword(self, name, attrs):
        if self.activity_count != 0:
            with open('robotLogs.json', 'r') as live_logs_file:
                liveLogs = json.load(live_logs_file)
            
            robotName = self.robotName.replace(' ', '')
            activityName = self.activityName.replace(' ', '')
            taskName = attrs['kwname']
            taskStatus = attrs['status']
            nameWithoutSpaces = taskName.replace(' ', '')
            currentActivity = len(liveLogs[f'robot_{robotName}']['activities']) - 1 
            liveLogs[f'robot_{robotName}']['activities'][currentActivity]['tasks'].append({
                'task_name': taskName,
                'status': taskStatus
            })

            with open('robotLogs.json', 'w') as live_logs_file:
                json.dump(liveLogs, live_logs_file)

    def end_test(self, name, attrs):
        if self.activity_count != 0:
            with open('robotLogs.json', 'r') as live_logs_file:
                liveLogs = json.load(live_logs_file)
            
            robotName = self.robotName.replace(' ', '')
            activityName = self.activityName.replace(' ', '')
            nameWithoutSpaces = name.replace(' ', '')
            activityStatus = attrs['status']
            activityMessage = attrs['message']
            currentActivity = len(liveLogs[f'robot_{robotName}']['activities']) - 1 
            liveLogs[f'robot_{robotName}']['activities'][currentActivity]['status'] = activityStatus
            liveLogs[f'robot_{robotName}']['activities'][currentActivity]['message'] = activityMessage

            with open('robotLogs.json', 'w') as live_logs_file:
                json.dump(liveLogs, live_logs_file)

    def end_suite(self, name, attrs):
        if self.activity_count != 0:
            with open('robotLogs.json', 'r') as live_logs_file:
                liveLogs = json.load(live_logs_file)
            
            robotName = self.robotName.replace(' ', '')
            robotStatus = attrs['status']
            liveLogs[f'robot_{robotName}']['status'] = robotStatus

            with open('robotLogs.json', 'w') as live_logs_file:
                json.dump(liveLogs, live_logs_file)

    def close(self):
        with open('robotLogs.json', 'r') as live_logs_file:
            liveLogs = json.load(live_logs_file)
        liveLogs['final_message'] = 'Execution completed!'

        with open('robotLogs.json', 'w') as live_logs_file:
            json.dump(liveLogs, live_logs_file)