let bookSearch = document.querySelector('#bookSearch');
bookSearch.addEventListener('input', (e) => {
    let list = document.getElementById('dataList');
    list.innerText = "";
    if (bookSearch.value != null) {
        fetchData('POST', bookSearch.value,'/post', (response) => {
            for (let i = 0; i < response.length; i++) {
                let x = document.createElement('option');
                x.innerHTML = response[i];
                list.appendChild(x);
            }
        });

    }
})

let show = document.querySelector('#show');
show.addEventListener('click', (e) => {
    e.preventDefault();
    let unorderedList = document.getElementById("unorderedList");
    const recievedData = document.getElementById('recievedData');
    const array=[];
    unorderedList.innerHTML = "";
    if(bookSearch.value.trim() == ''){
        alert('Enter some value');
    }
    else if (bookSearch.value != null) {
        const searchFor=JSON.stringify(bookSearch.value);
        fetchData('POST',bookSearch.value,'/search', (response) => {
            if(response == ''){
                alert("no such value");
            }
            else{
                const parameter = document.createElement('div');
            parameter.textContent=JSON.stringify(response[0]);
            for(let i in response[0] ){
            let li = document.createElement('li');
            li.innerHTML = i + ' : ' + response[0][i];
            unorderedList.appendChild(li);
            }
            }
            
        })
    };
}
)