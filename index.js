'use strict';//You want to include this with any nps uploads -> it enforces best practices and javascript requirements

var moment = require('moment');

/**
 * returns a string element with a footer and updating year
 * @param {string} name
 * @return {string}
 */
exports.footer = function (name) {
    return "Copyright " + moment().format('YYYY') + " " + name + " All rights reserverd";
};