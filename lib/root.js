
module.exports = Ctrl;

function Ctrl(){
    
};


@endpoint (url: / method: get)
Ctrl.prototype.rootAction = function(req, res) {
    res.setHeader(['Content-type', 'application/json']);
    res.send({ message: 'This is the root endpoint', endpoints: { '/books': 'books listing', '/books/:id': 'Specific book data' } });
}
