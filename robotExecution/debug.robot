*** Settings ***
Library    RPA.Excel.Files
Library    RPA.Browser.Selenium

*** Tasks ***
Browser1
    Open Chrome Browser    http://www.zeit.de
Say hello
    Open Workbook    C:/Users/daniel/Desktop/demo.xlsx
Say Goodbye!
    Set Worksheet Value    2    2        EINS
    Set Worksheet Value    2    2        NICHTZWEI
Browser2
    Open Chro Browser    http://www.zeit.de
Browser3
    Open Chrome Browser    http://www.google.com
    Set Worksheet Value    2    2        ZWEI
Interrupt
    Set Worksheet Value    2    2        DREI
Browser4
    Open Chrome Browser    http://www.google.com
    Set Worksheet Value    2    2        ZWEI
Save file
    Save Workbook    C:/Users/daniel/Desktop/demo.xlsx
