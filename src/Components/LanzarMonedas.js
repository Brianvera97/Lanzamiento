function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeads() {
    return new Promise((resolve, reject) => {
        let headsCount = 0;
        let attempts = 0;

        while (headsCount < 5 && attempts < 100) {
            attempts++;
            let result = tossCoin();
            if (result === "heads") {
                headsCount++;
            } else {
                headsCount = 0;
            }
        }

        if (headsCount === 5) {
            resolve(`It took ${attempts} tries to flip five "heads"`);
        } else {
            reject("Failed to flip five heads in a row");
        }
    });
}

fiveHeads()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

console.log("Que onda?");
