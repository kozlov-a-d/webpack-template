require('../styles/main.scss');
// require('../images/**/*.*');
require('images-require-hook')(['jpg', 'jpeg', 'png', 'gif', 'svg'], '../images/');
require('../images/*.svg');

import greet from './greeter.js';


console.log("I'm the entry point");
greet();
