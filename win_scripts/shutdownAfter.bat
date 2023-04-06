@echo off
set /p time="Enter time in minutes: "
set /A time= %time% * 60
shutdown -s -t %time%