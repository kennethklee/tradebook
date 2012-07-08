@ECHO OFF

del /S /Q ..\..\bin
xcopy /Y /E ..\..\web ..\..\bin\
java -jar SoyToJsSrcCompiler.jar --outputPathFormat ..\..\bin\assets\javascripts\templates\tradebook.js ..\..\templates\tradebook.soy

echo build finished