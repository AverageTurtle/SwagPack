@echo off

:loop
set /p mod=modrinth mod:
pushd %~dp0\..\
call packwiz.exe modrinth add %mod%
popd
goto loop