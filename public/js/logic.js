
const fetchData = (method, search, cb) => {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const response=JSON.parse(xhr.responseText);
                cb(response);
            }
        }
    }
    xhr.open(method, '/post');
    xhr.send(search);
}