require('../styles/main.scss');
var template = require("layout.html.twig");
var html = template({title: 'dialog title'});

import greet from './greeter.js';


console.log("I'm the entry point");
greet();
