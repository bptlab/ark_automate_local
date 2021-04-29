exports.passingRobotRun = {
  robot: {
    generator: 'Robot 4.0 (Python 3.9.0 on win32)',
    generated: '20210429 12:05:03.950',
    rpa: 'true',
    schemaversion: '2',
    suite: {
      id: 's1',
      name: 'Test',
      source:
        'C:\\Users\\Varia\\AndroidStudioProjects\\ark_automate_local\\robotExecution\\test.robot',
      test: {
        id: 's1-t1',
        name: 'Test',
        kw: [
          {
            name: 'Open Workbook',
            library: 'RPA.Excel.Application',
            arg: 'C:/Users/Varia/OneDrive/Desktop/demo.xlsx',
            doc: 'Open Excel by filename',
            msg: [
              {
                timestamp: '20210429 12:05:04.687',
                level: 'INFO',
                $t:
                  'Opening workbook: C:\\Users\\Varia\\OneDrive\\Desktop\\demo.xlsx',
              },
              {
                timestamp: '20210429 12:05:04.692',
                level: 'INFO',
                $t: 'Trying to open workbook by another method',
              },
            ],
            status: {
              status: 'PASS',
              starttime: '20210429 12:05:04.292',
              endtime: '20210429 12:05:04.916',
            },
          },
          {
            name: 'Write To Cells',
            library: 'RPA.Excel.Application',
            arg: ['row=1', 'column=1', 'value=12'],
            doc: 'Write value, number_format and/or formula into cell.',
            status: {
              status: 'PASS',
              starttime: '20210429 12:05:04.916',
              endtime: '20210429 12:05:04.922',
            },
          },
          {
            name: 'Open Browser',
            library: 'RPA.Browser.Selenium',
            arg: 'https://www.facebook.com',
            doc: 'Opens a new browser instance to the optional ``url``.',
            msg: [
              {
                timestamp: '20210429 12:05:04.922',
                level: 'INFO',
                $t:
                  "Opening browser 'firefox' to base url 'https://www.facebook.com'.",
              },
              {
                timestamp: '20210429 12:05:04.923',
                level: 'INFO',
                $t:
                  'Firefox driver log is always forced to to: C:\\Users\\Varia\\AndroidStudioProjects\\ark_automate_local\\geckodriver-4.log',
              },
            ],
            status: {
              status: 'PASS',
              starttime: '20210429 12:05:04.922',
              endtime: '20210429 12:05:12.340',
            },
          },
          {
            name: 'Quit Application',
            library: 'RPA.Excel.Application',
            arg: 'true',
            doc: 'Quit the application.',
            status: {
              status: 'PASS',
              starttime: '20210429 12:05:12.341',
              endtime: '20210429 12:05:12.725',
            },
          },
          {
            name: 'Close Browser',
            library: 'RPA.Browser.Selenium',
            doc: 'Closes the current browser.',
            status: {
              status: 'PASS',
              starttime: '20210429 12:05:12.725',
              endtime: '20210429 12:05:13.231',
            },
          },
        ],
        status: {
          status: 'PASS',
          starttime: '20210429 12:05:04.291',
          endtime: '20210429 12:05:13.231',
        },
      },
      status: {
        status: 'PASS',
        starttime: '20210429 12:05:03.952',
        endtime: '20210429 12:05:13.232',
      },
    },
    statistics: {
      total: {
        stat: {
          pass: '1',
          fail: '0',
          skip: '0',
          $t: 'All Tasks',
        },
      },
      tag: '',
      suite: {
        stat: {
          pass: '1',
          fail: '0',
          skip: '0',
          id: 's1',
          name: 'Test',
          $t: 'Test',
        },
      },
    },
    errors: '',
  },
};

exports.failingRobotRun = {
  robot: {
    generator: 'Robot 4.0 (Python 3.9.0 on win32)',
    generated: '20210429 14:41:10.886',
    rpa: 'true',
    schemaversion: '2',
    suite: {
      id: 's1',
      name: 'Executable',
      source:
        'C:\\Users\\Varia\\AndroidStudioProjects\\ark_automate_local\\robotExecution\\executable.robot',
      test: {
        id: 's1-t1',
        name: 'Excel.Files',
        kw: {
          name: 'Open Workbook',
          library: 'RPA.Excel.Files',
          arg: 'C://Desktop',
          doc: 'Open an existing Excel workbook.',
          msg: {
            timestamp: '20210429 14:41:11.363',
            level: 'FAIL',
            $t:
              "FileNotFoundError: [WinError 2] Das System kann die angegebene Datei nicht finden: 'C:\\\\Desktop'",
          },
          status: {
            status: 'FAIL',
            starttime: '20210429 14:41:11.361',
            endtime: '20210429 14:41:11.363',
          },
        },
        status: {
          status: 'FAIL',
          starttime: '20210429 14:41:11.361',
          endtime: '20210429 14:41:11.363',
          $t:
            "FileNotFoundError: [WinError 2] Das System kann die angegebene Datei nicht finden: 'C:\\\\Desktop'",
        },
      },
      status: {
        status: 'FAIL',
        starttime: '20210429 14:41:10.888',
        endtime: '20210429 14:41:11.363',
      },
    },
    statistics: {
      total: {
        stat: {
          pass: '0',
          fail: '1',
          skip: '0',
          $t: 'All Tasks',
        },
      },
      tag: '',
      suite: {
        stat: {
          pass: '0',
          fail: '1',
          skip: '0',
          id: 's1',
          name: 'Executable',
          $t: 'Executable',
        },
      },
    },
    errors: '',
  },
};
