export const formatTime = min => {
    let date = new Date();
    date.setHours(8, min, 0, 0);
    return `${date.getHours()}:${!!date.getMinutes() ? date.getMinutes() : '00'}`
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
    const min = Math.min(...items);
    const max = Math.max(...items);
    return { min, max }
}

export const getTargets = (items, condition) => items.filter(item => condition(item.price))

export const getPossibilities = (items, min, max, length) => {
    let res = [];
    const highs = items.filter(item => item.price == max);
    const lows = items.filter(item => item.price == min);
    highs.forEach(high => {
        lows.forEach(low => {
            const lowEnd = low.end || low.start;
            const highStart = high.start;
            const interval = highStart - lowEnd;
            res.push({
                lowEnd,
                highStart,
                interval: interval > 0 ? interval : length - 1 - lowEnd + highStart
            })
        })
    });
    return res
}

export const getMaximumProfit = possibilities => {
    const minimum = Math.min(...possibilities.map(item => item.interval));
    const earliest = Math.min(...possibilities.map(item => item.lowEnd));
    return possibilities.filter(item => {
        return item.interval == minimum
    }).filter(item => item.lowEnd == earliest)[0]
}