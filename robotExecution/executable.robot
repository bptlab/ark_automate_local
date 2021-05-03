*** Settings ***
Library    RPA.Excel.Files

*** Tasks ***
Excel.Files
#Open file
    Open Workbook    C:/Users/daniel/Desktop/demo.xlsx
#Write to Excel
    Set Worksheet Value    3    3    Whats up    None
#Save file
    Save Workbook    C:/Users/daniel/Desktop/demo.xlsx
