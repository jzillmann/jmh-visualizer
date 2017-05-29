import { expect } from 'chai';

import BenchmarkCollection from '../../src/javascript/models/BenchmarkCollection.js'
import BenchmarkResults from '../../src/javascript/models/BenchmarkResults.js'
import RunSelection from '../../src/javascript/models/RunSelection.js'


describe('functions: parseBenchmarkCollections', () => {

    it('default', () => {
        const benchmarkCollection = new BenchmarkCollection({
            key: 'com.A',
            name: 'A',
            benchmarkResults: [
                new BenchmarkResults({
                    name: 'bench',
                    benchmarks: [
                        {
                            "benchmark": "com.A.bench",
                            "primaryMetric": {
                                "score": 1
                            }
                        }, {
                            "benchmark": "com.A.bench",
                            "primaryMetric": {
                                "score": 2
                            }
                        }
                    ]
                }),
                new BenchmarkResults({
                    name: 'bench2',
                    benchmarks: [
                        {
                            "benchmark": "com.A.bench2",
                            "primaryMetric": {
                                "score": 2.1
                            }
                        },
                        null
                    ]
                }),
                new BenchmarkResults({
                    name: 'bench3',
                    benchmarks: [
                        null,
                        {
                            "benchmark": "com.A.bench3",
                            "primaryMetric": {
                                "score": 3.2
                            }
                        }
                    ]
                })
            ]
        });

        const selectAll = new RunSelection(['run1', 'run2'], [0, 1]);
        const selectFirst = new RunSelection(['run1'], [0]);
        const selectSecond = new RunSelection(['run2'], [1]);

        //select all runs
        expect(benchmarkCollection.benchmarks(selectAll)).to.have.lengthOf(4);
        expect(benchmarkCollection.benchmarks(selectAll)).to.have.members([
            benchmarkCollection.benchmarkResults[0].benchmarks[0],
            benchmarkCollection.benchmarkResults[0].benchmarks[1],
            benchmarkCollection.benchmarkResults[1].benchmarks[0],
            benchmarkCollection.benchmarkResults[2].benchmarks[1],
        ]);

        //select first run
        expect(benchmarkCollection.benchmarks(selectFirst)).to.have.lengthOf(2);
        expect(benchmarkCollection.benchmarks(selectFirst)).to.have.members([
            benchmarkCollection.benchmarkResults[0].benchmarks[0],
            benchmarkCollection.benchmarkResults[1].benchmarks[0],
        ]);

        //select second run
        expect(benchmarkCollection.benchmarks(selectSecond)).to.have.lengthOf(2);
        expect(benchmarkCollection.benchmarks(selectSecond)).to.have.members([
            benchmarkCollection.benchmarkResults[0].benchmarks[1],
            benchmarkCollection.benchmarkResults[2].benchmarks[1],
        ]);


    });

});