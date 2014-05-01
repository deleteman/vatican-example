
module.exports = Ctrl;

function Ctrl(){
    
};

@endpoint (url: /books/ method: get)
Ctrl.prototype.list = function(req, res) {
    res.send("Book listing would go here");
}

@endpoint (url: /books/:id method: get)
Ctrl.prototype.data = function(req, res) {
    res.setHeader("Content-type", "text/html");
    res.send("<h1>Book info goes here, for book id: " + req.params.url.id + "</h1>");
}

@endpoint (url: /books/ method: post)
Ctrl.prototype.forbidden = function(req, res) {
    res.statusCode = 401;
    res.send("New book not implemented!");
}
