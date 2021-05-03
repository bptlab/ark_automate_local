exports.passingRobotRun = {
  robot: {
    suite: {
      test: [
        {
          kw: {
            arg: 'http://www.hpi.de',
            doc:
              'Open Chrome browser. See ``Open Available Browser`` for\ndescriptions of arguments.',
            msg: [
              {
                '@value': 'Creating an instance of the Chrome WebDriver.',
                '@attributes': {
                  timestamp: '20210503 15:44:26.188',
                  level: 'INFO',
                },
              },
              {
                '@value':
                  'Created download root directory: C:\\Users\\Varia\\AppData\\Local\\robocorp\\webdrivers',
                '@attributes': {
                  timestamp: '20210503 15:44:26.196',
                  level: 'INFO',
                },
              },
              {
                '@value':
                  'Created symlink directory: C:\\Users\\Varia\\AppData\\Local\\robocorp\\webdrivers',
                '@attributes': {
                  timestamp: '20210503 15:44:26.197',
                  level: 'INFO',
                },
              },
              {
                '@value': 'Creating an instance of the Chrome WebDriver.',
                '@attributes': {
                  timestamp: '20210503 15:44:26.197',
                  level: 'INFO',
                },
              },
              {
                '@value':
                  'Created Chrome browser with arguments: --disable-dev-shm-usage --disable-web-security --allow-running-insecure-content --no-sandbox',
                '@attributes': {
                  timestamp: '20210503 15:44:27.309',
                  level: 'INFO',
                },
              },
              {
                '@value':
                  '<p>Attempted combinations:</p><div class="doc"><table><tr><th>Browser</th><th>Download</th><th>Error</th></tr><tr><td>Chrome</td><td>False</td><td>Message: \'chromedriver\' executable needs to be in PATH. Please see https://sites.google.com/a/chromium.org/chromedriver/home\n</td></tr><tr><td>Chrome</td><td>True</td><td></td></tr></table></div>',
                '@attributes': {
                  timestamp: '20210503 15:44:27.309',
                  level: 'INFO',
                  html: 'true',
                },
              },
              {
                '@value': "Opening url 'http://www.hpi.de'",
                '@attributes': {
                  timestamp: '20210503 15:44:27.309',
                  level: 'INFO',
                },
              },
            ],
            status: {
              '@value': '',
              '@attributes': {
                status: 'PASS',
                starttime: '20210503 15:44:26.187',
                endtime: '20210503 15:44:31.390',
              },
            },
            '@attributes': {
              name: 'Open Chrome Browser',
              library: 'RPA.Browser.Selenium',
            },
          },
          status: {
            '@value': '',
            '@attributes': {
              status: 'PASS',
              starttime: '20210503 15:44:26.187',
              endtime: '20210503 15:44:31.390',
            },
          },
          '@attributes': {
            id: 's1-t1',
            name: 'Browser1',
          },
        },
        {
          kw: {
            arg: 'C:/Users/Varia/OneDrive/Desktop/demo.xlsx',
            doc: 'Open an existing Excel workbook.',
            msg: {
              '@value':
                'Opened workbook: <RPA.Excel.Files.XlsxWorkbook object at 0x000002B2FE0A39A0>',
              '@attributes': {
                timestamp: '20210503 15:44:31.401',
                level: 'INFO',
              },
            },
            status: {
              '@value': '',
              '@attributes': {
                status: 'PASS',
                starttime: '20210503 15:44:31.391',
                endtime: '20210503 15:44:31.401',
              },
            },
            '@attributes': {
              name: 'Open Workbook',
              library: 'RPA.Excel.Files',
            },
          },
          status: {
            '@value': '',
            '@attributes': {
              status: 'PASS',
              starttime: '20210503 15:44:31.391',
              endtime: '20210503 15:44:31.401',
            },
          },
          '@attributes': {
            id: 's1-t2',
            name: 'Say hello',
          },
        },
        {
          kw: [
            {
              arg: ['2', '2', 'EINS'],
              doc: 'Set a cell value in the given worksheet.',
              status: {
                '@value': '',
                '@attributes': {
                  status: 'PASS',
                  starttime: '20210503 15:44:31.402',
                  endtime: '20210503 15:44:31.402',
                },
              },
              '@attributes': {
                name: 'Set Worksheet Value',
                library: 'RPA.Excel.Files',
              },
            },
            {
              arg: ['2', '2', 'NICHTZWEI'],
              doc: 'Set a cell value in the given worksheet.',
              status: {
                '@value': '',
                '@attributes': {
                  status: 'PASS',
                  starttime: '20210503 15:44:31.403',
                  endtime: '20210503 15:44:31.403',
                },
              },
              '@attributes': {
                name: 'Set Worksheet Value',
                library: 'RPA.Excel.Files',
              },
            },
          ],
          status: {
            '@value': '',
            '@attributes': {
              status: 'PASS',
              starttime: '20210503 15:44:31.402',
              endtime: '20210503 15:44:31.403',
            },
          },
          '@attributes': {
            id: 's1-t3',
            name: 'Say Goodbye!',
          },
        },
        {
          kw: {
            arg: 'http://www.hpi.de',
            doc:
              'Open Chrome browser. See ``Open Available Browser`` for\ndescriptions of arguments.',
            msg: [
              {
                '@value': 'Creating an instance of the Chrome WebDriver.',
                '@attributes': {
                  timestamp: '20210503 15:44:31.404',
                  level: 'INFO',
                },
              },
              {
                '@value':
                  'Created download root directory: C:\\Users\\Varia\\AppData\\Local\\robocorp\\webdrivers',
                '@attributes': {
                  timestamp: '20210503 15:44:31.408',
                  level: 'INFO',
                },
              },
              {
                '@value':
                  'Created symlink directory: C:\\Users\\Varia\\AppData\\Local\\robocorp\\webdrivers',
                '@attributes': {
                  timestamp: '20210503 15:44:31.408',
                  level: 'INFO',
                },
              },
              {
                '@value': 'Creating an instance of the Chrome WebDriver.',
                '@attributes': {
                  timestamp: '20210503 15:44:31.409',
                  level: 'INFO',
                },
              },
              {
                '@value':
                  'Created Chrome browser with arguments: --disable-dev-shm-usage --disable-web-security --allow-running-insecure-content --no-sandbox',
                '@attributes': {
                  timestamp: '20210503 15:44:32.497',
                  level: 'INFO',
                },
              },
              {
                '@value':
                  '<p>Attempted combinations:</p><div class="doc"><table><tr><th>Browser</th><th>Download</th><th>Error</th></tr><tr><td>Chrome</td><td>False</td><td>Message: \'chromedriver\' executable needs to be in PATH. Please see https://sites.google.com/a/chromium.org/chromedriver/home\n</td></tr><tr><td>Chrome</td><td>True</td><td></td></tr></table></div>',
                '@attributes': {
                  timestamp: '20210503 15:44:32.497',
                  level: 'INFO',
                  html: 'true',
                },
              },
              {
                '@value': "Opening url 'http://www.hpi.de'",
                '@attributes': {
                  timestamp: '20210503 15:44:32.497',
                  level: 'INFO',
                },
              },
            ],
            status: {
              '@value': '',
              '@attributes': {
                status: 'PASS',
                starttime: '20210503 15:44:31.404',
                endtime: '20210503 15:44:36.613',
              },
            },
            '@attributes': {
              name: 'Open Chrome Browser',
              library: 'RPA.Browser.Selenium',
            },
          },
          status: {
            '@value': '',
            '@attributes': {
              status: 'PASS',
              starttime: '20210503 15:44:31.403',
              endtime: '20210503 15:44:36.613',
            },
          },
          '@attributes': {
            id: 's1-t4',
            name: 'Browser2',
          },
        },
        {
          kw: [
            {
              arg: 'http://www.google.com',
              doc:
                'Open Chrome browser. See ``Open Available Browser`` for\ndescriptions of arguments.',
              msg: [
                {
                  '@value': 'Creating an instance of the Chrome WebDriver.',
                  '@attributes': {
                    timestamp: '20210503 15:44:36.615',
                    level: 'INFO',
                  },
                },
                {
                  '@value':
                    'Created download root directory: C:\\Users\\Varia\\AppData\\Local\\robocorp\\webdrivers',
                  '@attributes': {
                    timestamp: '20210503 15:44:36.620',
                    level: 'INFO',
                  },
                },
                {
                  '@value':
                    'Created symlink directory: C:\\Users\\Varia\\AppData\\Local\\robocorp\\webdrivers',
                  '@attributes': {
                    timestamp: '20210503 15:44:36.620',
                    level: 'INFO',
                  },
                },
                {
                  '@value': 'Creating an instance of the Chrome WebDriver.',
                  '@attributes': {
                    timestamp: '20210503 15:44:36.621',
                    level: 'INFO',
                  },
                },
                {
                  '@value':
                    'Created Chrome browser with arguments: --disable-dev-shm-usage --disable-web-security --allow-running-insecure-content --no-sandbox',
                  '@attributes': {
                    timestamp: '20210503 15:44:37.669',
                    level: 'INFO',
                  },
                },
                {
                  '@value':
                    '<p>Attempted combinations:</p><div class="doc"><table><tr><th>Browser</th><th>Download</th><th>Error</th></tr><tr><td>Chrome</td><td>False</td><td>Message: \'chromedriver\' executable needs to be in PATH. Please see https://sites.google.com/a/chromium.org/chromedriver/home\n</td></tr><tr><td>Chrome</td><td>True</td><td></td></tr></table></div>',
                  '@attributes': {
                    timestamp: '20210503 15:44:37.669',
                    level: 'INFO',
                    html: 'true',
                  },
                },
                {
                  '@value': "Opening url 'http://www.google.com'",
                  '@attributes': {
                    timestamp: '20210503 15:44:37.669',
                    level: 'INFO',
                  },
                },
              ],
              status: {
                '@value': '',
                '@attributes': {
                  status: 'PASS',
                  starttime: '20210503 15:44:36.614',
                  endtime: '20210503 15:44:38.517',
                },
              },
              '@attributes': {
                name: 'Open Chrome Browser',
                library: 'RPA.Browser.Selenium',
              },
            },
            {
              arg: ['2', '2', 'ZWEI'],
              doc: 'Set a cell value in the given worksheet.',
              status: {
                '@value': '',
                '@attributes': {
                  status: 'PASS',
                  starttime: '20210503 15:44:38.517',
                  endtime: '20210503 15:44:38.517',
                },
              },
              '@attributes': {
                name: 'Set Worksheet Value',
                library: 'RPA.Excel.Files',
              },
            },
          ],
          status: {
            '@value': '',
            '@attributes': {
              status: 'PASS',
              starttime: '20210503 15:44:36.614',
              endtime: '20210503 15:44:38.517',
            },
          },
          '@attributes': {
            id: 's1-t5',
            name: 'Browser3',
          },
        },
        {
          kw: {
            arg: ['2', '2', 'DREI'],
            doc: 'Set a cell value in the given worksheet.',
            status: {
              '@value': '',
              '@attributes': {
                status: 'PASS',
                starttime: '20210503 15:44:38.518',
                endtime: '20210503 15:44:38.518',
              },
            },
            '@attributes': {
              name: 'Set Worksheet Value',
              library: 'RPA.Excel.Files',
            },
          },
          status: {
            '@value': '',
            '@attributes': {
              status: 'PASS',
              starttime: '20210503 15:44:38.517',
              endtime: '20210503 15:44:38.518',
            },
          },
          '@attributes': {
            id: 's1-t6',
            name: 'Interrupt',
          },
        },
        {
          kw: [
            {
              arg: 'http://www.google.com',
              doc:
                'Open Chrome browser. See ``Open Available Browser`` for\ndescriptions of arguments.',
              msg: [
                {
                  '@value': 'Creating an instance of the Chrome WebDriver.',
                  '@attributes': {
                    timestamp: '20210503 15:44:38.519',
                    level: 'INFO',
                  },
                },
                {
                  '@value':
                    'Created download root directory: C:\\Users\\Varia\\AppData\\Local\\robocorp\\webdrivers',
                  '@attributes': {
                    timestamp: '20210503 15:44:38.522',
                    level: 'INFO',
                  },
                },
                {
                  '@value':
                    'Created symlink directory: C:\\Users\\Varia\\AppData\\Local\\robocorp\\webdrivers',
                  '@attributes': {
                    timestamp: '20210503 15:44:38.522',
                    level: 'INFO',
                  },
                },
                {
                  '@value': 'Creating an instance of the Chrome WebDriver.',
                  '@attributes': {
                    timestamp: '20210503 15:44:38.523',
                    level: 'INFO',
                  },
                },
                {
                  '@value':
                    'Created Chrome browser with arguments: --disable-dev-shm-usage --disable-web-security --allow-running-insecure-content --no-sandbox',
                  '@attributes': {
                    timestamp: '20210503 15:44:39.642',
                    level: 'INFO',
                  },
                },
                {
                  '@value':
                    '<p>Attempted combinations:</p><div class="doc"><table><tr><th>Browser</th><th>Download</th><th>Error</th></tr><tr><td>Chrome</td><td>False</td><td>Message: \'chromedriver\' executable needs to be in PATH. Please see https://sites.google.com/a/chromium.org/chromedriver/home\n</td></tr><tr><td>Chrome</td><td>True</td><td></td></tr></table></div>',
                  '@attributes': {
                    timestamp: '20210503 15:44:39.642',
                    level: 'INFO',
                    html: 'true',
                  },
                },
                {
                  '@value': "Opening url 'http://www.google.com'",
                  '@attributes': {
                    timestamp: '20210503 15:44:39.642',
                    level: 'INFO',
                  },
                },
              ],
              status: {
                '@value': '',
                '@attributes': {
                  status: 'PASS',
                  starttime: '20210503 15:44:38.518',
                  endtime: '20210503 15:44:40.464',
                },
              },
              '@attributes': {
                name: 'Open Chrome Browser',
                library: 'RPA.Browser.Selenium',
              },
            },
            {
              arg: ['2', '2', 'ZWEI'],
              doc: 'Set a cell value in the given worksheet.',
              status: {
                '@value': '',
                '@attributes': {
                  status: 'PASS',
                  starttime: '20210503 15:44:40.464',
                  endtime: '20210503 15:44:40.464',
                },
              },
              '@attributes': {
                name: 'Set Worksheet Value',
                library: 'RPA.Excel.Files',
              },
            },
          ],
          status: {
            '@value': '',
            '@attributes': {
              status: 'PASS',
              starttime: '20210503 15:44:38.518',
              endtime: '20210503 15:44:40.464',
            },
          },
          '@attributes': {
            id: 's1-t7',
            name: 'Browser4',
          },
        },
        {
          kw: {
            arg: 'C:/Users/Varia/OneDrive/Desktop/demo.xlsx',
            doc: 'Save the active workbook.',
            status: {
              '@value': '',
              '@attributes': {
                status: 'PASS',
                starttime: '20210503 15:44:40.465',
                endtime: '20210503 15:44:40.481',
              },
            },
            '@attributes': {
              name: 'Save Workbook',
              library: 'RPA.Excel.Files',
            },
          },
          status: {
            '@value': '',
            '@attributes': {
              status: 'PASS',
              starttime: '20210503 15:44:40.464',
              endtime: '20210503 15:44:40.482',
            },
          },
          '@attributes': {
            id: 's1-t8',
            name: 'Save file',
          },
        },
      ],
      status: {
        '@value': '',
        '@attributes': {
          status: 'PASS',
          starttime: '20210503 15:44:25.394',
          endtime: '20210503 15:44:40.482',
        },
      },
      '@attributes': {
        id: 's1',
        name: 'Test',
        source:
          'C:\\Users\\Varia\\AndroidStudioProjects\\ark_automate_local\\robotExecution\\test.robot',
      },
    },
    statistics: {
      total: {
        stat: {
          '@value': 'All Tasks',
          '@attributes': {
            pass: '8',
            fail: '0',
            skip: '0',
          },
        },
      },
      tag: '',
      suite: {
        stat: {
          '@value': 'Test',
          '@attributes': {
            pass: '8',
            fail: '0',
            skip: '0',
            id: 's1',
            name: 'Test',
          },
        },
      },
    },
    errors: '',
    '@attributes': {
      generator: 'Robot 4.0 (Python 3.9.0 on win32)',
      generated: '20210503 15:44:25.392',
      rpa: 'true',
      schemaversion: '2',
    },
  },
};

exports.failingRobotRun = {
  robot: {
    suite: {
      test: [
        {
          kw: {
            arg: 'http://www.hpi.de',
            doc:
              'Open Chrome browser. See ``Open Available Browser`` for\ndescriptions of arguments.',
            msg: [
              {
                '@value': 'Creating an instance of the Chrome WebDriver.',
                '@attributes': {
                  timestamp: '20210503 15:56:10.936',
                  level: 'INFO',
                },
              },
              {
                '@value':
                  'Created download root directory: C:\\Users\\Varia\\AppData\\Local\\robocorp\\webdrivers',
                '@attributes': {
                  timestamp: '20210503 15:56:10.946',
                  level: 'INFO',
                },
              },
              {
                '@value':
                  'Created symlink directory: C:\\Users\\Varia\\AppData\\Local\\robocorp\\webdrivers',
                '@attributes': {
                  timestamp: '20210503 15:56:10.946',
                  level: 'INFO',
                },
              },
              {
                '@value': 'Creating an instance of the Chrome WebDriver.',
                '@attributes': {
                  timestamp: '20210503 15:56:10.946',
                  level: 'INFO',
                },
              },
              {
                '@value':
                  'Created Chrome browser with arguments: --disable-dev-shm-usage --disable-web-security --allow-running-insecure-content --no-sandbox',
                '@attributes': {
                  timestamp: '20210503 15:56:12.073',
                  level: 'INFO',
                },
              },
              {
                '@value':
                  '<p>Attempted combinations:</p><div class="doc"><table><tr><th>Browser</th><th>Download</th><th>Error</th></tr><tr><td>Chrome</td><td>False</td><td>Message: \'chromedriver\' executable needs to be in PATH. Please see https://sites.google.com/a/chromium.org/chromedriver/home\n</td></tr><tr><td>Chrome</td><td>True</td><td></td></tr></table></div>',
                '@attributes': {
                  timestamp: '20210503 15:56:12.073',
                  level: 'INFO',
                  html: 'true',
                },
              },
              {
                '@value': "Opening url 'http://www.hpi.de'",
                '@attributes': {
                  timestamp: '20210503 15:56:12.073',
                  level: 'INFO',
                },
              },
            ],
            status: {
              '@value': '',
              '@attributes': {
                status: 'PASS',
                starttime: '20210503 15:56:10.936',
                endtime: '20210503 15:56:16.472',
              },
            },
            '@attributes': {
              name: 'Open Chrome Browser',
              library: 'RPA.Browser.Selenium',
            },
          },
          status: {
            '@value': '',
            '@attributes': {
              status: 'PASS',
              starttime: '20210503 15:56:10.935',
              endtime: '20210503 15:56:16.472',
            },
          },
          '@attributes': {
            id: 's1-t1',
            name: 'Browser1',
          },
        },
        {
          kw: {
            arg: 'C:/Users/OneDrive/Desktop/demo.xlsx',
            doc: 'Open an existing Excel workbook.',
            msg: {
              '@value':
                "FileNotFoundError: [WinError 3] Das System kann den angegebenen Pfad nicht finden: 'C:\\\\Users\\\\OneDrive\\\\Desktop\\\\demo.xlsx'",
              '@attributes': {
                timestamp: '20210503 15:56:16.489',
                level: 'FAIL',
              },
            },
            status: {
              '@value': '',
              '@attributes': {
                status: 'FAIL',
                starttime: '20210503 15:56:16.473',
                endtime: '20210503 15:56:16.489',
              },
            },
            '@attributes': {
              name: 'Open Workbook',
              library: 'RPA.Excel.Files',
            },
          },
          status: {
            '@value':
              "FileNotFoundError: [WinError 3] Das System kann den angegebenen Pfad nicht finden: 'C:\\\\Users\\\\OneDrive\\\\Desktop\\\\demo.xlsx'",
            '@attributes': {
              status: 'FAIL',
              starttime: '20210503 15:56:16.472',
              endtime: '20210503 15:56:16.489',
            },
          },
          '@attributes': {
            id: 's1-t2',
            name: 'Say hello',
          },
        },
        {
          kw: [
            {
              arg: ['2', '2', 'EINS'],
              doc: 'Set a cell value in the given worksheet.',
              msg: {
                '@value': 'No active workbook',
                '@attributes': {
                  timestamp: '20210503 15:56:16.491',
                  level: 'FAIL',
                },
              },
              status: {
                '@value': '',
                '@attributes': {
                  status: 'FAIL',
                  starttime: '20210503 15:56:16.490',
                  endtime: '20210503 15:56:16.491',
                },
              },
              '@attributes': {
                name: 'Set Worksheet Value',
                library: 'RPA.Excel.Files',
              },
            },
            {
              arg: ['2', '2', 'NICHTZWEI'],
              doc: 'Set a cell value in the given worksheet.',
              status: {
                '@value': '',
                '@attributes': {
                  status: 'NOT RUN',
                  starttime: '20210503 15:56:16.491',
                  endtime: '20210503 15:56:16.491',
                },
              },
              '@attributes': {
                name: 'Set Worksheet Value',
                library: 'RPA.Excel.Files',
              },
            },
          ],
          status: {
            '@value': 'No active workbook',
            '@attributes': {
              status: 'FAIL',
              starttime: '20210503 15:56:16.490',
              endtime: '20210503 15:56:16.491',
            },
          },
          '@attributes': {
            id: 's1-t3',
            name: 'Say Goodbye!',
          },
        },
        {
          kw: {
            arg: 'http://www.hpi.de',
            doc:
              'Open Chrome browser. See ``Open Available Browser`` for\ndescriptions of arguments.',
            msg: [
              {
                '@value': 'Creating an instance of the Chrome WebDriver.',
                '@attributes': {
                  timestamp: '20210503 15:56:16.493',
                  level: 'INFO',
                },
              },
              {
                '@value':
                  'Created download root directory: C:\\Users\\Varia\\AppData\\Local\\robocorp\\webdrivers',
                '@attributes': {
                  timestamp: '20210503 15:56:16.497',
                  level: 'INFO',
                },
              },
              {
                '@value':
                  'Created symlink directory: C:\\Users\\Varia\\AppData\\Local\\robocorp\\webdrivers',
                '@attributes': {
                  timestamp: '20210503 15:56:16.498',
                  level: 'INFO',
                },
              },
              {
                '@value': 'Creating an instance of the Chrome WebDriver.',
                '@attributes': {
                  timestamp: '20210503 15:56:16.498',
                  level: 'INFO',
                },
              },
              {
                '@value':
                  'Created Chrome browser with arguments: --disable-dev-shm-usage --disable-web-security --allow-running-insecure-content --no-sandbox',
                '@attributes': {
                  timestamp: '20210503 15:56:17.557',
                  level: 'INFO',
                },
              },
              {
                '@value':
                  '<p>Attempted combinations:</p><div class="doc"><table><tr><th>Browser</th><th>Download</th><th>Error</th></tr><tr><td>Chrome</td><td>False</td><td>Message: \'chromedriver\' executable needs to be in PATH. Please see https://sites.google.com/a/chromium.org/chromedriver/home\n</td></tr><tr><td>Chrome</td><td>True</td><td></td></tr></table></div>',
                '@attributes': {
                  timestamp: '20210503 15:56:17.557',
                  level: 'INFO',
                  html: 'true',
                },
              },
              {
                '@value': "Opening url 'http://www.hpi.de'",
                '@attributes': {
                  timestamp: '20210503 15:56:17.557',
                  level: 'INFO',
                },
              },
            ],
            status: {
              '@value': '',
              '@attributes': {
                status: 'PASS',
                starttime: '20210503 15:56:16.492',
                endtime: '20210503 15:56:21.784',
              },
            },
            '@attributes': {
              name: 'Open Chrome Browser',
              library: 'RPA.Browser.Selenium',
            },
          },
          status: {
            '@value': '',
            '@attributes': {
              status: 'PASS',
              starttime: '20210503 15:56:16.492',
              endtime: '20210503 15:56:21.784',
            },
          },
          '@attributes': {
            id: 's1-t4',
            name: 'Browser2',
          },
        },
        {
          kw: [
            {
              arg: 'http://www.google.com',
              msg: {
                '@value':
                  "No keyword with name 'Open Chrom Browser' found. Did you mean:\n    RPA.Browser.Selenium.Open Chrome Browser",
                '@attributes': {
                  timestamp: '20210503 15:56:21.788',
                  level: 'FAIL',
                },
              },
              status: {
                '@value': '',
                '@attributes': {
                  status: 'FAIL',
                  starttime: '20210503 15:56:21.788',
                  endtime: '20210503 15:56:21.788',
                },
              },
              '@attributes': {
                name: 'Open Chrom Browser',
              },
            },
            {
              arg: ['2', '2', 'ZWEI'],
              doc: 'Set a cell value in the given worksheet.',
              status: {
                '@value': '',
                '@attributes': {
                  status: 'NOT RUN',
                  starttime: '20210503 15:56:21.788',
                  endtime: '20210503 15:56:21.788',
                },
              },
              '@attributes': {
                name: 'Set Worksheet Value',
                library: 'RPA.Excel.Files',
              },
            },
          ],
          status: {
            '@value':
              "No keyword with name 'Open Chrom Browser' found. Did you mean:\n    RPA.Browser.Selenium.Open Chrome Browser",
            '@attributes': {
              status: 'FAIL',
              starttime: '20210503 15:56:21.785',
              endtime: '20210503 15:56:21.788',
            },
          },
          '@attributes': {
            id: 's1-t5',
            name: 'Browser3',
          },
        },
        {
          kw: {
            arg: ['2', '2', 'DREI'],
            doc: 'Set a cell value in the given worksheet.',
            msg: {
              '@value': 'No active workbook',
              '@attributes': {
                timestamp: '20210503 15:56:21.791',
                level: 'FAIL',
              },
            },
            status: {
              '@value': '',
              '@attributes': {
                status: 'FAIL',
                starttime: '20210503 15:56:21.790',
                endtime: '20210503 15:56:21.791',
              },
            },
            '@attributes': {
              name: 'Set Worksheet Value',
              library: 'RPA.Excel.Files',
            },
          },
          status: {
            '@value': 'No active workbook',
            '@attributes': {
              status: 'FAIL',
              starttime: '20210503 15:56:21.789',
              endtime: '20210503 15:56:21.791',
            },
          },
          '@attributes': {
            id: 's1-t6',
            name: 'Interrupt',
          },
        },
        {
          kw: [
            {
              arg: 'http://www.google.com',
              doc:
                'Open Chrome browser. See ``Open Available Browser`` for\ndescriptions of arguments.',
              msg: [
                {
                  '@value': 'Creating an instance of the Chrome WebDriver.',
                  '@attributes': {
                    timestamp: '20210503 15:56:21.793',
                    level: 'INFO',
                  },
                },
                {
                  '@value':
                    'Created download root directory: C:\\Users\\Varia\\AppData\\Local\\robocorp\\webdrivers',
                  '@attributes': {
                    timestamp: '20210503 15:56:21.800',
                    level: 'INFO',
                  },
                },
                {
                  '@value':
                    'Created symlink directory: C:\\Users\\Varia\\AppData\\Local\\robocorp\\webdrivers',
                  '@attributes': {
                    timestamp: '20210503 15:56:21.800',
                    level: 'INFO',
                  },
                },
                {
                  '@value': 'Creating an instance of the Chrome WebDriver.',
                  '@attributes': {
                    timestamp: '20210503 15:56:21.801',
                    level: 'INFO',
                  },
                },
                {
                  '@value':
                    'Created Chrome browser with arguments: --disable-dev-shm-usage --disable-web-security --allow-running-insecure-content --no-sandbox',
                  '@attributes': {
                    timestamp: '20210503 15:56:22.923',
                    level: 'INFO',
                  },
                },
                {
                  '@value':
                    '<p>Attempted combinations:</p><div class="doc"><table><tr><th>Browser</th><th>Download</th><th>Error</th></tr><tr><td>Chrome</td><td>False</td><td>Message: \'chromedriver\' executable needs to be in PATH. Please see https://sites.google.com/a/chromium.org/chromedriver/home\n</td></tr><tr><td>Chrome</td><td>True</td><td></td></tr></table></div>',
                  '@attributes': {
                    timestamp: '20210503 15:56:22.923',
                    level: 'INFO',
                    html: 'true',
                  },
                },
                {
                  '@value': "Opening url 'http://www.google.com'",
                  '@attributes': {
                    timestamp: '20210503 15:56:22.923',
                    level: 'INFO',
                  },
                },
              ],
              status: {
                '@value': '',
                '@attributes': {
                  status: 'PASS',
                  starttime: '20210503 15:56:21.792',
                  endtime: '20210503 15:56:23.856',
                },
              },
              '@attributes': {
                name: 'Open Chrome Browser',
                library: 'RPA.Browser.Selenium',
              },
            },
            {
              arg: ['2', '2', 'ZWEI'],
              doc: 'Set a cell value in the given worksheet.',
              msg: {
                '@value': 'No active workbook',
                '@attributes': {
                  timestamp: '20210503 15:56:23.856',
                  level: 'FAIL',
                },
              },
              status: {
                '@value': '',
                '@attributes': {
                  status: 'FAIL',
                  starttime: '20210503 15:56:23.856',
                  endtime: '20210503 15:56:23.856',
                },
              },
              '@attributes': {
                name: 'Set Worksheet Value',
                library: 'RPA.Excel.Files',
              },
            },
          ],
          status: {
            '@value': 'No active workbook',
            '@attributes': {
              status: 'FAIL',
              starttime: '20210503 15:56:21.792',
              endtime: '20210503 15:56:23.856',
            },
          },
          '@attributes': {
            id: 's1-t7',
            name: 'Browser4',
          },
        },
        {
          kw: {
            arg: 'C:/Users/Varia/OneDrive/Desktop/demo.xlsx',
            doc: 'Save the active workbook.',
            msg: {
              '@value': 'No active workbook',
              '@attributes': {
                timestamp: '20210503 15:56:23.857',
                level: 'FAIL',
              },
            },
            status: {
              '@value': '',
              '@attributes': {
                status: 'FAIL',
                starttime: '20210503 15:56:23.857',
                endtime: '20210503 15:56:23.857',
              },
            },
            '@attributes': {
              name: 'Save Workbook',
              library: 'RPA.Excel.Files',
            },
          },
          status: {
            '@value': 'No active workbook',
            '@attributes': {
              status: 'FAIL',
              starttime: '20210503 15:56:23.857',
              endtime: '20210503 15:56:23.857',
            },
          },
          '@attributes': {
            id: 's1-t8',
            name: 'Save file',
          },
        },
      ],
      status: {
        '@value': '',
        '@attributes': {
          status: 'FAIL',
          starttime: '20210503 15:56:10.190',
          endtime: '20210503 15:56:23.858',
        },
      },
      '@attributes': {
        id: 's1',
        name: 'Test',
        source:
          'C:\\Users\\Varia\\AndroidStudioProjects\\ark_automate_local\\robotExecution\\test.robot',
      },
    },
    statistics: {
      total: {
        stat: {
          '@value': 'All Tasks',
          '@attributes': {
            pass: '2',
            fail: '6',
            skip: '0',
          },
        },
      },
      tag: '',
      suite: {
        stat: {
          '@value': 'Test',
          '@attributes': {
            pass: '2',
            fail: '6',
            skip: '0',
            id: 's1',
            name: 'Test',
          },
        },
      },
    },
    errors: '',
    '@attributes': {
      generator: 'Robot 4.0 (Python 3.9.0 on win32)',
      generated: '20210503 15:56:10.189',
      rpa: 'true',
      schemaversion: '2',
    },
  },
};
