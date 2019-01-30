
const fetchData = (method, search,url ,cb) => {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                if(url=='/search'){
                }
                
                
                const response=JSON.parse(xhr.responseText);
                cb(response);
            }
        }
    }
    xhr.open(method, url);
    xhr.send(search);
}



// const sendData = (method, search, cb) => {
//     const xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = () => {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 const response=JSON.parse(xhr.responseText);
//                 cb(response);
//             }
//         }
//     }
//     xhr.open(method, '/submit');
//     xhr.send(search);
// }