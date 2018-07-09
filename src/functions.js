export const formatTime = min => {
    let date = new Date();
    date.setHours(8, min, 0, 0);
    const minutes = date.getMinutes();
    const hours = date.getHours();
    return `${hours}:${minutes > 9 ? minutes : `0${minutes}`}`
};

export const collector = data => {
    const collection = [];
    data.forEach((v, i) => {
        if (v !== data[i - 1]) {
            collection.push({ price: v, start: i })
        } else {
            collection[collection.length - 1].end = i
        }
    })
    return collection
}

export const getMinAndMax = items => {
    let possibilities = [];
    for (let i = items.length - 1; i >= 0; i--) {
        for (let j = i - 1; j >= 0; j--) {
            possibilities.push({
                profit: items[i] - items[j],
                low: items[j],
                lowIndex: j,
                high: items[i]
            })
        }
    }
    let [res] = possibilities.filter((item, _, arr) => {
        return (
            item.profit == Math.max(...arr.map(item => item.profit))
            &&
            item.profit >= 0
        )
    }).sort((a, b) => a.lowIndex - b.lowIndex)
    return !!res ? { min: res.low, max: res.high } : { min: 0, max: 0 }
}

export const getTargets = (items, condition) => items.filter(item => condition(item.price))

export const getPossibilities = (items, min, max) => {
    let res = [];
    const highs = items.filter(item => item.price == max);
    const lows = items.filter(item => item.price == min);
    highs.forEach(high => {
        lows.forEach(low => {
            const profit = high.price - low.price;
            const lowEnd = low.end || low.start;
            const highStart = high.start;
            const interval = highStart - lowEnd;
            if (highStart > lowEnd) {
                res.push({
                    profit,
                    lowEnd,
                    highStart,
                    interval: interval > 0 ? interval : 0
                })
            }
        })
    });
    return res
}

export const getMaximumProfit = possibilities => {
    if (possibilities.length == 0) return { lowEnd: 0, highStart: 0, profit: 0 };
    const minimum = Math.min(...possibilities.map(item => item.interval));
    const earliest = Math.min(...possibilities.map(item => item.lowEnd));
    return possibilities.filter(item => {
        return item.interval == minimum
    }).filter(item => item.lowEnd == earliest)[0]
}