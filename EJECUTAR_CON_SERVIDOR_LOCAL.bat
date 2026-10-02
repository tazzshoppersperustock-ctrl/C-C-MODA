@echo off
title C&C Studio Server
echo ========================================================
echo   Iniciando Servidor Local para C&C Studio
echo   Acceso: http://localhost:8080
echo ========================================================
echo.
start "" "http://localhost:8080"
python -m http.server 8080 --directory "%~dp0"
pause
