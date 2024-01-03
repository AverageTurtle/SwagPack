@echo off

pushd %~dp0\..\
call packwiz.exe update --all
popd

PAUSE