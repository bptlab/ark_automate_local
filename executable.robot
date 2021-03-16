*** Settings ***
Documentation  Our first parsed RPA
Library    RPA.Excel.Files
Library    RPA.Browser

*** Tasks ***
SecondActivity
  Find Empty Row  TestString
