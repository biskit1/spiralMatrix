const createSpiral = require('./spiral');

describe('createSpiral', () => {
    it('should create a spiral for a specified size', () => {
        let result = createSpiral(3);
        expect(result).toEqual([
            [1, 2, 3],
            [8, 9, 4],
            [7, 6, 5],
        ]);

        result = createSpiral(5);
        expect(result).toEqual([
            [1, 2, 3, 4, 5],
            [16, 17, 18, 19, 6],
            [15, 24, 25, 20, 7],
            [14, 23, 22, 21, 8],
            [13, 12, 11, 10, 9],
        ]);
    });

    it('should return empty array when N is less than 1', () => {
        const result = createSpiral(0);
        expect(result).toEqual([]);
    });

    it('should return empty array when N is a negative number', () => {
        const result = createSpiral(-1);
        expect(result).toEqual([]);
    });

    it('should return [[1]] when N is 1', () => {
        const result = createSpiral(1);
        expect(result).toEqual([[1]]);
    });

    it('should create a spiral with length of N for a large number', () => {
        const result = createSpiral(999);
        expect(result.length).toEqual(999);
    });
});
