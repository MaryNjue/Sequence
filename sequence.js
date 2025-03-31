function Sequence(num) {
    if (num.length === 0) return [];
    
    num.sort((a, b) => a - b);
    
    let longSequence = [num[0]];
    let currentSequence = [num[0]];
    
    for (let i = 1; i < num.length; i++) {
        if (num[i] === num[i - 1] + 1) {
            currentSequence.push(num[i]);
        } else if (num[i] === num[i - 1]) {
            continue;
        } else {
            if (currentSequence.length > longSequence.length) {
                longSequence = [...currentSequence];
            }
            currentSequence = [num[i]];
        }
    }
    
    if (currentSequence.length > longSequence.length) {
        longSequence = [...currentSequence];
    }
    
    return longSequence;
}

const input = [5, 4, 300, 1, 500, 2];
console.log(Sequence(input));