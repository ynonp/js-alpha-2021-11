const fs = require('fs/promises');

async function main() {
    try {
        const fh = await fs.open('numbers.txt', 'w');
        for (let i=1; i <= 100; i++) {
            console.log(`Writing ${i}`);
            fh.write(`${i}\n`);
        }
        fh.close();    
    } catch (err) {
        console.log('Erorr...', err);
    }
}

console.log('Start!');
main();
console.log('End');