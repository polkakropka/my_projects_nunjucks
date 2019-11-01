'use strict';

var path = require('path');

module.exports = {
    order: 2,
    context: {
        colors: require(path.join(process.cwd(), 'source/styles/00-tokens/colors/_color.json')),
        fonts: require(path.join(process.cwd(), 'source/styles/02-generic/_font.json')),
        breakpoints: require(path.join(process.cwd(), 'source/styles/02-generic/_breakpoints.json')),
        timing: require(path.join(process.cwd(), 'source/styles/02-generic/_timing.json'))
    }
};