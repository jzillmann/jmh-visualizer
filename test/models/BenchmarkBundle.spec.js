import { expect } from 'chai';

import BenchmarkBundle from '../../src/javascript/models/BenchmarkBundle.js'
import BenchmarkMethod from '../../src/javascript/models/BenchmarkMethod.js'
import RunSelection from '../../src/javascript/models/RunSelection.js'


describe('functions: parseBenchmarkCollections', () => {

    it('default', () => {
        const benchmarkBundle = new BenchmarkBundle({
            key: 'com.A',
            name: 'A',
            benchmarkMethods: [
                new BenchmarkMethod({
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
                new BenchmarkMethod({
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
                new BenchmarkMethod({
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
        expect(benchmarkBundle.benchmarks(selectAll)).to.have.lengthOf(4);
        expect(benchmarkBundle.benchmarks(selectAll)).to.have.members([
            benchmarkBundle.benchmarkMethods[0].benchmarks[0],
            benchmarkBundle.benchmarkMethods[0].benchmarks[1],
            benchmarkBundle.benchmarkMethods[1].benchmarks[0],
            benchmarkBundle.benchmarkMethods[2].benchmarks[1],
        ]);

        //select first run
        expect(benchmarkBundle.benchmarks(selectFirst)).to.have.lengthOf(2);
        expect(benchmarkBundle.benchmarks(selectFirst)).to.have.members([
            benchmarkBundle.benchmarkMethods[0].benchmarks[0],
            benchmarkBundle.benchmarkMethods[1].benchmarks[0],
        ]);

        //select second run
        expect(benchmarkBundle.benchmarks(selectSecond)).to.have.lengthOf(2);
        expect(benchmarkBundle.benchmarks(selectSecond)).to.have.members([
            benchmarkBundle.benchmarkMethods[0].benchmarks[1],
            benchmarkBundle.benchmarkMethods[2].benchmarks[1],
        ]);


    });

});