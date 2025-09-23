//? 1) How to regain the node_modules?
// --> If node_modules got deleted from the project, how to get them back?
// --> just use "npm i" or "npm install"
// --> The above command will go to the package.json file and install all the dependencies for our project in the node_modules


//? 2) Should we push node_modules into github?
// --> NO
// --> As it is not part of our pure source code
// --> It can be regenerated anytime while starting the project


//? 3) How to ignore node_modules or any directory or files from being scanned by git
// --> Create a file called ".gitignore" in the directory where node_modules are
// --> Place the paths of all the files / directories (including node_modules) in the ".gitignore" file which we don't want git to tract
// --> The path should be relative to the ".gitignore" file


//? 4) 
