@echo off
echo start api
echo execute: npm start
cd local-gold-api
start npm start
cd ..

echo waiting for api start ...
set "API_PORT=9990"

:CHECK_PORT
timeout /t 1 /nobreak >nul
netstat -ano | findstr ":%API_PORT% " >nul
if %errorlevel% equ 0 (
    echo port is listening, start ui
    timeout /t 3 /nobreak >nul
    "C:\Program Files\Google\Chrome\Application\chrome.exe" "D:\Develop\WebApplications\javascript\local-gold\local-gold-ui\index.html"
) else (
    echo port is not listening, retry
    goto CHECK_PORT
)

echo over
