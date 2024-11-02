const fs = require('fs');

fs.readFile('input.json', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading JSON file:", err);
        return;
    }
    
    try {
        const testCases = JSON.parse(data);
        
        for (const caseKey in testCases) {
            const testCase = testCases[caseKey];
            if (caseKey !== "keys") {
                console.log(`\nProcessing Test Case: ${caseKey}`);
                findSecret(testCase);
            }
        }
    } catch (e) {
        console.error("Error parsing JSON:", e);
    }
});

function findSecret(data) {
    const n = parseInt(data.keys.n);
    const k = parseInt(data.keys.k);
    console.log(`Number of roots provided (n): ${n}`);
    console.log(`Minimum roots required (k): ${k}`);
    
    for (let i = 1; i <= n; i++) {
        const keyData = data[i.toString()];
        if (!keyData) {
            console.log(`Missing data entry for key ${i}.`);
            continue;
        }
        
        const base = parseInt(keyData.base);
        const value = keyData.value;
        console.log(`Processing data for key ${i}: Base=${base}, Value=${value}`);
        
        const decimalValue = BigInt(parseInt(value, base));
        console.log(`Value in decimal for key ${i}: ${decimalValue}`);
    }
}
