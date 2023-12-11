function createSpiral(N) {
    if (N < 1) return [];

    const spiral = [];
    for (let i = 0; i < N; i++) {
        spiral.push([]);
    }

    const squared = N ** 2;
    let direction = 'right';
    let row = 0;
    let col = 0;
    let current = 1;

    // these variables are so we know where to turn so we don't overlap with positions that have already been sets
    let topRow = 0;
    let rightCol = N - 1;
    let bottomRow = N - 1;
    let leftCol = 0;

    do {
        spiral[row][col] = current++;
        switch (direction) {
            case 'right':
                col === rightCol ? (row++, direction = 'down', topRow++) : col++;
                break;
            case 'down':
                row === bottomRow ? (col--, direction = 'left', rightCol--) : row++;
                break;
            case 'left':
                col === leftCol ? (row--, direction = 'up', bottomRow--) : col--;
                break;
            case 'up':
                row === topRow ? (col++, direction = 'right', leftCol++) : row--;
                break;
        }
    } while (current <= squared);

    return spiral;
}

module.exports = createSpiral;

