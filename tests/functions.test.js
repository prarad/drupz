import {
    formatTime,
    collector,
    getMinAndMax,
    getTargets,
    getPossibilities,
    getMaximumProfit
} from '../src/functions';
import data from '../src/data';

it('should format the given time correctly', () => {
    const minute = 33;
    const formatedTime = formatTime(minute);
    expect(formatedTime).toBe('8:33')
})

it('should return correct minimum and maximum', () => {
    const items = [5, 12, 8, 9, 13, 2, 20];
    const { min, max } = getMinAndMax(items);
    expect(min).toBe(2);
    expect(max).toBe(20);
})

describe('related to collection', () => {
    let expectedOutput;

    beforeEach(() => {
        expectedOutput = [
            { price: 10, start: 0, end: 59 },
            { price: 7, start: 60, end: 119 },
            { price: 5, start: 120, end: 179 },
            { price: 8, start: 180, end: 239 },
            { price: 7, start: 240, end: 299 },
            { price: 10, start: 300, end: 359 },
            { price: 11, start: 360, end: 419 },
            { price: 9, start: 420, end: 480 }
        ];
    })

    it('should return collected shares with sampleInput', () => {
        const collection = collector(data);
        expect(collection).toEqual(expectedOutput);
    })

    it('should return collected shares with 2 low prices', () => {
        expectedOutput[5].end = 358;
        expectedOutput.splice(6, 0, { price: 5, start: 359 });
        data[359] = 5
        const collection = collector(data);
        expect(collection).toEqual(expectedOutput);
    })

    it('should return targeted items', () => {
        const items = expectedOutput;
        const { min, max } = getMinAndMax(items.map(item => item.price));
        const targets = getTargets(items, item => item == min || item == max);
        expect(targets).toEqual([
            { price: 5, start: 120, end: 179 },
            { price: 11, start: 360, end: 419 }
        ])
    })

    it('should return an array of all possibilities based on the given data', () => {
        const items = expectedOutput;
        const { min, max } = getMinAndMax(items.map(item => item.price));
        const targets = getTargets(items, item => item == min || item == max);
        const possibilities = getPossibilities(targets, min, max);
        expect(possibilities).toEqual([
            { lowEnd: 179, highStart: 360, interval: 181, profit: 6 }
        ])
    })

})

it('should return the maximum profit of all possibilities', () => {
    const possibilities = [
        { lowEnd: 215, highStart: 400, interval: 185 },
        { lowEnd: 440, highStart: 400, interval: 410 }
    ];
    const maximumProfit = getMaximumProfit(possibilities);
    expect(maximumProfit).toEqual({
        lowEnd: 215, highStart: 400, interval: 185
    });
})
