@echo off

pushd %~dp0\..\
call packwiz.exe refresh --build
popd

PAUSE