# Focus Budget Manager

This application is being developed as part of a tutorial series.

##REQUIRMENTS:
MongoDB
NodeJS

## Build Setup

```bash
# To install the  API dependencies go to
# your main folder
npm i

# Go to services/BudgetManagerAPI/config/
# and setup a MongoDB with new terminal
#First path is loaction of your mongod.exe and second path is location where data will be stored. We recommend to use  \services\BudgetManagerAPI\config
"C:\Program Files\MongoDB\Server\4.0\bin\mongod.exe"   -dbpath="C:\Users\alexk\Desktop\BigAssPracrticeProject\database"

#When launch Mongo in separate terminal 
"C:\Program Files\MongoDB\Server\4.0\bin\mongo.exe"
#Now start new separate terminal
# Go back to your main folder
node services

#Now create new separate termianl in main folder 
cd application
npm i

#You may have problem with chromedriver during with phase like 
ChromeDriver installation failed Error extracting archive: Error: end of central directory record signature not found
npm WARN karma-sinon-chai@1.3.2 requires a peer of sinon@^2.1.0 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.1.3 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.1.3: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! chromedriver@2.40.0 install: `node install.js`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the chromedriver@2.40.0 install script.
#It's fine, sometimes shit happens. You will have to install it manualy with
npm install chromedriver
npm install sass
#or gloablly
npm install -g chromedriver
npm install -g sass
#And then run again
npm i
#to install SASS and other dependencies 

# Serve with hot reload at localhost:8080
npm run dev

#At this point you may have error aka
in ./src/components/Creation/ClientEdit.vue

Module build failed: Error: ENOENT: no such file or directory, scandir 'C:\Users\alexk\Desktop\BigAssPracrticeProject\application\node_modules\node-sass\vendor'

#Run 
nmp i node-sass
#and then come back to
npm run dev
#Now you will have terminal with adress of running app

# For more details about npm scripts on application
# like how to build for production, read the README
# located inside applications folder
```
