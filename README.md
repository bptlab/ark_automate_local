# Local Client of Ark Automate

This script allows the local execution of robots that were built in the [Ark Atuomate Web Applikation](https://github.com/bptlab/ark_automate). 

## Setup

The local client runs on Mac and Windows, although not all calls of the used robot framework libraries are working on all plattforms. Calls from [robotframeworks standard libraries](http://robotframework.org/robotframework/#standard-libraries) work on both operating systems, calls from the [rpaframework](https://rpaframework.org/#libraries) like `Excel.Applikation.Open Application` only work on windows.

To run the client first make sure of the following:

1. [node](https://nodejs.org/en/download/) (at least v10) is installed
2. [robotframework](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#installation-instructions) is setup correctly, including the [path](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#configuring-path) variables!
3. [rpaframework](https://rpaframework.org/index.html#installation)  (at least v9.6) is installed

To test this, try to execute a self written robot on your local machine using the cmd/bash/shell, for example `robot ./path/to/myRobot.robot`.

Then you can proceed to:
1. Clone this repository `git clone https://github.com/bptlab/ark_automate_local.git`
2. Change into the new directory `cd ark_automate_local`
3. Execute `npm install -g`
4. Start the script in the current directory by running `ark` 

## About the local client
The local client is the companion to the web application Ark-Automate. It registers on to a userId and awaits new robotJobs from this user to execute. As soon as it receives a new job via the socket.io connection, it executes the robot and sends live logs to the backend of Ark-Automate. The userId is set when running the local client for the first time or via the `config.json`.

A special feature is the `LiveLogsListener.py` which is an implementation of the [Listener Interface](http://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#listener-interface) provided by Robot Framwork. It reacts to the individual test cases run by executing the robot. A test case can be translated to one instruction element of the ssot. For each test case, information on the execution is written into the `robotLogs.json` which is observed by the local client. Each change will result in sending the entire `robotLogs.json` via the socketConnection to the backend, where it is further processed.
![](https://i.imgur.com/XYIvl5f.png)


