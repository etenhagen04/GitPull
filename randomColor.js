const randomColor = require('randomcolor');
const fs = require('fs')

const newColor = randomColor({
    hue: 'blue',
    format: 'rgb',
});

fs.appendFileSync('colorFile.txt', newColor);