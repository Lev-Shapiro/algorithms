const isEven = (n: number) => n % 2 === 0;

export const isPoligram = (str: string): 0 | 1 => {
    const startLen = str.length;

    const saved: {[key: string]: "done"} = {}

    const removeLastLetter = () => str = str.substring(1)

    while(str.length) {
        if(saved[str[0]] === "done") {
            delete saved[str[0]]

            removeLastLetter();

            continue;
        }

        saved[str[0]] = "done";

        removeLastLetter();
    }

    const objKeysLen = Object.keys(saved).length;

    if(isEven(startLen)) {
        console.log(saved)
        if(objKeysLen === 0) return 1;
    } else {
        if(objKeysLen === 1) return 1;
    }

    return 0;
};