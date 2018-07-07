import data from './data';
import {
    formatTime,
    collector,
    getMinAndMax,
    getTargets,
    getPossibilities,
    getMaximumProfit
} from './functions';


const roboAdvisor = data => {
    const collection = collector(data)
    const { min, max } = getMinAndMax(collection.map(item => item.price));
    let maximumProfit;
    if (min == max) {
        maximumProfit = { lowEnd: 0, highStart: 0 }
    } else {
        const targets = getTargets(collection, item => item == min || item == max)
        const possibilities = getPossibilities(targets, min, max, data.length);
        maximumProfit = getMaximumProfit(possibilities);
    }
    return `${max - min}, ${formatTime(maximumProfit.lowEnd)}, ${formatTime(maximumProfit.highStart)}`
}

console.log(roboAdvisor(data))
