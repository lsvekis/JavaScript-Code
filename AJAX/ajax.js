const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
//const url = "https://randomuser.me/api/?results=10";
const url = "random.json";
const output = document.querySelector('.output');

btn1.addEventListener('click',reqXHR);
btn2.addEventListener('click',reqFetch);

function reqXHR(e){
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            const data = JSON.parse(xhr.responseText);
            addNew(data.results);
        }
    }
    xhr.open('GET',url);
    xhr.send();
}
function reqFetch(e){
    fetch(url)
    .then((res)=> res.json())
    .then((data) =>{
        addNew(data.results);
    })
}
function addNew(data){
    data.forEach(element => {
        const ps = element.name;
        output.innerHTML += `${ps.title} ${ps.first} ${ps.last} <br>`;
    });
}


