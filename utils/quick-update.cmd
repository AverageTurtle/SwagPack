@echo off

:loop
set /p mod=mod:
pushd %~dp0\..\
call packwiz.exe update %mod%
popd
goto loop