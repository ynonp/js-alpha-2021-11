function sleep(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            const val = Math.random();
            if (val < 0.8) {
                resolve(val);
            } else {
                reject('DEAD');
            }
        }, ms);
    });
}

async function start() {
    try {
        const result = await sleep(500);
        // then block...
        console.log(`Good morning: ${result}`)        
    } catch (err) {
        // catch block
        console.log(`You die`);
    }
    /*
    x.then(function() {
        console.log(`Good morning`);
    }).catch(function() {
        console.log('Sorry you die');
    })
    */
}


start();
console.log('???');





