const path = require('path');
const fs = require('fs');
const queryString = require('querystring');
const handleHome = (request, response) => {
    const endpoint = request.url;
    const filePath = path.join(__dirname, '..', 'public', 'html', 'index.html');
    fs.readFile(filePath, (error, file) => {
        if (error) {
            response.writeHead(500, { 'Content-Type': 'text/html' });
            response.end('<h2>Server internal error !!!!!</h2>')
        }
        else {

            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(file);
        }
    })
}
//static service handler
const staticHandler = (request, response) => {
    const endpoint = request.url;
    const contentType = {
        html: 'test/html',
        css: 'text/css',
        js: 'text/javascript',
        jpg: 'image/jpg',
        ico: 'image/x-icon',
        png: 'image/png'
    }
    const filePath = path.join(__dirname, '..', endpoint);
    const extension = endpoint.split('.')[1];
    console.log(extension);
    fs.readFile(filePath, (error, file) => {
        if (error) {
            response.writeHead(404, { 'Content-Type': 'text/html' })
            response.end('<h2>Server Error</h2>');
        }
        else {
            response.writeHead(200, { 'Content-Type': contentType[extension] });
            response.end(file);
        }
    })

}
const postHandler = (request, response) => {
    let allData = 'data=';
    request.on('data', chunkOfData => {
        allData += chunkOfData;
    });
    request.on('end', () => {
        const convertedData = queryString.parse(allData);
        filePath = path.join(__dirname, '.', 'key.js');
        fs.readFile(filePath, (error, file) => {
            if (error) {
                response.writeHead(500, { 'Content-Type': 'text/html' })
                response.end('<h2>Server Error</h2>');
            }
            else {
                const jsonFile = JSON.parse(file);
                let regex = new RegExp(convertedData.data, 'i');
                const result = jsonFile.filter(item => regex.test(item));
                console.log(result);
                response.writeHead(200,{'Content-Type':'application/json'});
                response.end(JSON.stringify(result));

            }
        })

    //    response.end('');
    });
}

//create post form handler
const createPostHandler = (request, response) => {
    let allData = '';
    request.on('data', chunkOfData => {
        allData += chunkOfData;
    });
    request.on('end', () => {
        response.writeHead(302, { 'Location': '/' });
        const convertedData = queryString.parse(allData);
        filePath = path.join(__dirname, '.', 'data.json');
        fs.readFile(filePath, (error, file) => {
            if (error) {
                response.writeHead(404, { 'Content-Type': 'text/html' })
                response.end('<h2>Server Error</h2>');
            }
            else {

                const jsonFile = JSON.parse(file);
              
                let regex = new RegExp(convertedData['book-search'], 'i');
                const result=jsonFile.filter(item => regex.test(item));
                console.log(result);
                response.writeHead(200, { 'Content-type': 'text/html', 'Location': '/' });
                response.end(JSON.stringify(result));

            }
        })

        // response.end('');
    });
}
module.exports = {
    handleHome,
    staticHandler,
    postHandler,
    createPostHandler

}