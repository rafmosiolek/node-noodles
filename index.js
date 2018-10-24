var shout = require('./shout');
var motivations = require('motivations');

var motivationRandomIndex = Math.floor(Math.random() * motivations.length);
var randomMotivation = motivations[motivationRandomIndex]

shout(randomMotivation);