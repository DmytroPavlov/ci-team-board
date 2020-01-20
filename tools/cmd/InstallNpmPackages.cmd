cd ..\..\

rmdir node_modules /S /Q

del package-lock.json /f

npm i @nrwl/cli -g && npm i -g @angular/cli && npm i

pause
