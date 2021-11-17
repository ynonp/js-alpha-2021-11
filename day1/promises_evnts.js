function start() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://swapi.dev/api/people/3');    
    xhr.send();
}

xhr.addEventListener('load', function(ev) {
    const xhr = ev.target;
    console.log(xhr.responseText);
    console.log(stuff);
});

start();
