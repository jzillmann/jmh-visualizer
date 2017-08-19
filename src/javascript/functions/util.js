export function groupBy(xs, key) {
    return xs.reduce(function(rv, x) {
        let v = key instanceof Function ? key(x) : x[key];
        let el = rv.find((r) => r && r.key === v);
        if (el) {
            el.values.push(x);
        } else {
            rv.push({
                key: v,
                values: [x]
            });
        }
        return rv;
    }, []);
}

export function cartesianProduct(arrayOfArrays) {
    return arrayOfArrays.reduce((a, b) => a.map(x => b.map(y => x.concat(y)))
        .reduce((a, b) => a.concat(b), []), [[]]);
}

export function flatten(arr, result = []) {
    for (let i = 0, length = arr.length; i < length; i++) {
        const value = arr[i]
        if (Array.isArray(value)) {
            for (let i = 0, length = value.length; i < length; i++) {
                const value2 = value[i]
                if (Array.isArray(value2)) {
                    flatten(value2, result)
                } else {
                    result.push(value2)
                }
            }
        } else {
            result.push(value)
        }
    }
    return result
}

//If there is any score above 5, we do round
export function shouldRound(benchmarkMethods, metricExtractor) {
    for ( let benchmarkMethod of benchmarkMethods ) {
        for ( let benchmark of benchmarkMethod.benchmarks ) {
            if (benchmark && metricExtractor.hasMetric(benchmark) && metricExtractor.extractScore(benchmark) > 5) {
                return true;
            }
        }
    }
    return false;
}

//Conditional round method
export function round(number, shouldRound) {
    if (!shouldRound) {
        return number;
    }
    return Math.round(number);
}

//Conditional format number method
export function formatNumber(number, roundScores) {
    if (number) {
        if (roundScores) {
            return number.toLocaleString();
        } else {
            return number;
        }
    } else {
        return "n/a";
    }
}