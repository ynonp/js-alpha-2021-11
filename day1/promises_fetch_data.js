async function fetchData() {
    try {
        let showSpinner = true;
        const res = await fetch('https://swapi.dev/api/people/1');
        const data = await res.json();
        
        showSpinner = false;
        console.log(data);        
    } catch (err) {
        console.log('error...');
    }
}

fetchData();
