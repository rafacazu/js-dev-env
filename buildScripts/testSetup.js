//this file  is not transpiled,so must use commonJS or ES5

//Register babel to transpile befor our test run
require('babel-register')();

//Disable webpack feature that mocha doesn't understand
require.extensions['.css'] = function(){

}