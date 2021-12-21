const path = require('path');

module.exports = {
  process(src, filename, config, options) {
    return 'module.exports = ' + JSON.stringify(path.basename(filename)) + ';';
  },
};


/**
 * In order to, solve the error (from jest) that "Syntax Error: Invalid or unexpected token" with .png I have add that configuration 
 * 
 * Then added this to jest configuration in jest.config.json:
    "jest": { "moduleNameMapper": { "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/assetsTransformer.js", "\\.(css|less)$": "<rootDir>/assetsTransformer.js" } },
 * 
 */