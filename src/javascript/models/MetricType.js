// Contains help and behavoiur definitions for a metric.
// For primary metrics a metric is the benchmark mode (like thrpt, avg, etc...) 
// and for the seconday metric its the metric key (like '·gc.alloc.rate').
export default class MetricType {

    constructor(displayName, description, increaseIsGood) {
        this.displayName = displayName;
        this.description = description;
        this.increaseIsGood = increaseIsGood;
    }

}

const typeMap = new Map();

typeMap.set('thrpt', new MetricType('Throughput', 'Operations per unit of time - the higher the bars, the better!', true));
typeMap.set('avgt', new MetricType('Average Time', 'Average time per operation - the lower the bars, the better!', false));
typeMap.set('sample', new MetricType('Sampling Time', 'Samples the time for each operation - the lower the bars, the better!', false));
typeMap.set('ss', new MetricType('Single Shot Time', 'Measures the time for a single operation - the lower the bars, the better!', false));


typeMap.set('·gc.alloc.rate', new MetricType('Allocation Rate', 'The amount of memory allocated per time unit - the lower the bars, the better!', false));
typeMap.set('·gc.alloc.rate.norm', new MetricType('Allocation Rate per operation', 'The amount of memory allocated per operation - the lower the bars, the better!', false));
typeMap.set('·gc.churn.PS_Eden_Space', new MetricType('Eden Allocation Churn', 'The amount of memory the garbage collector frees from Eden space per time unit - the lower the bars, the better!', false));
typeMap.set('·gc.churn.PS_Eden_Space.norm', new MetricType('Eden Allocation Churn per operation', 'The amount of memory the garbage collector frees from Eden space per operation - the lower the bars, the better!', false));
typeMap.set('·gc.churn.PS_Survivor_Space', new MetricType('Survivor Allocation Churn', 'The amount of memory the garbage collector frees from Survivor space per time unit - the lower the bars, the better!', false));
typeMap.set('·gc.churn.PS_Survivor_Space.norm', new MetricType('Survivor Allocation Churn per operation', 'The amount of memory the garbage collector frees from Survivor space per operation - the lower the bars, the better!', false));
typeMap.set('·gc.count', new MetricType('GC Count', 'How many garbage collections occured - the lower the bars, the better!', false));
typeMap.set('·gc.time', new MetricType('GC Time', 'Time spend for garbage collection - the lower the bars, the better!', false));

export function getMetricType(metricKey) {
    const defined = typeMap.get(metricKey);
    if (!defined) {
        return new MetricType(metricKey, '...', false);
    }
    return defined;
}