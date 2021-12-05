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
after it's done you can open the Webpage using the given port number by the Terminal.
