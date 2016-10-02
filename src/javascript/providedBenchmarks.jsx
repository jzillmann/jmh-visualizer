export const providedBenchmarks = [
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.AvgAggregationBenchmark.measureOnCategoricalValues",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 1850.3681666666669,
            "scoreError": 73.40592808924782,
            "scoreConfidence": [
                1776.9622385774192,
                1923.7740947559146
            ],
            "scorePercentiles": {
                "0.0": 1823.756,
                "50.0": 1843.3980000000001,
                "90.0": 1887.329,
                "95.0": 1887.329,
                "99.0": 1887.329,
                "99.9": 1887.329,
                "99.99": 1887.329,
                "99.999": 1887.329,
                "99.9999": 1887.329,
                "100.0": 1887.329
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    1842.759,
                    1877.139,
                    1887.329
                ],
                [
                    1823.756,
                    1827.189,
                    1844.037
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.AvgAggregationBenchmark.measureOnCategoricalValuesFromCache",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 800.7042499999999,
            "scoreError": 68.44237181508304,
            "scoreConfidence": [
                732.2618781849169,
                869.1466218150829
            ],
            "scorePercentiles": {
                "0.0": 778.862,
                "50.0": 794.45175,
                "90.0": 848.017,
                "95.0": 848.017,
                "99.0": 848.017,
                "99.9": 848.017,
                "99.99": 848.017,
                "99.999": 848.017,
                "99.9999": 848.017,
                "100.0": 848.017
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    778.862,
                    787.1265,
                    801.3165
                ],
                [
                    794.627,
                    794.2765,
                    848.017
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.AvgAggregationBenchmark.measureOnCategoricalValuesFromCacheWithPreMaterialisation",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 777.6681666666667,
            "scoreError": 141.22070379947795,
            "scoreConfidence": [
                636.4474628671887,
                918.8888704661447
            ],
            "scorePercentiles": {
                "0.0": 736.522,
                "50.0": 753.2547500000001,
                "90.0": 846.1045,
                "95.0": 846.1045,
                "99.0": 846.1045,
                "99.9": 846.1045,
                "99.99": 846.1045,
                "99.999": 846.1045,
                "99.9999": 846.1045,
                "100.0": 846.1045
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    836.598,
                    740.275,
                    764.242
                ],
                [
                    846.1045,
                    742.2675,
                    736.522
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.AvgAggregationBenchmark.measureOnConsecutiveValues",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 2024.0469999999998,
            "scoreError": 157.87362422840087,
            "scoreConfidence": [
                1866.173375771599,
                2181.920624228401
            ],
            "scorePercentiles": {
                "0.0": 1968.89,
                "50.0": 2021.0825,
                "90.0": 2115.633,
                "95.0": 2115.633,
                "99.0": 2115.633,
                "99.9": 2115.633,
                "99.99": 2115.633,
                "99.999": 2115.633,
                "99.9999": 2115.633,
                "100.0": 2115.633
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    2115.633,
                    1969.087,
                    2001.318
                ],
                [
                    2040.847,
                    1968.89,
                    2048.507
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.AvgAggregationBenchmark.measureOnConsecutiveValuesFromCache",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 835.7802500000001,
            "scoreError": 42.48443102028399,
            "scoreConfidence": [
                793.2958189797162,
                878.2646810202841
            ],
            "scorePercentiles": {
                "0.0": 822.0875,
                "50.0": 831.62175,
                "90.0": 865.027,
                "95.0": 865.027,
                "99.0": 865.027,
                "99.9": 865.027,
                "99.99": 865.027,
                "99.999": 865.027,
                "99.9999": 865.027,
                "100.0": 865.027
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    822.0875,
                    827.6205,
                    832.8015
                ],
                [
                    830.442,
                    836.703,
                    865.027
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.AvgAggregationBenchmark.measureOnConsecutiveValuesFromCacheWithPreMaterialisation",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 832.9966666666668,
            "scoreError": 123.20315890824007,
            "scoreConfidence": [
                709.7935077584267,
                956.1998255749069
            ],
            "scorePercentiles": {
                "0.0": 792.8465,
                "50.0": 822.1157499999999,
                "90.0": 900.831,
                "95.0": 900.831,
                "99.0": 900.831,
                "99.9": 900.831,
                "99.99": 900.831,
                "99.999": 900.831,
                "99.9999": 900.831,
                "100.0": 900.831
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    862.8995,
                    792.8465,
                    799.492
                ],
                [
                    900.831,
                    844.7395,
                    797.1715
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.AvgAggregationBenchmark.measureOnRandomDoubleValues",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 2047.5718333333334,
            "scoreError": 215.94741089966152,
            "scoreConfidence": [
                1831.624422433672,
                2263.519244232995
            ],
            "scorePercentiles": {
                "0.0": 1931.018,
                "50.0": 2048.7439999999997,
                "90.0": 2156.623,
                "95.0": 2156.623,
                "99.0": 2156.623,
                "99.9": 2156.623,
                "99.99": 2156.623,
                "99.999": 2156.623,
                "99.9999": 2156.623,
                "100.0": 2156.623
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    2094.118,
                    2156.623,
                    2060.841
                ],
                [
                    1931.018,
                    2006.184,
                    2036.647
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.AvgAggregationBenchmark.measureOnRandomDoubleValuesFromCache",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 1034.5625833333334,
            "scoreError": 89.53158435521762,
            "scoreConfidence": [
                945.0309989781157,
                1124.094167688551
            ],
            "scorePercentiles": {
                "0.0": 1003.549,
                "50.0": 1023.2725,
                "90.0": 1074.957,
                "95.0": 1074.957,
                "99.0": 1074.957,
                "99.9": 1074.957,
                "99.99": 1074.957,
                "99.999": 1074.957,
                "99.9999": 1074.957,
                "100.0": 1074.957
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    1008.4185,
                    1020.3545,
                    1074.957
                ],
                [
                    1003.549,
                    1026.1905,
                    1073.906
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.AvgAggregationBenchmark.measureOnRandomDoubleValuesFromCacheWithPreMaterialisation",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 1639.3361666666667,
            "scoreError": 474.12306995882625,
            "scoreConfidence": [
                1165.2130967078406,
                2113.459236625493
            ],
            "scorePercentiles": {
                "0.0": 1484.919,
                "50.0": 1572.551,
                "90.0": 1889.953,
                "95.0": 1889.953,
                "99.0": 1889.953,
                "99.9": 1889.953,
                "99.99": 1889.953,
                "99.999": 1889.953,
                "99.9999": 1889.953,
                "100.0": 1889.953
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    1889.953,
                    1625.876,
                    1801.157
                ],
                [
                    1514.886,
                    1519.226,
                    1484.919
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.AvgAggregationBenchmark.measureOnRandomValues",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 1981.009,
            "scoreError": 52.693073827846256,
            "scoreConfidence": [
                1928.3159261721537,
                2033.7020738278463
            ],
            "scorePercentiles": {
                "0.0": 1952.379,
                "50.0": 1980.245,
                "90.0": 2002.917,
                "95.0": 2002.917,
                "99.0": 2002.917,
                "99.9": 2002.917,
                "99.99": 2002.917,
                "99.999": 2002.917,
                "99.9999": 2002.917,
                "100.0": 2002.917
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    1999.29,
                    1984.109,
                    1970.978
                ],
                [
                    1952.379,
                    2002.917,
                    1976.381
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.AvgAggregationBenchmark.measureOnRandomValuesFromCache",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 893.2856666666667,
            "scoreError": 67.76585156263562,
            "scoreConfidence": [
                825.5198151040311,
                961.0515182293022
            ],
            "scorePercentiles": {
                "0.0": 861.9255,
                "50.0": 893.28,
                "90.0": 922.9495,
                "95.0": 922.9495,
                "99.0": 922.9495,
                "99.9": 922.9495,
                "99.99": 922.9495,
                "99.999": 922.9495,
                "99.9999": 922.9495,
                "100.0": 922.9495
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    896.968,
                    889.592,
                    916.81
                ],
                [
                    922.9495,
                    871.469,
                    861.9255
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.AvgAggregationBenchmark.measureOnRandomValuesFromCacheWithPreMaterialisation",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 1236.7235,
            "scoreError": 156.28893334160125,
            "scoreConfidence": [
                1080.4345666583988,
                1393.0124333416013
            ],
            "scorePercentiles": {
                "0.0": 1189.92,
                "50.0": 1211.853,
                "90.0": 1321.695,
                "95.0": 1321.695,
                "99.0": 1321.695,
                "99.9": 1321.695,
                "99.99": 1321.695,
                "99.999": 1321.695,
                "99.9999": 1321.695,
                "100.0": 1321.695
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    1217.678,
                    1193.782,
                    1206.028
                ],
                [
                    1291.238,
                    1189.92,
                    1321.695
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.CardinalityAggregationBenchmark.measureOnCategoricalValues",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 1993.2520000000002,
            "scoreError": 148.4058043856022,
            "scoreConfidence": [
                1844.8461956143979,
                2141.6578043856025
            ],
            "scorePercentiles": {
                "0.0": 1927.565,
                "50.0": 1992.1425,
                "90.0": 2062.677,
                "95.0": 2062.677,
                "99.0": 2062.677,
                "99.9": 2062.677,
                "99.99": 2062.677,
                "99.999": 2062.677,
                "99.9999": 2062.677,
                "100.0": 2062.677
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    2019.041,
                    2062.677,
                    2033.838
                ],
                [
                    1965.244,
                    1951.147,
                    1927.565
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.CardinalityAggregationBenchmark.measureOnCategoricalValuesFromCache",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 936.5966666666667,
            "scoreError": 106.68676317592518,
            "scoreConfidence": [
                829.9099034907415,
                1043.2834298425919
            ],
            "scorePercentiles": {
                "0.0": 898.884,
                "50.0": 927.51125,
                "90.0": 1004.697,
                "95.0": 1004.697,
                "99.0": 1004.697,
                "99.9": 1004.697,
                "99.99": 1004.697,
                "99.999": 1004.697,
                "99.9999": 1004.697,
                "100.0": 1004.697
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    898.884,
                    919.441,
                    935.5815
                ],
                [
                    1004.697,
                    950.581,
                    910.3955
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.CardinalityAggregationBenchmark.measureOnCategoricalValuesFromCacheWithPreMaterialisation",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 938.5946666666667,
            "scoreError": 245.85943732503674,
            "scoreConfidence": [
                692.73522934163,
                1184.4541039917035
            ],
            "scorePercentiles": {
                "0.0": 868.174,
                "50.0": 901.919,
                "90.0": 1104.555,
                "95.0": 1104.555,
                "99.0": 1104.555,
                "99.9": 1104.555,
                "99.99": 1104.555,
                "99.999": 1104.555,
                "99.9999": 1104.555,
                "100.0": 1104.555
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    905.4615,
                    1104.555,
                    868.174
                ],
                [
                    888.9525,
                    966.0485,
                    898.3765
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.CardinalityAggregationBenchmark.measureOnConsecutiveValues",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 2061.3155,
            "scoreError": 129.00359414559472,
            "scoreConfidence": [
                1932.3119058544055,
                2190.319094145595
            ],
            "scorePercentiles": {
                "0.0": 2014.084,
                "50.0": 2046.7045,
                "90.0": 2119.158,
                "95.0": 2119.158,
                "99.0": 2119.158,
                "99.9": 2119.158,
                "99.99": 2119.158,
                "99.999": 2119.158,
                "99.9999": 2119.158,
                "100.0": 2119.158
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    2119.158,
                    2014.084,
                    2025.053
                ],
                [
                    2057.934,
                    2035.475,
                    2116.189
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.CardinalityAggregationBenchmark.measureOnConsecutiveValuesFromCache",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 910.3688333333333,
            "scoreError": 34.222088283855385,
            "scoreConfidence": [
                876.1467450494779,
                944.5909216171888
            ],
            "scorePercentiles": {
                "0.0": 896.1735,
                "50.0": 908.6479999999999,
                "90.0": 929.9775,
                "95.0": 929.9775,
                "99.0": 929.9775,
                "99.9": 929.9775,
                "99.99": 929.9775,
                "99.999": 929.9775,
                "99.9999": 929.9775,
                "100.0": 929.9775
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    929.9775,
                    900.8305,
                    907.1455
                ],
                [
                    917.9355,
                    896.1735,
                    910.1505
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.CardinalityAggregationBenchmark.measureOnConsecutiveValuesFromCacheWithPreMaterialisation",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 926.8069166666668,
            "scoreError": 133.92631306792333,
            "scoreConfidence": [
                792.8806035987434,
                1060.7332297345902
            ],
            "scorePercentiles": {
                "0.0": 878.226,
                "50.0": 913.56825,
                "90.0": 1013.424,
                "95.0": 1013.424,
                "99.0": 1013.424,
                "99.9": 1013.424,
                "99.99": 1013.424,
                "99.999": 1013.424,
                "99.9999": 1013.424,
                "100.0": 1013.424
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    944.738,
                    914.058,
                    897.317
                ],
                [
                    878.226,
                    1013.424,
                    913.0785
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.CardinalityAggregationBenchmark.measureOnRandomDoubleValues",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 2118.827333333333,
            "scoreError": 155.78606625541184,
            "scoreConfidence": [
                1963.0412670779212,
                2274.613399588745
            ],
            "scorePercentiles": {
                "0.0": 2055.865,
                "50.0": 2116.0915,
                "90.0": 2187.337,
                "95.0": 2187.337,
                "99.0": 2187.337,
                "99.9": 2187.337,
                "99.99": 2187.337,
                "99.999": 2187.337,
                "99.9999": 2187.337,
                "100.0": 2187.337
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    2122.337,
                    2176.586,
                    2187.337
                ],
                [
                    2055.865,
                    2060.993,
                    2109.846
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.CardinalityAggregationBenchmark.measureOnRandomDoubleValuesFromCache",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 1099.1833333333332,
            "scoreError": 92.39440236942445,
            "scoreConfidence": [
                1006.7889309639087,
                1191.5777357027575
            ],
            "scorePercentiles": {
                "0.0": 1061.461,
                "50.0": 1094.2335,
                "90.0": 1154.453,
                "95.0": 1154.453,
                "99.0": 1154.453,
                "99.9": 1154.453,
                "99.99": 1154.453,
                "99.999": 1154.453,
                "99.9999": 1154.453,
                "100.0": 1154.453
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    1154.453,
                    1087.26,
                    1075.676
                ],
                [
                    1061.461,
                    1115.043,
                    1101.207
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.CardinalityAggregationBenchmark.measureOnRandomDoubleValuesFromCacheWithPreMaterialisation",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 1687.6518333333333,
            "scoreError": 449.3655414040734,
            "scoreConfidence": [
                1238.28629192926,
                2137.0173747374065
            ],
            "scorePercentiles": {
                "0.0": 1464.145,
                "50.0": 1676.1205,
                "90.0": 1917.992,
                "95.0": 1917.992,
                "99.0": 1917.992,
                "99.9": 1917.992,
                "99.99": 1917.992,
                "99.999": 1917.992,
                "99.9999": 1917.992,
                "100.0": 1917.992
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    1725.708,
                    1795.941,
                    1917.992
                ],
                [
                    1595.592,
                    1626.533,
                    1464.145
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.CardinalityAggregationBenchmark.measureOnRandomValues",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 2101.100166666667,
            "scoreError": 236.67912888310042,
            "scoreConfidence": [
                1864.4210377835666,
                2337.7792955497675
            ],
            "scorePercentiles": {
                "0.0": 1993.548,
                "50.0": 2098.5775000000003,
                "90.0": 2232.255,
                "95.0": 2232.255,
                "99.0": 2232.255,
                "99.9": 2232.255,
                "99.99": 2232.255,
                "99.999": 2232.255,
                "99.9999": 2232.255,
                "100.0": 2232.255
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    2120.543,
                    2232.255,
                    2076.612
                ],
                [
                    2145.205,
                    1993.548,
                    2038.438
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.CardinalityAggregationBenchmark.measureOnRandomValuesFromCache",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 905.8098333333334,
            "scoreError": 38.38927006494429,
            "scoreConfidence": [
                867.4205632683891,
                944.1991033982777
            ],
            "scorePercentiles": {
                "0.0": 884.9545,
                "50.0": 910.01475,
                "90.0": 918.7195,
                "95.0": 918.7195,
                "99.0": 918.7195,
                "99.9": 918.7195,
                "99.99": 918.7195,
                "99.999": 918.7195,
                "99.9999": 918.7195,
                "100.0": 918.7195
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    884.9545,
                    911.3155,
                    908.714
                ],
                [
                    918.7195,
                    917.756,
                    893.3995
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.CardinalityAggregationBenchmark.measureOnRandomValuesFromCacheWithPreMaterialisation",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 1324.4346666666668,
            "scoreError": 164.04837002344092,
            "scoreConfidence": [
                1160.386296643226,
                1488.4830366901076
            ],
            "scorePercentiles": {
                "0.0": 1222.061,
                "50.0": 1328.5994999999998,
                "90.0": 1392.063,
                "95.0": 1392.063,
                "99.0": 1392.063,
                "99.9": 1392.063,
                "99.99": 1392.063,
                "99.999": 1392.063,
                "99.9999": 1392.063,
                "100.0": 1392.063
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    1392.063,
                    1309.279,
                    1334.32
                ],
                [
                    1222.061,
                    1322.879,
                    1366.006
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.CountAggregationBenchmark.measureOnCategoricalValues",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 2277.6941666666667,
            "scoreError": 201.14252104688043,
            "scoreConfidence": [
                2076.551645619786,
                2478.8366877135472
            ],
            "scorePercentiles": {
                "0.0": 2187.077,
                "50.0": 2269.7290000000003,
                "90.0": 2405.636,
                "95.0": 2405.636,
                "99.0": 2405.636,
                "99.9": 2405.636,
                "99.99": 2405.636,
                "99.999": 2405.636,
                "99.9999": 2405.636,
                "100.0": 2405.636
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    2405.636,
                    2258.951,
                    2283.683
                ],
                [
                    2250.311,
                    2187.077,
                    2280.507
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.CountAggregationBenchmark.measureOnCategoricalValuesFromCache",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 1203.2108333333333,
            "scoreError": 216.50011807550558,
            "scoreConfidence": [
                986.7107152578277,
                1419.7109514088388
            ],
            "scorePercentiles": {
                "0.0": 1155.834,
                "50.0": 1173.5115,
                "90.0": 1355.629,
                "95.0": 1355.629,
                "99.0": 1355.629,
                "99.9": 1355.629,
                "99.99": 1355.629,
                "99.999": 1355.629,
                "99.9999": 1355.629,
                "100.0": 1355.629
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    1355.629,
                    1158.513,
                    1155.834
                ],
                [
                    1203.545,
                    1188.51,
                    1157.234
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.CountAggregationBenchmark.measureOnCategoricalValuesFromCacheWithPreMaterialisation",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 1229.9793333333334,
            "scoreError": 144.79417253119584,
            "scoreConfidence": [
                1085.1851608021375,
                1374.7735058645294
            ],
            "scorePercentiles": {
                "0.0": 1136.313,
                "50.0": 1241.258,
                "90.0": 1276.558,
                "95.0": 1276.558,
                "99.0": 1276.558,
                "99.9": 1276.558,
                "99.99": 1276.558,
                "99.999": 1276.558,
                "99.9999": 1276.558,
                "100.0": 1276.558
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    1258.151,
                    1136.313,
                    1217.126
                ],
                [
                    1224.365,
                    1276.558,
                    1267.363
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.CountAggregationBenchmark.measureOnConsecutiveValues",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 2604.8759999999997,
            "scoreError": 169.21743014059194,
            "scoreConfidence": [
                2435.6585698594076,
                2774.093430140592
            ],
            "scorePercentiles": {
                "0.0": 2529.636,
                "50.0": 2592.1800000000003,
                "90.0": 2696.254,
                "95.0": 2696.254,
                "99.0": 2696.254,
                "99.9": 2696.254,
                "99.99": 2696.254,
                "99.999": 2696.254,
                "99.9999": 2696.254,
                "100.0": 2696.254
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    2606.3,
                    2650.93,
                    2696.254
                ],
                [
                    2568.076,
                    2529.636,
                    2578.06
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.CountAggregationBenchmark.measureOnConsecutiveValuesFromCache",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 1389.5230000000001,
            "scoreError": 93.1616043410116,
            "scoreConfidence": [
                1296.3613956589886,
                1482.6846043410117
            ],
            "scorePercentiles": {
                "0.0": 1353.404,
                "50.0": 1383.3915000000002,
                "90.0": 1443.115,
                "95.0": 1443.115,
                "99.0": 1443.115,
                "99.9": 1443.115,
                "99.99": 1443.115,
                "99.999": 1443.115,
                "99.9999": 1443.115,
                "100.0": 1443.115
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    1392.756,
                    1374.027,
                    1363.704
                ],
                [
                    1410.132,
                    1353.404,
                    1443.115
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.CountAggregationBenchmark.measureOnConsecutiveValuesFromCacheWithPreMaterialisation",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 1381.353,
            "scoreError": 74.94063200229606,
            "scoreConfidence": [
                1306.412367997704,
                1456.2936320022961
            ],
            "scorePercentiles": {
                "0.0": 1343.221,
                "50.0": 1387.479,
                "90.0": 1412.556,
                "95.0": 1412.556,
                "99.0": 1412.556,
                "99.9": 1412.556,
                "99.99": 1412.556,
                "99.999": 1412.556,
                "99.9999": 1412.556,
                "100.0": 1412.556
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    1393.683,
                    1343.221,
                    1412.556
                ],
                [
                    1356.588,
                    1381.275,
                    1400.795
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.CountAggregationBenchmark.measureOnRandomDoubleValues",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 5904.838833333332,
            "scoreError": 517.7981039947765,
            "scoreConfidence": [
                5387.040729338556,
                6422.636937328109
            ],
            "scorePercentiles": {
                "0.0": 5676.471,
                "50.0": 5942.791,
                "90.0": 6104.829,
                "95.0": 6104.829,
                "99.0": 6104.829,
                "99.9": 6104.829,
                "99.99": 6104.829,
                "99.999": 6104.829,
                "99.9999": 6104.829,
                "100.0": 6104.829
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    5710.357,
                    5676.471,
                    5853.254
                ],
                [
                    6051.794,
                    6032.328,
                    6104.829
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.CountAggregationBenchmark.measureOnRandomDoubleValuesFromCache",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 4647.394499999999,
            "scoreError": 229.50177832858293,
            "scoreConfidence": [
                4417.892721671416,
                4876.896278328582
            ],
            "scorePercentiles": {
                "0.0": 4540.823,
                "50.0": 4629.379499999999,
                "90.0": 4745.454,
                "95.0": 4745.454,
                "99.0": 4745.454,
                "99.9": 4745.454,
                "99.99": 4745.454,
                "99.999": 4745.454,
                "99.9999": 4745.454,
                "100.0": 4745.454
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    4742.591,
                    4540.823,
                    4745.454
                ],
                [
                    4596.74,
                    4618.413,
                    4640.346
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.CountAggregationBenchmark.measureOnRandomDoubleValuesFromCacheWithPreMaterialisation",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 5178.141833333334,
            "scoreError": 147.86297393370853,
            "scoreConfidence": [
                5030.278859399626,
                5326.004807267042
            ],
            "scorePercentiles": {
                "0.0": 5107.015,
                "50.0": 5190.492,
                "90.0": 5235.385,
                "95.0": 5235.385,
                "99.0": 5235.385,
                "99.9": 5235.385,
                "99.99": 5235.385,
                "99.999": 5235.385,
                "99.9999": 5235.385,
                "100.0": 5235.385
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    5235.385,
                    5125.604,
                    5219.863
                ],
                [
                    5209.988,
                    5170.996,
                    5107.015
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.CountAggregationBenchmark.measureOnRandomValues",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 2683.186,
            "scoreError": 130.9175612367726,
            "scoreConfidence": [
                2552.2684387632276,
                2814.1035612367727
            ],
            "scorePercentiles": {
                "0.0": 2609.46,
                "50.0": 2688.6459999999997,
                "90.0": 2736.92,
                "95.0": 2736.92,
                "99.0": 2736.92,
                "99.9": 2736.92,
                "99.99": 2736.92,
                "99.999": 2736.92,
                "99.9999": 2736.92,
                "100.0": 2736.92
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    2656.924,
                    2736.92,
                    2609.46
                ],
                [
                    2671.654,
                    2718.52,
                    2705.638
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.CountAggregationBenchmark.measureOnRandomValuesFromCache",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 1492.8316666666667,
            "scoreError": 103.13041095894718,
            "scoreConfidence": [
                1389.7012557077196,
                1595.9620776256138
            ],
            "scorePercentiles": {
                "0.0": 1448.868,
                "50.0": 1488.9415,
                "90.0": 1551.267,
                "95.0": 1551.267,
                "99.0": 1551.267,
                "99.9": 1551.267,
                "99.99": 1551.267,
                "99.999": 1551.267,
                "99.9999": 1551.267,
                "100.0": 1551.267
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    1551.267,
                    1509.12,
                    1448.868
                ],
                [
                    1506.142,
                    1471.741,
                    1469.852
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.CountAggregationBenchmark.measureOnRandomValuesFromCacheWithPreMaterialisation",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 1748.4278333333332,
            "scoreError": 374.15256583390897,
            "scoreConfidence": [
                1374.2752674994242,
                2122.580399167242
            ],
            "scorePercentiles": {
                "0.0": 1603.771,
                "50.0": 1737.5215,
                "90.0": 1923.1,
                "95.0": 1923.1,
                "99.0": 1923.1,
                "99.9": 1923.1,
                "99.99": 1923.1,
                "99.999": 1923.1,
                "99.9999": 1923.1,
                "100.0": 1923.1
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    1854.798,
                    1923.1,
                    1817.826
                ],
                [
                    1603.771,
                    1657.217,
                    1633.855
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.MaxAggregationBenchmark.measureOnCategoricalValues",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 1773.8746666666666,
            "scoreError": 76.25854579661551,
            "scoreConfidence": [
                1697.6161208700512,
                1850.133212463282
            ],
            "scorePercentiles": {
                "0.0": 1741.71,
                "50.0": 1765.6035,
                "90.0": 1809.798,
                "95.0": 1809.798,
                "99.0": 1809.798,
                "99.9": 1809.798,
                "99.99": 1809.798,
                "99.999": 1809.798,
                "99.9999": 1809.798,
                "100.0": 1809.798
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    1760.174,
                    1741.71,
                    1771.033
                ],
                [
                    1803.667,
                    1809.798,
                    1756.866
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.MaxAggregationBenchmark.measureOnCategoricalValuesFromCache",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 748.5743333333334,
            "scoreError": 29.121103164992707,
            "scoreConfidence": [
                719.4532301683406,
                777.6954364983261
            ],
            "scorePercentiles": {
                "0.0": 734.1825,
                "50.0": 749.12375,
                "90.0": 760.775,
                "95.0": 760.775,
                "99.0": 760.775,
                "99.9": 760.775,
                "99.99": 760.775,
                "99.999": 760.775,
                "99.9999": 760.775,
                "100.0": 760.775
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    741.4275,
                    734.1825,
                    756.8135
                ],
                [
                    754.7665,
                    760.775,
                    743.481
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.MaxAggregationBenchmark.measureOnCategoricalValuesFromCacheWithPreMaterialisation",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 661.016,
            "scoreError": 79.03465893332182,
            "scoreConfidence": [
                581.9813410666782,
                740.0506589333218
            ],
            "scorePercentiles": {
                "0.0": 626.888,
                "50.0": 663.80525,
                "90.0": 694.5125,
                "95.0": 694.5125,
                "99.0": 694.5125,
                "99.9": 694.5125,
                "99.99": 694.5125,
                "99.999": 694.5125,
                "99.9999": 694.5125,
                "100.0": 694.5125
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    682.5075,
                    694.5125,
                    679.753
                ],
                [
                    634.5775,
                    626.888,
                    647.8575
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.MaxAggregationBenchmark.measureOnConsecutiveValues",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 1872.4295000000002,
            "scoreError": 147.4747004801636,
            "scoreConfidence": [
                1724.9547995198366,
                2019.9042004801638
            ],
            "scorePercentiles": {
                "0.0": 1819.706,
                "50.0": 1862.9355,
                "90.0": 1952.38,
                "95.0": 1952.38,
                "99.0": 1952.38,
                "99.9": 1952.38,
                "99.99": 1952.38,
                "99.999": 1952.38,
                "99.9999": 1952.38,
                "100.0": 1952.38
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    1915.021,
                    1869.225,
                    1856.646
                ],
                [
                    1819.706,
                    1821.599,
                    1952.38
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.MaxAggregationBenchmark.measureOnConsecutiveValuesFromCache",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 691.4340833333332,
            "scoreError": 54.45279192992173,
            "scoreConfidence": [
                636.9812914034114,
                745.886875263255
            ],
            "scorePercentiles": {
                "0.0": 659.481,
                "50.0": 696.94525,
                "90.0": 713.879,
                "95.0": 713.879,
                "99.0": 713.879,
                "99.9": 713.879,
                "99.99": 713.879,
                "99.999": 713.879,
                "99.9999": 713.879,
                "100.0": 713.879
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    702.887,
                    697.4625,
                    713.879
                ],
                [
                    678.467,
                    659.481,
                    696.428
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.MaxAggregationBenchmark.measureOnConsecutiveValuesFromCacheWithPreMaterialisation",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 748.8364166666665,
            "scoreError": 102.93449652610857,
            "scoreConfidence": [
                645.901920140558,
                851.7709131927751
            ],
            "scorePercentiles": {
                "0.0": 704.416,
                "50.0": 744.8634999999999,
                "90.0": 802.325,
                "95.0": 802.325,
                "99.0": 802.325,
                "99.9": 802.325,
                "99.99": 802.325,
                "99.999": 802.325,
                "99.9999": 802.325,
                "100.0": 802.325
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    720.2005,
                    704.416,
                    732.731
                ],
                [
                    802.325,
                    776.35,
                    756.996
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.MaxAggregationBenchmark.measureOnRandomDoubleValues",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 1918.3318333333334,
            "scoreError": 132.55570670358853,
            "scoreConfidence": [
                1785.7761266297448,
                2050.887540036922
            ],
            "scorePercentiles": {
                "0.0": 1852.795,
                "50.0": 1916.4070000000002,
                "90.0": 1986.916,
                "95.0": 1986.916,
                "99.0": 1986.916,
                "99.9": 1986.916,
                "99.99": 1986.916,
                "99.999": 1986.916,
                "99.9999": 1986.916,
                "100.0": 1986.916
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    1886.97,
                    1925.015,
                    1907.799
                ],
                [
                    1950.496,
                    1852.795,
                    1986.916
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.MaxAggregationBenchmark.measureOnRandomDoubleValuesFromCache",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 918.6561666666666,
            "scoreError": 62.97498514374502,
            "scoreConfidence": [
                855.6811815229216,
                981.6311518104117
            ],
            "scorePercentiles": {
                "0.0": 878.295,
                "50.0": 921.49575,
                "90.0": 939.3395,
                "95.0": 939.3395,
                "99.0": 939.3395,
                "99.9": 939.3395,
                "99.99": 939.3395,
                "99.999": 939.3395,
                "99.9999": 939.3395,
                "100.0": 939.3395
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    878.295,
                    916.575,
                    926.4165
                ],
                [
                    939.3395,
                    937.9505,
                    913.3605
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.MaxAggregationBenchmark.measureOnRandomDoubleValuesFromCacheWithPreMaterialisation",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 1411.732,
            "scoreError": 506.3340467350718,
            "scoreConfidence": [
                905.3979532649282,
                1918.0660467350717
            ],
            "scorePercentiles": {
                "0.0": 1307.311,
                "50.0": 1348.508,
                "90.0": 1774.708,
                "95.0": 1774.708,
                "99.0": 1774.708,
                "99.9": 1774.708,
                "99.99": 1774.708,
                "99.999": 1774.708,
                "99.9999": 1774.708,
                "100.0": 1774.708
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    1321.066,
                    1307.311,
                    1774.708
                ],
                [
                    1375.95,
                    1313.014,
                    1378.343
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.MaxAggregationBenchmark.measureOnRandomValues",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 1908.7444999999998,
            "scoreError": 179.9419047212878,
            "scoreConfidence": [
                1728.802595278712,
                2088.6864047212875
            ],
            "scorePercentiles": {
                "0.0": 1798.719,
                "50.0": 1917.7595000000001,
                "90.0": 1997.917,
                "95.0": 1997.917,
                "99.0": 1997.917,
                "99.9": 1997.917,
                "99.99": 1997.917,
                "99.999": 1997.917,
                "99.9999": 1997.917,
                "100.0": 1997.917
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    1897.128,
                    1923.184,
                    1997.917
                ],
                [
                    1798.719,
                    1914.225,
                    1921.294
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.MaxAggregationBenchmark.measureOnRandomValuesFromCache",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 790.8994166666666,
            "scoreError": 49.746783915540654,
            "scoreConfidence": [
                741.152632751126,
                840.6462005822073
            ],
            "scorePercentiles": {
                "0.0": 759.23,
                "50.0": 793.20525,
                "90.0": 811.589,
                "95.0": 811.589,
                "99.0": 811.589,
                "99.9": 811.589,
                "99.99": 811.589,
                "99.999": 811.589,
                "99.9999": 811.589,
                "100.0": 811.589
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    811.589,
                    797.975,
                    788.4355
                ],
                [
                    759.23,
                    788.3325,
                    799.8345
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.MaxAggregationBenchmark.measureOnRandomValuesFromCacheWithPreMaterialisation",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 1112.4878333333334,
            "scoreError": 138.5528439580609,
            "scoreConfidence": [
                973.9349893752725,
                1251.0406772913943
            ],
            "scorePercentiles": {
                "0.0": 1040.698,
                "50.0": 1110.6755,
                "90.0": 1175.968,
                "95.0": 1175.968,
                "99.0": 1175.968,
                "99.9": 1175.968,
                "99.99": 1175.968,
                "99.999": 1175.968,
                "99.9999": 1175.968,
                "100.0": 1175.968
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    1040.698,
                    1156.488,
                    1080.422
                ],
                [
                    1115.778,
                    1175.968,
                    1105.573
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.MinAggregationBenchmark.measureOnCategoricalValues",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 1685.2305000000003,
            "scoreError": 72.45054430560373,
            "scoreConfidence": [
                1612.7799556943967,
                1757.681044305604
            ],
            "scorePercentiles": {
                "0.0": 1656.129,
                "50.0": 1676.987,
                "90.0": 1719.095,
                "95.0": 1719.095,
                "99.0": 1719.095,
                "99.9": 1719.095,
                "99.99": 1719.095,
                "99.999": 1719.095,
                "99.9999": 1719.095,
                "100.0": 1719.095
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    1719.095,
                    1670.974,
                    1667.995
                ],
                [
                    1714.19,
                    1683.0,
                    1656.129
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.MinAggregationBenchmark.measureOnCategoricalValuesFromCache",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 723.3325,
            "scoreError": 73.60344128457017,
            "scoreConfidence": [
                649.7290587154298,
                796.9359412845702
            ],
            "scorePercentiles": {
                "0.0": 701.7625,
                "50.0": 717.21875,
                "90.0": 774.327,
                "95.0": 774.327,
                "99.0": 774.327,
                "99.9": 774.327,
                "99.99": 774.327,
                "99.999": 774.327,
                "99.9999": 774.327,
                "100.0": 774.327
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    705.9715,
                    701.7625,
                    716.032
                ],
                [
                    723.4965,
                    774.327,
                    718.4055
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.MinAggregationBenchmark.measureOnCategoricalValuesFromCacheWithPreMaterialisation",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 692.6399166666666,
            "scoreError": 87.98981570088475,
            "scoreConfidence": [
                604.6501009657819,
                780.6297323675514
            ],
            "scorePercentiles": {
                "0.0": 661.7915,
                "50.0": 684.3685,
                "90.0": 751.131,
                "95.0": 751.131,
                "99.0": 751.131,
                "99.9": 751.131,
                "99.99": 751.131,
                "99.999": 751.131,
                "99.9999": 751.131,
                "100.0": 751.131
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    751.131,
                    678.25,
                    698.8535
                ],
                [
                    675.3265,
                    661.7915,
                    690.487
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.MinAggregationBenchmark.measureOnConsecutiveValues",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 1931.3773333333336,
            "scoreError": 157.6429322304168,
            "scoreConfidence": [
                1773.7344011029168,
                2089.0202655637504
            ],
            "scorePercentiles": {
                "0.0": 1827.068,
                "50.0": 1945.9595,
                "90.0": 1982.636,
                "95.0": 1982.636,
                "99.0": 1982.636,
                "99.9": 1982.636,
                "99.99": 1982.636,
                "99.999": 1982.636,
                "99.9999": 1982.636,
                "100.0": 1982.636
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    1827.068,
                    1961.303,
                    1966.905
                ],
                [
                    1919.736,
                    1930.616,
                    1982.636
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.MinAggregationBenchmark.measureOnConsecutiveValuesFromCache",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 755.7518333333334,
            "scoreError": 96.80254183218204,
            "scoreConfidence": [
                658.9492915011513,
                852.5543751655155
            ],
            "scorePercentiles": {
                "0.0": 707.0875,
                "50.0": 752.40225,
                "90.0": 810.546,
                "95.0": 810.546,
                "99.0": 810.546,
                "99.9": 810.546,
                "99.99": 810.546,
                "99.999": 810.546,
                "99.9999": 810.546,
                "100.0": 810.546
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    747.966,
                    707.0875,
                    739.822
                ],
                [
                    810.546,
                    756.8385,
                    772.251
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.MinAggregationBenchmark.measureOnConsecutiveValuesFromCacheWithPreMaterialisation",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 737.0630833333333,
            "scoreError": 57.7524655259843,
            "scoreConfidence": [
                679.310617807349,
                794.8155488593177
            ],
            "scorePercentiles": {
                "0.0": 717.2815,
                "50.0": 727.7049999999999,
                "90.0": 769.7475,
                "95.0": 769.7475,
                "99.0": 769.7475,
                "99.9": 769.7475,
                "99.99": 769.7475,
                "99.999": 769.7475,
                "99.9999": 769.7475,
                "100.0": 769.7475
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    769.7475,
                    724.658,
                    717.2815
                ],
                [
                    755.2815,
                    728.0665,
                    727.3435
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.MinAggregationBenchmark.measureOnRandomDoubleValues",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 1947.5365,
            "scoreError": 101.27067965865078,
            "scoreConfidence": [
                1846.2658203413491,
                2048.8071796586505
            ],
            "scorePercentiles": {
                "0.0": 1891.181,
                "50.0": 1947.4445,
                "90.0": 2002.757,
                "95.0": 2002.757,
                "99.0": 2002.757,
                "99.9": 2002.757,
                "99.99": 2002.757,
                "99.999": 2002.757,
                "99.9999": 2002.757,
                "100.0": 2002.757
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    1891.181,
                    1937.707,
                    2002.757
                ],
                [
                    1953.567,
                    1941.322,
                    1958.685
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.MinAggregationBenchmark.measureOnRandomDoubleValuesFromCache",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 862.8208333333333,
            "scoreError": 85.18991240727638,
            "scoreConfidence": [
                777.6309209260569,
                948.0107457406098
            ],
            "scorePercentiles": {
                "0.0": 830.9215,
                "50.0": 859.14425,
                "90.0": 907.6055,
                "95.0": 907.6055,
                "99.0": 907.6055,
                "99.9": 907.6055,
                "99.99": 907.6055,
                "99.999": 907.6055,
                "99.9999": 907.6055,
                "100.0": 907.6055
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    871.809,
                    835.2735,
                    884.836
                ],
                [
                    907.6055,
                    846.4795,
                    830.9215
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.MinAggregationBenchmark.measureOnRandomDoubleValuesFromCacheWithPreMaterialisation",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 1318.5143333333335,
            "scoreError": 265.29532946761054,
            "scoreConfidence": [
                1053.219003865723,
                1583.8096628009441
            ],
            "scorePercentiles": {
                "0.0": 1242.901,
                "50.0": 1272.35,
                "90.0": 1492.271,
                "95.0": 1492.271,
                "99.0": 1492.271,
                "99.9": 1492.271,
                "99.99": 1492.271,
                "99.999": 1492.271,
                "99.9999": 1492.271,
                "100.0": 1492.271
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    1492.271,
                    1268.681,
                    1276.019
                ],
                [
                    1363.238,
                    1242.901,
                    1267.976
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.MinAggregationBenchmark.measureOnRandomValues",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 1958.8493333333333,
            "scoreError": 267.54586583403176,
            "scoreConfidence": [
                1691.3034674993016,
                2226.3951991673653
            ],
            "scorePercentiles": {
                "0.0": 1868.029,
                "50.0": 1940.1129999999998,
                "90.0": 2133.741,
                "95.0": 2133.741,
                "99.0": 2133.741,
                "99.9": 2133.741,
                "99.99": 2133.741,
                "99.999": 2133.741,
                "99.9999": 2133.741,
                "100.0": 2133.741
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    1984.747,
                    1868.029,
                    1935.07
                ],
                [
                    1945.156,
                    1886.353,
                    2133.741
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.MinAggregationBenchmark.measureOnRandomValuesFromCache",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 810.8949166666666,
            "scoreError": 129.59810350552655,
            "scoreConfidence": [
                681.2968131611401,
                940.4930201721932
            ],
            "scorePercentiles": {
                "0.0": 761.3615,
                "50.0": 795.402,
                "90.0": 880.024,
                "95.0": 880.024,
                "99.0": 880.024,
                "99.9": 880.024,
                "99.99": 880.024,
                "99.999": 880.024,
                "99.9999": 880.024,
                "100.0": 880.024
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    761.3615,
                    880.024,
                    803.643
                ],
                [
                    787.161,
                    779.3985,
                    853.7815
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.MinAggregationBenchmark.measureOnRandomValuesFromCacheWithPreMaterialisation",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 1147.03475,
            "scoreError": 271.1547176155736,
            "scoreConfidence": [
                875.8800323844264,
                1418.1894676155737
            ],
            "scorePercentiles": {
                "0.0": 1018.333,
                "50.0": 1149.62,
                "90.0": 1285.255,
                "95.0": 1285.255,
                "99.0": 1285.255,
                "99.9": 1285.255,
                "99.99": 1285.255,
                "99.999": 1285.255,
                "99.9999": 1285.255,
                "100.0": 1285.255
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    1018.333,
                    1164.303,
                    1067.1315
                ],
                [
                    1285.255,
                    1212.249,
                    1134.937
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.SumAggregationBenchmark.measureOnCategoricalValues",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 1876.5523333333333,
            "scoreError": 91.23089445110689,
            "scoreConfidence": [
                1785.3214388822264,
                1967.7832277844402
            ],
            "scorePercentiles": {
                "0.0": 1840.355,
                "50.0": 1867.6895,
                "90.0": 1925.877,
                "95.0": 1925.877,
                "99.0": 1925.877,
                "99.9": 1925.877,
                "99.99": 1925.877,
                "99.999": 1925.877,
                "99.9999": 1925.877,
                "100.0": 1925.877
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    1904.945,
                    1870.825,
                    1925.877
                ],
                [
                    1840.355,
                    1852.758,
                    1864.554
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.SumAggregationBenchmark.measureOnCategoricalValuesFromCache",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 810.3164166666666,
            "scoreError": 99.77195767850078,
            "scoreConfidence": [
                710.5444589881657,
                910.0883743451674
            ],
            "scorePercentiles": {
                "0.0": 769.0695,
                "50.0": 807.1287500000001,
                "90.0": 866.8805,
                "95.0": 866.8805,
                "99.0": 866.8805,
                "99.9": 866.8805,
                "99.99": 866.8805,
                "99.999": 866.8805,
                "99.9999": 866.8805,
                "100.0": 866.8805
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    828.632,
                    783.059,
                    794.2835
                ],
                [
                    866.8805,
                    769.0695,
                    819.974
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.SumAggregationBenchmark.measureOnCategoricalValuesFromCacheWithPreMaterialisation",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 764.45825,
            "scoreError": 125.39728994842385,
            "scoreConfidence": [
                639.0609600515762,
                889.8555399484238
            ],
            "scorePercentiles": {
                "0.0": 724.0745,
                "50.0": 747.793,
                "90.0": 835.215,
                "95.0": 835.215,
                "99.0": 835.215,
                "99.9": 835.215,
                "99.99": 835.215,
                "99.999": 835.215,
                "99.9999": 835.215,
                "100.0": 835.215
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    835.215,
                    749.144,
                    728.5365
                ],
                [
                    803.3375,
                    746.442,
                    724.0745
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.SumAggregationBenchmark.measureOnConsecutiveValues",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 2015.3871666666666,
            "scoreError": 137.98300064840447,
            "scoreConfidence": [
                1877.4041660182622,
                2153.3701673150713
            ],
            "scorePercentiles": {
                "0.0": 1945.168,
                "50.0": 2015.446,
                "90.0": 2084.743,
                "95.0": 2084.743,
                "99.0": 2084.743,
                "99.9": 2084.743,
                "99.99": 2084.743,
                "99.999": 2084.743,
                "99.9999": 2084.743,
                "100.0": 2084.743
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    2002.774,
                    1983.793,
                    2028.118
                ],
                [
                    1945.168,
                    2084.743,
                    2047.727
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.SumAggregationBenchmark.measureOnConsecutiveValuesFromCache",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 836.6306666666668,
            "scoreError": 69.27929092800403,
            "scoreConfidence": [
                767.3513757386628,
                905.9099575946708
            ],
            "scorePercentiles": {
                "0.0": 799.1855,
                "50.0": 839.153,
                "90.0": 869.6805,
                "95.0": 869.6805,
                "99.0": 869.6805,
                "99.9": 869.6805,
                "99.99": 869.6805,
                "99.999": 869.6805,
                "99.9999": 869.6805,
                "100.0": 869.6805
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    869.6805,
                    844.327,
                    820.6385
                ],
                [
                    799.1855,
                    833.979,
                    851.9735
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.SumAggregationBenchmark.measureOnConsecutiveValuesFromCacheWithPreMaterialisation",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 831.5790833333334,
            "scoreError": 73.24207502147058,
            "scoreConfidence": [
                758.3370083118629,
                904.821158354804
            ],
            "scorePercentiles": {
                "0.0": 796.738,
                "50.0": 830.239,
                "90.0": 877.4765,
                "95.0": 877.4765,
                "99.0": 877.4765,
                "99.9": 877.4765,
                "99.99": 877.4765,
                "99.999": 877.4765,
                "99.9999": 877.4765,
                "100.0": 877.4765
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    877.4765,
                    832.1845,
                    796.738
                ],
                [
                    831.9515,
                    828.5265,
                    822.5975
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.SumAggregationBenchmark.measureOnRandomDoubleValues",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 2328.7575,
            "scoreError": 378.0738743956164,
            "scoreConfidence": [
                1950.683625604384,
                2706.8313743956164
            ],
            "scorePercentiles": {
                "0.0": 2106.019,
                "50.0": 2342.574,
                "90.0": 2462.637,
                "95.0": 2462.637,
                "99.0": 2462.637,
                "99.9": 2462.637,
                "99.99": 2462.637,
                "99.999": 2462.637,
                "99.9999": 2462.637,
                "100.0": 2462.637
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    2106.019,
                    2358.712,
                    2257.942
                ],
                [
                    2460.799,
                    2462.637,
                    2326.436
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.SumAggregationBenchmark.measureOnRandomDoubleValuesFromCache",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 1130.663,
            "scoreError": 105.93334405219488,
            "scoreConfidence": [
                1024.7296559478052,
                1236.5963440521948
            ],
            "scorePercentiles": {
                "0.0": 1073.311,
                "50.0": 1138.855,
                "90.0": 1177.72,
                "95.0": 1177.72,
                "99.0": 1177.72,
                "99.9": 1177.72,
                "99.99": 1177.72,
                "99.999": 1177.72,
                "99.9999": 1177.72,
                "100.0": 1177.72
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    1102.439,
                    1073.311,
                    1152.798
                ],
                [
                    1177.72,
                    1149.128,
                    1128.582
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.SumAggregationBenchmark.measureOnRandomDoubleValuesFromCacheWithPreMaterialisation",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 1548.1578333333334,
            "scoreError": 183.06904877536468,
            "scoreConfidence": [
                1365.0887845579687,
                1731.2268821086982
            ],
            "scorePercentiles": {
                "0.0": 1443.363,
                "50.0": 1552.3605,
                "90.0": 1648.941,
                "95.0": 1648.941,
                "99.0": 1648.941,
                "99.9": 1648.941,
                "99.99": 1648.941,
                "99.999": 1648.941,
                "99.9999": 1648.941,
                "100.0": 1648.941
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    1551.0,
                    1443.363,
                    1648.941
                ],
                [
                    1538.143,
                    1553.779,
                    1553.721
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.SumAggregationBenchmark.measureOnRandomValues",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 2148.4575,
            "scoreError": 437.6134530607595,
            "scoreConfidence": [
                1710.8440469392403,
                2586.0709530607596
            ],
            "scorePercentiles": {
                "0.0": 1993.715,
                "50.0": 2127.6724999999997,
                "90.0": 2405.684,
                "95.0": 2405.684,
                "99.0": 2405.684,
                "99.9": 2405.684,
                "99.99": 2405.684,
                "99.999": 2405.684,
                "99.9999": 2405.684,
                "100.0": 2405.684
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    2405.684,
                    2234.738,
                    2156.689
                ],
                [
                    1993.715,
                    2001.263,
                    2098.656
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.SumAggregationBenchmark.measureOnRandomValuesFromCache",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 916.7298333333332,
            "scoreError": 26.91824137873056,
            "scoreConfidence": [
                889.8115919546026,
                943.6480747120638
            ],
            "scorePercentiles": {
                "0.0": 901.1695,
                "50.0": 918.938,
                "90.0": 927.9685,
                "95.0": 927.9685,
                "99.0": 927.9685,
                "99.9": 927.9685,
                "99.99": 927.9685,
                "99.999": 927.9685,
                "99.9999": 927.9685,
                "100.0": 927.9685
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    910.983,
                    921.9025,
                    915.9735
                ],
                [
                    927.9685,
                    901.1695,
                    922.382
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.aggregations.numerical.SumAggregationBenchmark.measureOnRandomValuesFromCacheWithPreMaterialisation",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 3,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 1161.4598333333333,
            "scoreError": 177.76047971727252,
            "scoreConfidence": [
                983.6993536160608,
                1339.220313050606
            ],
            "scorePercentiles": {
                "0.0": 1107.702,
                "50.0": 1129.0484999999999,
                "90.0": 1271.293,
                "95.0": 1271.293,
                "99.0": 1271.293,
                "99.9": 1271.293,
                "99.99": 1271.293,
                "99.999": 1271.293,
                "99.9999": 1271.293,
                "100.0": 1271.293
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    1107.702,
                    1129.983,
                    1128.114
                ],
                [
                    1271.293,
                    1127.117,
                    1204.55
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
]
