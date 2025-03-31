# Longest Consecutive Sequence Finder

Finds the longest sequence of consecutive numbers in an array.

## How to Use

1. **Installation**:
   No dependencies needed - just Node.js

2. **Usage**:
   ```javascript
   const input = [5, 4, 300, 1, 500, 2];
   console.log(Sequence(input));
   ```

3. **Function Details**:
   - Input: Array of numbers (e.g., `[100, 4, 200, 1, 3, 2]`)
   - Output: Array representing the longest consecutive sequence



## How It Works
1. Sorts the input array
2. Iterates through numbers to find consecutive sequences
3. Tracks and returns the longest sequence found

## Testing
Run with Node.js:
```bash
node Sequence.js
```