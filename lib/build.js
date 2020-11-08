"use strict";

require("rollup").rollup({
  entry: "./src/main.js",
  plugins: [require("rollup-plugin-babel")({
    "presets": [["es2015", { "modules": false }]],
    "plugins": ["external-helpers"]
  })]
}).then(function (bundle) {
  var result = bundle.generate({
    // output format - 'amd', 'cjs', 'es6', 'iife', 'umd'
    format: 'iife'
  });

  require("fs").writeFileSync("./dist/bundle.js", result.code);
  // sourceMaps are supported too!
}).then(null, function (err) {
  return console.error(err);
});