export function groupBy(xs, key) {
    return xs.reduce(function (rv, x) {
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
    for (let benchmarkMethod of benchmarkMethods) {
        for (let benchmark of benchmarkMethod.benchmarks) {
            if (benchmark && metricExtractor.hasMetric(benchmark) && metricExtractor.extractScore(benchmark) > 5) {
                return true;
            }
        }
    }
    return false;
}

//Conditional round method
export function round(number, shouldRound) {
    if (!shouldRound || number < 1) {
        return number;
    }
    return Math.round(number);
}

//Conditional format number method
export function formatNumber(number, roundScores) {
    if (number || number == 0) {
        if (roundScores && number > 1) {
            return number.toLocaleString();
        } else {
            return number;
        }
    } else {
        return "n/a";
    }
}


// Takes an array of strings and returns and array of strings. Common prefixes and suffixes will be removed.
export function getUniqueNames(strings) {
    if (strings.length == 1) {
        return strings.map(string => extractAfterLastSlash(string));
    }

    var minLength = Math.min(...strings.map(string => string.length));
    const startIndex = getNotMatchingStartIndex(strings, minLength);
    const endIndex = getNotMatchingEndIndex(strings, minLength);
    if (startIndex > 0 && startIndex < minLength) {
        strings = strings.map(string => string.substring(startIndex));
    }
    if (endIndex > 0 && endIndex < minLength) {
        strings = strings.map(string => string.substring(0, string.length - endIndex));
    }
    if (minLength - startIndex - endIndex > 20) {
        strings = strings.map(string => extractAfterLastSlash(string));
    }
    return strings;
}

function extractAfterLastSlash(string) {
    const lastSlash = string.lastIndexOf('/');
    if (lastSlash > 0) {
        return string.substring(lastSlash + 1);
    } else {
        return string;
    }
}

function getNotMatchingStartIndex(strings, minLength) {
    for (var i = 0; i < minLength; i++) {
        for (var j = 0; j < strings.length - 1; j++) {
            if (strings[j].charAt(i) != strings[j + 1].charAt(i)) {
                return i;
            }
        }
    }
    return minLength;
}

function getNotMatchingEndIndex(strings, minLength) {
    return getNotMatchingStartIndex(strings.map(string => string.split('').reverse().join('')), minLength);
}