var format = require("format-text");
var ansi = require("ansi-codes");

module.exports = styleFormat;

function styleFormat (text) {
  return format(text, ansi);
}
