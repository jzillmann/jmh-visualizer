export const providedBenchmarks = [
    {
        "benchmark": "datameer.parquetreader.benchmarks.read.ColumnarColumnProjectionBenchmark.read01Column",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 1245.6299166666668,
            "scoreError": 711.3698864708377,
            "scoreConfidence": [
                534.260030195829,
                1956.9998031375044
            ],
            "scorePercentiles": {
                "0.0": 965.4035,
                "50.0": 1206.926,
                "90.0": 1718.148,
                "95.0": 1718.148,
                "99.0": 1718.148,
                "99.9": 1718.148,
                "99.99": 1718.148,
                "99.999": 1718.148,
                "99.9999": 1718.148,
                "100.0": 1718.148
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    965.4035,
                    1255.807,
                    1718.148
                ],
                [
                    1231.737,
                    1182.115,
                    1120.569
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.parquetreader.benchmarks.read.ColumnarColumnProjectionBenchmark.read02Column",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 1651.0868333333335,
            "scoreError": 2512.745956668521,
            "scoreConfidence": [
                -861.6591233351876,
                4163.832790001855
            ],
            "scorePercentiles": {
                "0.0": 804.812,
                "50.0": 1227.3845000000001,
                "90.0": 3058.305,
                "95.0": 3058.305,
                "99.0": 3058.305,
                "99.9": 3058.305,
                "99.99": 3058.305,
                "99.999": 3058.305,
                "99.9999": 3058.305,
                "100.0": 3058.305
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    1137.313,
                    2465.866,
                    3058.305
                ],
                [
                    1317.456,
                    1122.769,
                    804.812
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.parquetreader.benchmarks.read.ColumnarColumnProjectionBenchmark.read04Column",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 1107.0788333333333,
            "scoreError": 331.4792141561166,
            "scoreConfidence": [
                775.5996191772167,
                1438.5580474894498
            ],
            "scorePercentiles": {
                "0.0": 1020.037,
                "50.0": 1041.0945000000002,
                "90.0": 1294.917,
                "95.0": 1294.917,
                "99.0": 1294.917,
                "99.9": 1294.917,
                "99.99": 1294.917,
                "99.999": 1294.917,
                "99.9999": 1294.917,
                "100.0": 1294.917
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    1043.842,
                    1294.917,
                    1038.347
                ],
                [
                    1020.037,
                    1217.0,
                    1028.33
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.parquetreader.benchmarks.read.ColumnarColumnProjectionBenchmark.read06Column",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 1716.7044999999998,
            "scoreError": 310.70873531722617,
            "scoreConfidence": [
                1405.9957646827736,
                2027.413235317226
            ],
            "scorePercentiles": {
                "0.0": 1540.491,
                "50.0": 1717.781,
                "90.0": 1852.348,
                "95.0": 1852.348,
                "99.0": 1852.348,
                "99.9": 1852.348,
                "99.99": 1852.348,
                "99.999": 1852.348,
                "99.9999": 1852.348,
                "100.0": 1852.348
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    1852.348,
                    1540.491,
                    1708.557
                ],
                [
                    1810.157,
                    1661.669,
                    1727.005
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.parquetreader.benchmarks.read.ColumnarColumnProjectionBenchmark.read08Column",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 2178.1901666666668,
            "scoreError": 674.8219532752238,
            "scoreConfidence": [
                1503.368213391443,
                2853.0121199418904
            ],
            "scorePercentiles": {
                "0.0": 1895.958,
                "50.0": 2168.3720000000003,
                "90.0": 2572.824,
                "95.0": 2572.824,
                "99.0": 2572.824,
                "99.9": 2572.824,
                "99.99": 2572.824,
                "99.999": 2572.824,
                "99.9999": 2572.824,
                "100.0": 2572.824
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    2286.175,
                    2572.824,
                    1977.44
                ],
                [
                    2136.652,
                    2200.092,
                    1895.958
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.parquetreader.benchmarks.read.ColumnarColumnProjectionBenchmark.read10Column",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 3255.248666666667,
            "scoreError": 882.8210967976216,
            "scoreConfidence": [
                2372.4275698690453,
                4138.069763464288
            ],
            "scorePercentiles": {
                "0.0": 2779.45,
                "50.0": 3353.4750000000004,
                "90.0": 3561.409,
                "95.0": 3561.409,
                "99.0": 3561.409,
                "99.9": 3561.409,
                "99.99": 3561.409,
                "99.999": 3561.409,
                "99.9999": 3561.409,
                "100.0": 3561.409
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    3561.409,
                    2978.622,
                    3505.061
                ],
                [
                    2779.45,
                    3260.679,
                    3446.271
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.parquetreader.benchmarks.read.RowReaderColumnProjectionBenchmark.read01Column",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 1143.0238333333334,
            "scoreError": 279.6855783042274,
            "scoreConfidence": [
                863.338255029106,
                1422.7094116375608
            ],
            "scorePercentiles": {
                "0.0": 1020.343,
                "50.0": 1132.577,
                "90.0": 1323.638,
                "95.0": 1323.638,
                "99.0": 1323.638,
                "99.9": 1323.638,
                "99.99": 1323.638,
                "99.999": 1323.638,
                "99.9999": 1323.638,
                "100.0": 1323.638
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    1102.602,
                    1122.497,
                    1146.406
                ],
                [
                    1020.343,
                    1142.657,
                    1323.638
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.parquetreader.benchmarks.read.RowReaderColumnProjectionBenchmark.read02Column",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 1957.239833333333,
            "scoreError": 1473.038855782015,
            "scoreConfidence": [
                484.20097755131815,
                3430.2786891153482
            ],
            "scorePercentiles": {
                "0.0": 1306.381,
                "50.0": 1978.5445,
                "90.0": 2533.537,
                "95.0": 2533.537,
                "99.0": 2533.537,
                "99.9": 2533.537,
                "99.99": 2533.537,
                "99.999": 2533.537,
                "99.9999": 2533.537,
                "100.0": 2533.537
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    2533.537,
                    2427.362,
                    2302.619
                ],
                [
                    1654.47,
                    1519.07,
                    1306.381
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.parquetreader.benchmarks.read.RowReaderColumnProjectionBenchmark.read04Column",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 2017.8008333333335,
            "scoreError": 199.08635112496924,
            "scoreConfidence": [
                1818.7144822083642,
                2216.8871844583027
            ],
            "scorePercentiles": {
                "0.0": 1937.013,
                "50.0": 2016.1950000000002,
                "90.0": 2125.918,
                "95.0": 2125.918,
                "99.0": 2125.918,
                "99.9": 2125.918,
                "99.99": 2125.918,
                "99.999": 2125.918,
                "99.9999": 2125.918,
                "100.0": 2125.918
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    2125.918,
                    2047.409,
                    2054.433
                ],
                [
                    1957.051,
                    1937.013,
                    1984.981
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.parquetreader.benchmarks.read.RowReaderColumnProjectionBenchmark.read06Column",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 2667.1918333333338,
            "scoreError": 177.0324781138713,
            "scoreConfidence": [
                2490.1593552194627,
                2844.224311447205
            ],
            "scorePercentiles": {
                "0.0": 2587.912,
                "50.0": 2657.2675,
                "90.0": 2747.353,
                "95.0": 2747.353,
                "99.0": 2747.353,
                "99.9": 2747.353,
                "99.99": 2747.353,
                "99.999": 2747.353,
                "99.9999": 2747.353,
                "100.0": 2747.353
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    2618.764,
                    2665.406,
                    2734.587
                ],
                [
                    2747.353,
                    2587.912,
                    2649.129
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.parquetreader.benchmarks.read.RowReaderColumnProjectionBenchmark.read08Column",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 3451.5325,
            "scoreError": 676.8589286124379,
            "scoreConfidence": [
                2774.673571387562,
                4128.391428612438
            ],
            "scorePercentiles": {
                "0.0": 3294.761,
                "50.0": 3345.2794999999996,
                "90.0": 3923.735,
                "95.0": 3923.735,
                "99.0": 3923.735,
                "99.9": 3923.735,
                "99.99": 3923.735,
                "99.999": 3923.735,
                "99.9999": 3923.735,
                "100.0": 3923.735
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    3923.735,
                    3363.79,
                    3312.909
                ],
                [
                    3487.231,
                    3294.761,
                    3326.769
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.parquetreader.benchmarks.read.RowReaderColumnProjectionBenchmark.read10Column",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 4023.1828333333337,
            "scoreError": 363.2175942527422,
            "scoreConfidence": [
                3659.9652390805913,
                4386.400427586076
            ],
            "scorePercentiles": {
                "0.0": 3844.661,
                "50.0": 4030.538,
                "90.0": 4193.0,
                "95.0": 4193.0,
                "99.0": 4193.0,
                "99.9": 4193.0,
                "99.99": 4193.0,
                "99.999": 4193.0,
                "99.9999": 4193.0,
                "100.0": 4193.0
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    4193.0,
                    3975.992,
                    3844.661
                ],
                [
                    4085.084,
                    3927.71,
                    4112.65
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
]


