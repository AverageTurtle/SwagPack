@echo off

pushd %~dp0\..\
call packwiz.exe refresh
popd

PAUSE