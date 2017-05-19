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