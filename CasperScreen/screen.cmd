SET scriptFolder=F:\Projects\[GITHub]\ays\CasperScreen\
SET scriptName=screenshot.js
SET outputFile=screen.jpg

cd "%scriptFolder%"

"C:\bin\casperjs\bin\casperjs" %scriptName% %outputFile%
SET outputFilePath=%scriptFolder%%outputFile%
copy /y "%outputFilePath%" "C:\Windows\System32\oobe\info\backgrounds\backgroundDefault.jpg"
