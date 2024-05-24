# Webpack-Template
Template for npm webpack bundler 

Run the following commands in order on the CLI:
------------------------------------------------
1. Update README with the description of the project (The first line after the title [#] is going the be the description on the package.json file)


2. npm init -y

3. npm install webpack webpack-cli --save-dev

4. npm install --save-dev webpack-dev-server

5. npm install --save-dev html-webpack-plugin

6. npm install --save-dev webpack-merge

7. Create and set a "private" variable to false inside of the package.json file and remove "main" variable


Use the following below for assets used in project

ASSET DEPENDENCIES NOT INCLUDED. USE THE CLI TO INSTALL
-----------------------------------------------------------

--CSS:
    
    npm install --save-dev style-loader css-loader

--CSV and XML files:
    
    npm install --save-dev csv-loader xml-loader

--toml yamljs json5 files:
    
    npm install toml yamljs json5 --savedev

--For html template use html-webpack-plugin:
    
    npm install --save-dev html-webpack-plugin

--Compatability with older browsers(babel):
    
    npm install -D babel-loader @babel/core @babel/preset-env webpack
    
This allows for 3 config files to be used and allow for differing modes based on package.json script command
-"start" command uses the dev and common files
-"build" command uses the prod file as well as the dependencies on it

MINICSS WILL BE ADDED ONCE MULTIPLE STYLE FILES ARE NEEDED


In case of a new IDE being set up on a different desktop/laptop/virtualPC
----------------------------------------------------------------------------
*For formatting install the Prettier and ESLint extensions for VSCode*

Instructions for setting up 'open' alias command for index.html files:

"I think the best way to do this is to use explorer.exe. You can use explorer.exe to open anything web related in your default browser.

So edit your .bashrc and add this line: export BROWSER="explorer.exe"

If you're familiar with cmd, then you probably miss the start command for opening the file explorer in your current directory. What you can do is add an alias:

alias start="explorer.exe"

Then you can open your html files in your default browser like this:

start example.html

And you can also open file explorer in the current directory with start .

I just realized you use zsh, so you can add the above to .zshrc instead."
Damian-Gray on Reddit
