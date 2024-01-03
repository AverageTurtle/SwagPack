@echo off

pushd %~dp0\..\
call packwiz.exe mr export
popd

PAUSE