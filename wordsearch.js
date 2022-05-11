const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    // transposition
    let transposedLetters = [];
    let numRows = letters.length;
    let numColumns = letters[0].length;
  
    for (let i = 0; i < numColumns; i++) {
        transposedLetters.push([]);
    }
    // for each row
    for (let i = 0; i < numRows; i++) {
        // for each column
        for (let j = 0; j < numColumns; j++) {
            transposedLetters[j].push(letters[i][j]);
         }
    }
    const verticalJoin = transposedLetters.map(ls => ls.join(''))
    for (l of verticalJoin) {
        if (l.includes(word)) return true
    }
    return false;

}

module.exports = wordSearch
