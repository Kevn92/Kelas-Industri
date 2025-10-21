const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log('Request baru Client');
    console.log('host:', req.headers.host);
    console.log('path:', req.url);
    console.log('method:', req.method);

    let path = './View/';
    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/contact':
            path += 'contact.html';
            res.statusCode = 200;
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.statusCode = 500;
            res.end('Server Error');
        } else {
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            res.end(); // jangan lupa end response
        }
    });
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
