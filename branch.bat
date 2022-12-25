@echo off
set /p branch=branch:

git checkout -b "%branch%"
git push -u origin "%branch%"

pause