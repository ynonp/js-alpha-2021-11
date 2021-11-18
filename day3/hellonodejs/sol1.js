
let maxValue = 0;

for (let i=0; i < 10; i++) {    
    const currentValue = Math.floor(Math.random() * 100);
    if (currentValue > maxValue) {
        maxValue = currentValue;
    }
}

console.log(maxValue);