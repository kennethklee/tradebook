@ECHO OFF

del /S /Q bin
xcopy /Y /E web bin\
java -jar tools\build\SoyToJsSrcCompiler.jar --outputPathFormat bin\assets\javascripts\templates\tradebook.template.js templates\*.soy

echo build finished