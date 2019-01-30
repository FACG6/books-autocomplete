const {
    handleHome,
    staticHandler,
    postHandler,
    createPostHandler
} = require('./handler.js');
const handle = require('./handler');

const router = (request, response) => {
    const endpoint = request.url;
    if (endpoint === '/') {
        handleHome(request, response);
    } else if (endpoint.includes('public')) {
        staticHandler(request, response);
    } else if (endpoint === '/post') {
        console.log(1111111);

        postHandler(request, response);
    } else if (endpoint === '/create-post') {
        createPostHandler(request, response);
    }
    else {
        response.writeHead(404, { 'Content-Type': 'text/html' });
        response.end('<h2>Page not found!!!</h2>');
    }
}

module.exports = router;