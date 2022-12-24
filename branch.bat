@echo off
set /p branch=commit:

git checkout -b "%branch%"
git push -u origin "%branch%"

pause