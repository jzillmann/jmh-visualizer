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
