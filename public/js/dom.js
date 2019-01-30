let bookSearch = document.querySelector('#bookSearch');
bookSearch.addEventListener('input', (e) => {
    let list = document.getElementById('dataList');
    list.innerText = "";
    if (bookSearch.value != null) {
        fetchData('POST', bookSearch.value, (response) => {
            console.log(response,546465456);
            for (let i = 0; i < response.length; i++) {
                let x = document.createElement('option');
                x.innerHTML = response[i];
                list.appendChild(x);
            }
        });

    }
})