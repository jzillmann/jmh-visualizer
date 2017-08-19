import { expect } from 'chai';

import BenchmarkBundle from '../../src/javascript/models/BenchmarkBundle.js'
import BenchmarkMethod from '../../src/javascript/models/BenchmarkMethod.js'


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

        //select all runs
        expect(benchmarkBundle.allBenchmarks()).to.have.lengthOf(4);
        expect(benchmarkBundle.allBenchmarks()).to.have.members([
            benchmarkBundle.benchmarkMethods[0].benchmarks[0],
            benchmarkBundle.benchmarkMethods[0].benchmarks[1],
            benchmarkBundle.benchmarkMethods[1].benchmarks[0],
            benchmarkBundle.benchmarkMethods[2].benchmarks[1],
        ]);

        //select first run
        expect(benchmarkBundle.benchmarksFromRun(0)).to.have.lengthOf(2);
        expect(benchmarkBundle.benchmarksFromRun(0)).to.have.members([
            benchmarkBundle.benchmarkMethods[0].benchmarks[0],
            benchmarkBundle.benchmarkMethods[1].benchmarks[0],
        ]);

        //select second run
        expect(benchmarkBundle.benchmarksFromRun(1)).to.have.lengthOf(2);
        expect(benchmarkBundle.benchmarksFromRun(1)).to.have.members([
            benchmarkBundle.benchmarkMethods[0].benchmarks[1],
            benchmarkBundle.benchmarkMethods[2].benchmarks[1],
        ]);


    });

});