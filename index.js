var vatican = require("vatican");

var app = new vatican({
    port: 8003,
    handlers: "./lib"
    //paths: "./paths.js"
});

app.start();
