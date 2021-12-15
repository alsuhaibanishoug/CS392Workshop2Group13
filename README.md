![Build Status](https://app.travis-ci.com/alsuhaibanishoug/CS392Workshop2Group13.svg?branch=main)
# Text Classification System
## Description 
This WorkShop is based on developing a Web-based machine learning system for a Text Classfier System that Works by Node-FastText tool.

## Method of Operating
The System will be trained by using this [Training Data](https://github.com/alsuhaibanishoug/CS392Workshop2Group13/blob/main/train.txt) after that the System Takes a text entered by a user from the Webpage then predicts its category in [index.js](https://github.com/alsuhaibanishoug/CS392Workshop2Group13/blob/main/index.js) and the results can be found in the Terminal.
### To Run
 You can go ahead and download the [index.html](https://github.com/alsuhaibanishoug/CS392Workshop2Group13/blob/main/index.html), [index.js](https://github.com/alsuhaibanishoug/CS392Workshop2Group13/blob/main/index.js) and [train.txt](https://github.com/alsuhaibanishoug/CS392Workshop2Group13/blob/main/train.txt) from this Repository and save them in a folder along with these dependencies for the System:
 - FastText 
```
npm install node-fasttext  --save
```
 - Express
```
npm install express --save
```
 - Cors
```
npm install cors --save
```
or simply by using

```
npm install
```
you can now run the Node js Server
```
node index.js
```
after it's done you can open the Webpage using the given port number by the Terminal and use the System.

## Travic CI tool

Travis CI used here to test the Pushed code each time automatically.\
There is a few steps to Integrate and run Travic CI in your project, Starting with:
### Integrating Travis CI 

- First go to Travic CI Website [here](https://www.travis-ci.com) and Sign in with your GitHub account.
- After you sign in and sync your account enabled the Repository your project is on.
- Now you can open your project Repositoy on your favourite editor (VS code recommended) and create a new file named .travic.yml (you can use mine [here](https://github.com/alsuhaibanishoug/CS392Workshop2Group13/blob/main/.travis.yml)).
- Now you have to make a test so your project can pass it. if you look at your package.json file under "scripts" you will find the default test script and if you look at it you will know it will cause your project to fail (CUZ THERE IS NO TEST!!).
```
"echo \"Error: no test specified\" && exit 1"
```
- You can change it to this test and your project will pass it easily (CUZ THERE IS NO TEST!!). 
```
"echo \"No test specified\""
```
- Or you can make some .js and test.js test files for your project to pass (Look at mine [here](https://github.com/alsuhaibanishoug/CS392Workshop2Group13/blob/main/FastTextResult.js) and [here](https://github.com/alsuhaibanishoug/CS392Workshop2Group13/blob/main/FastTextResult.test.js) ) after your test is done do not forget to add it in your package.json file. 


### Running Travis CI 

After you are done with integration Travis CI now you can Run it.
- First open your Project Repository on Terminal and run the following command 
```
git status
```
what this command dose is making you know which files has been modified and which were added
-after that run two Following commands
```
git add .
```
```
git commit -m "the name of your commit "
```
- then run 
```
git push
```
- After that your travic CI page should have one created branch under Branches.
![This is an image](https://github.com/alsuhaibanishoug/CS392Workshop2Group13/blob/main/README%20Pic/Screen%20Shot%202021-12-15%20at%204.32.11%20PM.png)
- You can Press on the shown number of branch to see more details.
![This is an image](https://github.com/alsuhaibanishoug/CS392Workshop2Group13/blob/main/README%20Pic/Screen%20Shot%202021-12-15%20at%204.40.13%20PM.png) 
- After Following all these steps you should end up with a successful Build (green). 
- **OPTIONAL** you can add the bulid tage to your README.md Repository file by Pressing on the build state on your Travis CI page then choose Markdown option, copy the link and pasted in your README.md file. ![This is an image](https://github.com/alsuhaibanishoug/CS392Workshop2Group13/blob/main/README%20Pic/Screen%20Shot%202021-12-15%20at%204.32.38%20PM.png) 
