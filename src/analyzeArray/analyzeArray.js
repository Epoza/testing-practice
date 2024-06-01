function analyzeArray(data) {
    const average = () => {
        const sum = data.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        console.log(sum / data.length);
        return sum / data.length
    }

    const min = () => {
        return Math.min(...data);
    }

    const max = () => {
        return Math.max(...data);
    }

    const length = () => {
        return data.length
    }
    return {average: average(), min: min(), max: max(), length: length()}
}
module.exports = analyzeArray;

