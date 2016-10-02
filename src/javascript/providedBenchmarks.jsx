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
            "score": 198.95789444444446,
            "scoreError": 7.461618254794213,
            "scoreConfidence": [
                191.49627618965025,
                206.41951269923868
            ],
            "scorePercentiles": {
                "0.0": 195.95916666666668,
                "50.0": 198.83916666666667,
                "90.0": 202.06583333333333,
                "95.0": 202.06583333333333,
                "99.0": 202.06583333333333,
                "99.9": 202.06583333333333,
                "99.99": 202.06583333333333,
                "99.999": 202.06583333333333,
                "99.9999": 202.06583333333333,
                "100.0": 202.06583333333333
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    202.06583333333333,
                    195.95916666666668,
                    196.16783333333333
                ],
                [
                    201.8762,
                    199.29783333333333,
                    198.3805
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
            "score": 376.90543055555554,
            "scoreError": 283.458461354602,
            "scoreConfidence": [
                93.44696920095356,
                660.3638919101575
            ],
            "scorePercentiles": {
                "0.0": 273.70775,
                "50.0": 343.90120833333333,
                "90.0": 517.9185,
                "95.0": 517.9185,
                "99.0": 517.9185,
                "99.9": 517.9185,
                "99.99": 517.9185,
                "99.999": 517.9185,
                "99.9999": 517.9185,
                "100.0": 517.9185
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    296.69025,
                    517.9185,
                    334.1526666666667
                ],
                [
                    353.64975,
                    273.70775,
                    485.3136666666667
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
            "score": 273.14680555555555,
            "scoreError": 185.8291208464103,
            "scoreConfidence": [
                87.31768470914525,
                458.9759264019658
            ],
            "scorePercentiles": {
                "0.0": 223.367,
                "50.0": 251.38400000000001,
                "90.0": 399.2303333333333,
                "95.0": 399.2303333333333,
                "99.0": 399.2303333333333,
                "99.9": 399.2303333333333,
                "99.99": 399.2303333333333,
                "99.999": 399.2303333333333,
                "99.9999": 399.2303333333333,
                "100.0": 399.2303333333333
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    399.2303333333333,
                    283.9785,
                    229.537
                ],
                [
                    223.367,
                    233.833,
                    268.935
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
            "score": 290.8811527777778,
            "scoreError": 204.36544452664444,
            "scoreConfidence": [
                86.51570825113336,
                495.24659730442227
            ],
            "scorePercentiles": {
                "0.0": 217.6676,
                "50.0": 276.812125,
                "90.0": 395.0126666666667,
                "95.0": 395.0126666666667,
                "99.0": 395.0126666666667,
                "99.9": 395.0126666666667,
                "99.99": 395.0126666666667,
                "99.999": 395.0126666666667,
                "99.9999": 395.0126666666667,
                "100.0": 395.0126666666667
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    267.32275,
                    286.3015,
                    359.395
                ],
                [
                    395.0126666666667,
                    219.5874,
                    217.6676
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
            "score": 275.5317527777778,
            "scoreError": 149.62018923609628,
            "scoreConfidence": [
                125.91156354168152,
                425.1519420138741
            ],
            "scorePercentiles": {
                "0.0": 229.8648,
                "50.0": 257.379225,
                "90.0": 357.41566666666665,
                "95.0": 357.41566666666665,
                "99.0": 357.41566666666665,
                "99.9": 357.41566666666665,
                "99.99": 357.41566666666665,
                "99.999": 357.41566666666665,
                "99.9999": 357.41566666666665,
                "100.0": 357.41566666666665
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    229.8648,
                    318.91,
                    357.41566666666665
                ],
                [
                    280.06325,
                    234.6952,
                    232.2416
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
            "score": 242.55515000000003,
            "scoreError": 38.75824471046293,
            "scoreConfidence": [
                203.7969052895371,
                281.31339471046294
            ],
            "scorePercentiles": {
                "0.0": 229.0918,
                "50.0": 236.25830000000002,
                "90.0": 265.03275,
                "95.0": 265.03275,
                "99.0": 265.03275,
                "99.9": 265.03275,
                "99.99": 265.03275,
                "99.999": 265.03275,
                "99.9999": 265.03275,
                "100.0": 265.03275
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    265.03275,
                    253.89475,
                    229.0918
                ],
                [
                    235.726,
                    234.795,
                    236.7906
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
            "score": 302.96397222222225,
            "scoreError": 136.59850099799905,
            "scoreConfidence": [
                166.3654712242232,
                439.5624732202213
            ],
            "scorePercentiles": {
                "0.0": 261.9075,
                "50.0": 285.171375,
                "90.0": 366.1046666666667,
                "95.0": 366.1046666666667,
                "99.0": 366.1046666666667,
                "99.9": 366.1046666666667,
                "99.99": 366.1046666666667,
                "99.999": 366.1046666666667,
                "99.9999": 366.1046666666667,
                "100.0": 366.1046666666667
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    262.29725,
                    263.13725,
                    261.9075
                ],
                [
                    357.13166666666666,
                    366.1046666666667,
                    307.2055
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
            "score": 311.1648333333333,
            "scoreError": 42.984906909410164,
            "scoreConfidence": [
                268.1799264239232,
                354.14974024274346
            ],
            "scorePercentiles": {
                "0.0": 301.48625,
                "50.0": 304.672,
                "90.0": 341.729,
                "95.0": 341.729,
                "99.0": 341.729,
                "99.9": 341.729,
                "99.99": 341.729,
                "99.999": 341.729,
                "99.9999": 341.729,
                "100.0": 341.729
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    301.48625,
                    311.11225,
                    341.729
                ],
                [
                    305.422,
                    303.3175,
                    303.922
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
            "score": 327.2677916666666,
            "scoreError": 132.12265300883115,
            "scoreConfidence": [
                195.14513865783545,
                459.39044467549775
            ],
            "scorePercentiles": {
                "0.0": 301.9435,
                "50.0": 309.8615,
                "90.0": 423.161,
                "95.0": 423.161,
                "99.0": 423.161,
                "99.9": 423.161,
                "99.99": 423.161,
                "99.999": 423.161,
                "99.9999": 423.161,
                "100.0": 423.161
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    423.161,
                    312.32075,
                    301.9435
                ],
                [
                    306.4585,
                    310.3415,
                    309.3815
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
            "score": 224.64723333333333,
            "scoreError": 110.93133859475026,
            "scoreConfidence": [
                113.71589473858307,
                335.5785719280836
            ],
            "scorePercentiles": {
                "0.0": 191.50816666666665,
                "50.0": 207.16645,
                "90.0": 278.738,
                "95.0": 278.738,
                "99.0": 278.738,
                "99.9": 278.738,
                "99.99": 278.738,
                "99.999": 278.738,
                "99.9999": 278.738,
                "100.0": 278.738
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    278.738,
                    269.8955,
                    191.50816666666665
                ],
                [
                    198.0495,
                    193.40883333333332,
                    216.2834
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
            "score": 242.36338333333333,
            "scoreError": 78.48250353836514,
            "scoreConfidence": [
                163.8808797949682,
                320.84588687169844
            ],
            "scorePercentiles": {
                "0.0": 217.6856,
                "50.0": 233.1116,
                "90.0": 278.845,
                "95.0": 278.845,
                "99.0": 278.845,
                "99.9": 278.845,
                "99.99": 278.845,
                "99.999": 278.845,
                "99.9999": 278.845,
                "100.0": 278.845
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    246.8756,
                    217.6856,
                    219.3476
                ],
                [
                    219.217,
                    278.845,
                    272.2095
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
            "score": 213.37189999999998,
            "scoreError": 10.00704177890948,
            "scoreConfidence": [
                203.36485822109051,
                223.37894177890945
            ],
            "scorePercentiles": {
                "0.0": 206.2432,
                "50.0": 214.6821,
                "90.0": 215.8524,
                "95.0": 215.8524,
                "99.0": 215.8524,
                "99.9": 215.8524,
                "99.99": 215.8524,
                "99.999": 215.8524,
                "99.9999": 215.8524,
                "100.0": 215.8524
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    215.1646,
                    214.7072,
                    206.2432
                ],
                [
                    213.607,
                    215.8524,
                    214.657
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
            "score": 207.78167222222226,
            "scoreError": 91.67757846632422,
            "scoreConfidence": [
                116.10409375589803,
                299.4592506885465
            ],
            "scorePercentiles": {
                "0.0": 187.38233333333332,
                "50.0": 192.11475000000002,
                "90.0": 271.554,
                "95.0": 271.554,
                "99.0": 271.554,
                "99.9": 271.554,
                "99.99": 271.554,
                "99.999": 271.554,
                "99.9999": 271.554,
                "100.0": 271.554
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    193.362,
                    190.8675,
                    187.38233333333332
                ],
                [
                    213.9002,
                    271.554,
                    189.624
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
            "score": 231.53351666666666,
            "scoreError": 82.36328322590275,
            "scoreConfidence": [
                149.17023344076392,
                313.8967998925694
            ],
            "scorePercentiles": {
                "0.0": 213.2374,
                "50.0": 220.8527,
                "90.0": 290.4575,
                "95.0": 290.4575,
                "99.0": 290.4575,
                "99.9": 290.4575,
                "99.99": 290.4575,
                "99.999": 290.4575,
                "99.9999": 290.4575,
                "100.0": 290.4575
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    213.2374,
                    218.0186,
                    228.0986
                ],
                [
                    290.4575,
                    223.6868,
                    215.7022
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
            "score": 218.2503,
            "scoreError": 23.951959809226317,
            "scoreConfidence": [
                194.2983401907737,
                242.20225980922632
            ],
            "scorePercentiles": {
                "0.0": 212.2814,
                "50.0": 215.2989,
                "90.0": 235.1264,
                "95.0": 235.1264,
                "99.0": 235.1264,
                "99.9": 235.1264,
                "99.99": 235.1264,
                "99.999": 235.1264,
                "99.9999": 235.1264,
                "100.0": 235.1264
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    218.1476,
                    216.5024,
                    235.1264
                ],
                [
                    214.0954,
                    212.2814,
                    213.3486
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
            "score": 202.3501527777778,
            "scoreError": 73.358290809186,
            "scoreConfidence": [
                128.9918619685918,
                275.70844358696377
            ],
            "scorePercentiles": {
                "0.0": 188.91566666666668,
                "50.0": 192.00966666666665,
                "90.0": 255.58875,
                "95.0": 255.58875,
                "99.0": 255.58875,
                "99.9": 255.58875,
                "99.99": 255.58875,
                "99.999": 255.58875,
                "99.9999": 255.58875,
                "100.0": 255.58875
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    192.78833333333333,
                    190.66083333333333,
                    188.91566666666668
                ],
                [
                    194.91633333333334,
                    191.231,
                    255.58875
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
            "score": 236.16235000000003,
            "scoreError": 84.28858696098956,
            "scoreConfidence": [
                151.87376303901047,
                320.45093696098957
            ],
            "scorePercentiles": {
                "0.0": 217.3928,
                "50.0": 227.2391,
                "90.0": 296.8995,
                "95.0": 296.8995,
                "99.0": 296.8995,
                "99.9": 296.8995,
                "99.99": 296.8995,
                "99.999": 296.8995,
                "99.9999": 296.8995,
                "100.0": 296.8995
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    220.5026,
                    227.701,
                    227.0328
                ],
                [
                    227.4454,
                    217.3928,
                    296.8995
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
            "score": 256.2903944444444,
            "scoreError": 148.08855303188773,
            "scoreConfidence": [
                108.20184141255669,
                404.37894747633214
            ],
            "scorePercentiles": {
                "0.0": 212.6492,
                "50.0": 235.070925,
                "90.0": 333.95466666666664,
                "95.0": 333.95466666666664,
                "99.0": 333.95466666666664,
                "99.9": 333.95466666666664,
                "99.99": 333.95466666666664,
                "99.999": 333.95466666666664,
                "99.9999": 333.95466666666664,
                "100.0": 333.95466666666664
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    333.95466666666664,
                    254.28725,
                    307.04725
                ],
                [
                    213.9494,
                    215.8546,
                    212.6492
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.filter.FilterOnLongColumnBenchmark.measureRangeQueryOnCategoricalVal",
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
            "score": 99.91443518518518,
            "scoreError": 44.80132911472309,
            "scoreConfidence": [
                55.113106070462095,
                144.71576429990827
            ],
            "scorePercentiles": {
                "0.0": 84.91658333333334,
                "50.0": 99.22079166666666,
                "90.0": 117.55822222222223,
                "95.0": 117.55822222222223,
                "99.0": 117.55822222222223,
                "99.9": 117.55822222222223,
                "99.99": 117.55822222222223,
                "99.999": 117.55822222222223,
                "99.9999": 117.55822222222223,
                "100.0": 117.55822222222223
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    85.54933333333334,
                    84.91658333333334,
                    85.78725
                ],
                [
                    117.55822222222223,
                    112.65433333333333,
                    113.02088888888889
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.filter.FilterOnLongColumnBenchmark.measureRangeQueryOnId",
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
            "score": 70.72083777472527,
            "scoreError": 19.824953975966476,
            "scoreConfidence": [
                50.89588379875879,
                90.54579175069175
            ],
            "scorePercentiles": {
                "0.0": 63.036875,
                "50.0": 68.1734,
                "90.0": 82.48892307692307,
                "95.0": 82.48892307692307,
                "99.0": 82.48892307692307,
                "99.9": 82.48892307692307,
                "99.99": 82.48892307692307,
                "99.999": 82.48892307692307,
                "99.9999": 82.48892307692307,
                "100.0": 82.48892307692307
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    68.3154,
                    68.0314,
                    66.819
                ],
                [
                    82.48892307692307,
                    75.63342857142857,
                    63.036875
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.filter.FilterOnLongColumnBenchmark.measureRangeQueryOnRandomVal",
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
            "score": 290.4709361111111,
            "scoreError": 171.89039104378824,
            "scoreConfidence": [
                118.58054506732284,
                462.3613271548993
            ],
            "scorePercentiles": {
                "0.0": 222.6616,
                "50.0": 295.234875,
                "90.0": 366.3453333333333,
                "95.0": 366.3453333333333,
                "99.0": 366.3453333333333,
                "99.9": 366.3453333333333,
                "99.99": 366.3453333333333,
                "99.999": 366.3453333333333,
                "99.9999": 366.3453333333333,
                "100.0": 366.3453333333333
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    366.3453333333333,
                    321.14275,
                    340.36633333333333
                ],
                [
                    222.6616,
                    269.327,
                    222.9826
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.filter.FilterOnStringColumnBenchmark.measureFilterQueryOnCategoricalString",
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
            "score": 1.5889284798631438,
            "scoreError": 0.21343741243276002,
            "scoreConfidence": [
                1.3754910674303837,
                1.8023658922959038
            ],
            "scorePercentiles": {
                "0.0": 1.4659766423357665,
                "50.0": 1.5992448877818175,
                "90.0": 1.664,
                "95.0": 1.664,
                "99.0": 1.664,
                "99.9": 1.664,
                "99.99": 1.664,
                "99.999": 1.664,
                "99.9999": 1.664,
                "100.0": 1.664
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    1.664,
                    1.6571090909090909,
                    1.6281993517017828
                ],
                [
                    1.5479953703703704,
                    1.5702904238618525,
                    1.4659766423357665
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.filter.FilterOnTokenizedStringColumnBenchmark.measureFilterQueryOnCategoricalString",
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
            "score": 108123.59266666666,
            "scoreError": 55747.11786574146,
            "scoreConfidence": [
                52376.47480092521,
                163870.71053240812
            ],
            "scorePercentiles": {
                "0.0": 90594.933,
                "50.0": 99157.5965,
                "90.0": 140740.35,
                "95.0": 140740.35,
                "99.0": 140740.35,
                "99.9": 140740.35,
                "99.99": 140740.35,
                "99.999": 140740.35,
                "99.9999": 140740.35,
                "100.0": 140740.35
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    102590.173,
                    140740.35,
                    123977.621
                ],
                [
                    95113.459,
                    95725.02,
                    90594.933
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.elasticsearch.benchmarks.filter.FilterOnTokenizedStringColumnBenchmark.measureFilterQueryOnConsecutiveString",
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
            "score": 178.52916666666667,
            "scoreError": 137.76791532162278,
            "scoreConfidence": [
                40.76125134504389,
                316.29708198828945
            ],
            "scorePercentiles": {
                "0.0": 143.17285714285714,
                "50.0": 152.03071428571428,
                "90.0": 257.341,
                "95.0": 257.341,
                "99.0": 257.341,
                "99.9": 257.341,
                "99.99": 257.341,
                "99.999": 257.341,
                "99.9999": 257.341,
                "100.0": 257.341
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    146.73328571428573,
                    157.32814285714286,
                    257.341
                ],
                [
                    222.677,
                    143.92271428571428,
                    143.17285714285714
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.parquetreader.benchmarks.GzipDecompressorProviderBenchmark.fopPooling_Gzip",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 10,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 674.0827,
            "scoreError": 31.65604579972627,
            "scoreConfidence": [
                642.4266542002738,
                705.7387457997263
            ],
            "scorePercentiles": {
                "0.0": 621.526,
                "50.0": 667.807,
                "90.0": 747.14005,
                "95.0": 754.93715,
                "99.0": 755.213,
                "99.9": 755.213,
                "99.99": 755.213,
                "99.999": 755.213,
                "99.9999": 755.213,
                "100.0": 755.213
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    677.737,
                    669.2895,
                    663.3135,
                    663.7085,
                    667.968,
                    667.646,
                    706.496,
                    624.7525,
                    625.4855,
                    621.526
                ],
                [
                    666.023,
                    749.696,
                    683.517,
                    668.3115,
                    658.807,
                    755.213,
                    724.1365,
                    658.9935,
                    646.246,
                    682.788
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.parquetreader.benchmarks.GzipDecompressorProviderBenchmark.hadoopPooling_Gzip",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 10,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 665.846325,
            "scoreError": 34.93831230156914,
            "scoreConfidence": [
                630.9080126984309,
                700.7846373015691
            ],
            "scorePercentiles": {
                "0.0": 611.104,
                "50.0": 654.698,
                "90.0": 748.8653999999999,
                "95.0": 755.707575,
                "99.0": 755.816,
                "99.9": 755.816,
                "99.99": 755.816,
                "99.999": 755.816,
                "99.9999": 755.816,
                "100.0": 755.816
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    664.038,
                    755.816,
                    679.6595,
                    648.2255,
                    640.9295,
                    705.8265,
                    654.319,
                    675.645,
                    611.104,
                    613.6715
                ],
                [
                    653.7045,
                    753.6475,
                    655.077,
                    653.549,
                    642.1405,
                    703.6885,
                    657.0775,
                    692.641,
                    638.7475,
                    617.419
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.parquetreader.benchmarks.GzipDecompressorProviderBenchmark.noPooling_Gzip",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 10,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 680.14275,
            "scoreError": 41.00008627033973,
            "scoreConfidence": [
                639.1426637296603,
                721.1428362703397
            ],
            "scorePercentiles": {
                "0.0": 624.545,
                "50.0": 664.6134999999999,
                "90.0": 761.5672999999999,
                "95.0": 811.851425,
                "99.0": 814.383,
                "99.9": 814.383,
                "99.99": 814.383,
                "99.999": 814.383,
                "99.9999": 814.383,
                "100.0": 814.383
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    664.2035,
                    763.7515,
                    665.45,
                    659.541,
                    659.387,
                    726.305,
                    668.0115,
                    650.3385,
                    624.545,
                    637.1805
                ],
                [
                    687.597,
                    814.383,
                    676.4405,
                    649.4185,
                    663.556,
                    741.9095,
                    689.1085,
                    663.912,
                    665.0235,
                    632.793
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.parquetreader.benchmarks.ReadCompleteFileWithCategoricalsBenchmark.baselineOriginalReader",
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
            "score": 1296.7051666666666,
            "scoreError": 58.45310277629589,
            "scoreConfidence": [
                1238.2520638903707,
                1355.1582694429626
            ],
            "scorePercentiles": {
                "0.0": 1264.843,
                "50.0": 1303.8220000000001,
                "90.0": 1314.412,
                "95.0": 1314.412,
                "99.0": 1314.412,
                "99.9": 1314.412,
                "99.99": 1314.412,
                "99.999": 1314.412,
                "99.9999": 1314.412,
                "100.0": 1314.412
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    1311.574,
                    1314.306,
                    1314.412
                ],
                [
                    1296.07,
                    1279.026,
                    1264.843
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.parquetreader.benchmarks.ReadCompleteFileWithCategoricalsBenchmark.measureColumnarReader",
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
            "score": 318.55575,
            "scoreError": 16.5689013605727,
            "scoreConfidence": [
                301.9868486394273,
                335.12465136057267
            ],
            "scorePercentiles": {
                "0.0": 311.91175,
                "50.0": 317.76824999999997,
                "90.0": 327.1245,
                "95.0": 327.1245,
                "99.0": 327.1245,
                "99.9": 327.1245,
                "99.99": 327.1245,
                "99.999": 327.1245,
                "99.9999": 327.1245,
                "100.0": 327.1245
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    327.1245,
                    313.28275,
                    311.91175
                ],
                [
                    323.479,
                    319.13025,
                    316.40625
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.parquetreader.benchmarks.ReadCompleteFileWithCategoricalsBenchmark.measureRowReader",
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
            "score": 805.3369166666668,
            "scoreError": 28.675827414128186,
            "scoreConfidence": [
                776.6610892525385,
                834.012744080795
            ],
            "scorePercentiles": {
                "0.0": 789.0805,
                "50.0": 806.21625,
                "90.0": 815.604,
                "95.0": 815.604,
                "99.0": 815.604,
                "99.9": 815.604,
                "99.99": 815.604,
                "99.999": 815.604,
                "99.9999": 815.604,
                "100.0": 815.604
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    811.11,
                    814.3365,
                    815.604
                ],
                [
                    800.568,
                    789.0805,
                    801.3225
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.parquetreader.benchmarks.ReadCompleteFileWithCompressionBenchmark.baselineOriginalReader_Gzip",
        "mode": "avgt",
        "threads": 1,
        "forks": 3,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 10,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 32929.00526666667,
            "scoreError": 112036.796054804,
            "scoreConfidence": [
                -79107.79078813732,
                144965.80132147067
            ],
            "scorePercentiles": {
                "0.0": 2139.143,
                "50.0": 2192.691,
                "90.0": 2914.2817999999997,
                "95.0": 416508.9785499993,
                "99.0": 920794.617,
                "99.9": 920794.617,
                "99.99": 920794.617,
                "99.999": 920794.617,
                "99.9999": 920794.617,
                "100.0": 920794.617
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    2243.744,
                    2228.916,
                    2217.553,
                    2203.584,
                    2235.33,
                    2184.727,
                    2177.207,
                    2171.64,
                    2223.925,
                    2223.537
                ],
                [
                    2181.346,
                    2172.215,
                    2192.659,
                    2192.723,
                    2158.851,
                    2154.072,
                    2181.237,
                    2217.092,
                    2152.627,
                    2157.406
                ],
                [
                    2139.143,
                    2170.759,
                    2174.839,
                    2161.178,
                    920794.617,
                    2925.04,
                    3911.638,
                    2817.458,
                    2426.619,
                    2478.476
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.parquetreader.benchmarks.ReadCompleteFileWithCompressionBenchmark.baselineOriginalReader_Snappy",
        "mode": "avgt",
        "threads": 1,
        "forks": 3,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 10,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 2750.570666666667,
            "scoreError": 383.550368433319,
            "scoreConfidence": [
                2367.020298233348,
                3134.121035099986
            ],
            "scorePercentiles": {
                "0.0": 2160.64,
                "50.0": 2549.4815,
                "90.0": 3787.1540999999997,
                "95.0": 4081.8819,
                "99.0": 4082.719,
                "99.9": 4082.719,
                "99.99": 4082.719,
                "99.999": 4082.719,
                "99.9999": 4082.719,
                "100.0": 4082.719
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    3193.258,
                    2779.722,
                    3163.073,
                    2768.42,
                    2996.128,
                    2538.627,
                    2625.251,
                    2739.724,
                    2317.635,
                    2318.583
                ],
                [
                    2267.04,
                    2560.336,
                    2504.7,
                    2302.762,
                    2312.395,
                    2265.471,
                    2429.646,
                    2244.821,
                    2251.41,
                    2725.452
                ],
                [
                    3579.165,
                    4082.719,
                    3376.559,
                    4081.197,
                    3295.495,
                    3810.264,
                    2475.111,
                    2160.64,
                    2175.997,
                    2175.519
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.parquetreader.benchmarks.ReadCompleteFileWithCompressionBenchmark.baselineOriginalReader_Uncompressed",
        "mode": "avgt",
        "threads": 1,
        "forks": 3,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 10,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 2005.5636333333334,
            "scoreError": 24.334590553031347,
            "scoreConfidence": [
                1981.229042780302,
                2029.8982238863648
            ],
            "scorePercentiles": {
                "0.0": 1963.324,
                "50.0": 1992.4245,
                "90.0": 2045.2817,
                "95.0": 2105.9469,
                "99.0": 2147.561,
                "99.9": 2147.561,
                "99.99": 2147.561,
                "99.999": 2147.561,
                "99.9999": 2147.561,
                "100.0": 2147.561
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    1963.324,
                    2046.378,
                    2035.415,
                    1999.195,
                    2071.899,
                    1976.554,
                    1991.02,
                    1979.275,
                    2023.215,
                    2031.938
                ],
                [
                    1977.575,
                    1987.551,
                    1990.762,
                    1991.818,
                    1983.163,
                    2147.561,
                    2024.059,
                    1982.339,
                    2026.392,
                    1979.589
                ],
                [
                    1977.268,
                    1986.357,
                    2007.511,
                    1998.319,
                    2015.383,
                    1993.031,
                    2009.256,
                    2009.49,
                    1977.74,
                    1983.532
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.parquetreader.benchmarks.ReadCompleteFileWithCompressionBenchmark.measureColumnarReader_Gzip",
        "mode": "avgt",
        "threads": 1,
        "forks": 3,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 10,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 674.7984000000001,
            "scoreError": 19.65073286559924,
            "scoreConfidence": [
                655.1476671344009,
                694.4491328655994
            ],
            "scorePercentiles": {
                "0.0": 633.8795,
                "50.0": 661.87075,
                "90.0": 712.8808,
                "95.0": 729.40545,
                "99.0": 746.8685,
                "99.9": 746.8685,
                "99.99": 746.8685,
                "99.999": 746.8685,
                "99.9999": 746.8685,
                "100.0": 746.8685
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    699.015,
                    712.9755,
                    677.8035,
                    656.4205,
                    656.9495,
                    649.8345,
                    645.7785,
                    652.691,
                    638.4665,
                    648.7825
                ],
                [
                    708.3835,
                    712.0285,
                    708.66,
                    715.1175,
                    680.687,
                    652.246,
                    633.8795,
                    643.1895,
                    655.31,
                    658.4185
                ],
                [
                    710.727,
                    746.8685,
                    698.421,
                    657.683,
                    665.323,
                    658.151,
                    642.523,
                    690.9845,
                    691.203,
                    675.431
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.parquetreader.benchmarks.ReadCompleteFileWithCompressionBenchmark.measureColumnarReader_Snappy",
        "mode": "avgt",
        "threads": 1,
        "forks": 3,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 10,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 552.6322166666667,
            "scoreError": 26.96414182585665,
            "scoreConfidence": [
                525.66807484081,
                579.5963584925234
            ],
            "scorePercentiles": {
                "0.0": 514.352,
                "50.0": 533.9680000000001,
                "90.0": 605.96405,
                "95.0": 656.3553499999999,
                "99.0": 678.731,
                "99.9": 678.731,
                "99.99": 678.731,
                "99.999": 678.731,
                "99.9999": 678.731,
                "100.0": 678.731
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    678.731,
                    584.703,
                    606.086,
                    526.678,
                    528.2865,
                    520.582,
                    528.2235,
                    539.7865,
                    526.9045,
                    525.679
                ],
                [
                    638.048,
                    582.3005,
                    604.8665,
                    517.7455,
                    516.8275,
                    532.734,
                    520.116,
                    532.0175,
                    532.2635,
                    539.5705
                ],
                [
                    598.379,
                    558.3375,
                    588.945,
                    557.805,
                    548.513,
                    514.352,
                    551.213,
                    535.202,
                    524.02,
                    520.0505
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.parquetreader.benchmarks.ReadCompleteFileWithCompressionBenchmark.measureColumnarReader_Uncompressed",
        "mode": "avgt",
        "threads": 1,
        "forks": 3,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 10,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 398.1612555555556,
            "scoreError": 5.043255026360406,
            "scoreConfidence": [
                393.1180005291952,
                403.204510581916
            ],
            "scorePercentiles": {
                "0.0": 383.1533333333333,
                "50.0": 397.531,
                "90.0": 408.80539999999996,
                "95.0": 411.48836666666665,
                "99.0": 411.66766666666666,
                "99.9": 411.66766666666666,
                "99.99": 411.66766666666666,
                "99.999": 411.66766666666666,
                "99.9999": 411.66766666666666,
                "100.0": 411.66766666666666
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    404.6603333333333,
                    397.12666666666667,
                    391.017,
                    407.77566666666667,
                    408.8673333333333,
                    389.29766666666666,
                    411.66766666666666,
                    394.31466666666665,
                    391.36066666666665,
                    397.93533333333335
                ],
                [
                    399.18233333333336,
                    400.705,
                    396.438,
                    408.24066666666664,
                    398.9243333333333,
                    393.531,
                    408.248,
                    399.53333333333336,
                    398.969,
                    393.79966666666667
                ],
                [
                    401.16866666666664,
                    411.34166666666664,
                    405.15233333333333,
                    383.1533333333333,
                    390.4456666666667,
                    396.457,
                    393.52933333333334,
                    396.723,
                    385.747,
                    389.5253333333333
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.parquetreader.benchmarks.ReadCompleteFileWithCompressionBenchmark.measureRowReader_Gzip",
        "mode": "avgt",
        "threads": 1,
        "forks": 3,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 10,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 1735.6499333333334,
            "scoreError": 27.437705288900524,
            "scoreConfidence": [
                1708.2122280444328,
                1763.087638622234
            ],
            "scorePercentiles": {
                "0.0": 1693.491,
                "50.0": 1726.3075,
                "90.0": 1816.9806,
                "95.0": 1847.8443,
                "99.0": 1861.184,
                "99.9": 1861.184,
                "99.99": 1861.184,
                "99.999": 1861.184,
                "99.9999": 1861.184,
                "100.0": 1861.184
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    1861.184,
                    1707.482,
                    1708.993,
                    1711.404,
                    1749.99,
                    1714.201,
                    1726.117,
                    1710.049,
                    1693.491,
                    1726.386
                ],
                [
                    1730.333,
                    1733.3,
                    1705.768,
                    1726.312,
                    1796.826,
                    1736.648,
                    1819.22,
                    1741.012,
                    1734.007,
                    1697.607
                ],
                [
                    1746.797,
                    1706.674,
                    1696.307,
                    1705.751,
                    1836.93,
                    1751.944,
                    1719.396,
                    1728.779,
                    1720.287,
                    1726.303
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.parquetreader.benchmarks.ReadCompleteFileWithCompressionBenchmark.measureRowReader_Snappy",
        "mode": "avgt",
        "threads": 1,
        "forks": 3,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 10,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 1625.2453333333333,
            "scoreError": 22.505406544218733,
            "scoreConfidence": [
                1602.7399267891146,
                1647.750739877552
            ],
            "scorePercentiles": {
                "0.0": 1580.279,
                "50.0": 1616.21,
                "90.0": 1682.5819,
                "95.0": 1712.8814499999999,
                "99.0": 1726.995,
                "99.9": 1726.995,
                "99.99": 1726.995,
                "99.999": 1726.995,
                "99.9999": 1726.995,
                "100.0": 1726.995
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    1701.334,
                    1618.859,
                    1614.14,
                    1612.022,
                    1609.94,
                    1597.755,
                    1583.21,
                    1590.883,
                    1616.127,
                    1610.955
                ],
                [
                    1626.572,
                    1607.862,
                    1637.267,
                    1624.907,
                    1651.142,
                    1632.68,
                    1616.293,
                    1662.907,
                    1726.995,
                    1623.968
                ],
                [
                    1599.051,
                    1625.541,
                    1661.622,
                    1595.925,
                    1602.218,
                    1614.716,
                    1684.768,
                    1580.279,
                    1623.284,
                    1604.138
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.parquetreader.benchmarks.ReadCompleteFileWithCompressionBenchmark.measureRowReader_Uncompressed",
        "mode": "avgt",
        "threads": 1,
        "forks": 3,
        "warmupIterations": 3,
        "warmupTime": "3 s",
        "warmupBatchSize": 1,
        "measurementIterations": 10,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 1484.163,
            "scoreError": 15.552694122839805,
            "scoreConfidence": [
                1468.6103058771603,
                1499.7156941228397
            ],
            "scorePercentiles": {
                "0.0": 1453.748,
                "50.0": 1479.862,
                "90.0": 1511.8169,
                "95.0": 1545.19975,
                "99.0": 1576.58,
                "99.9": 1576.58,
                "99.99": 1576.58,
                "99.999": 1576.58,
                "99.9999": 1576.58,
                "100.0": 1576.58
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    1576.58,
                    1475.327,
                    1456.079,
                    1473.779,
                    1473.052,
                    1465.652,
                    1479.013,
                    1484.77,
                    1487.3,
                    1472.959
                ],
                [
                    1462.959,
                    1509.809,
                    1472.564,
                    1474.336,
                    1519.525,
                    1482.154,
                    1499.499,
                    1482.788,
                    1478.267,
                    1485.863
                ],
                [
                    1494.092,
                    1480.711,
                    1469.196,
                    1488.297,
                    1494.683,
                    1512.04,
                    1466.685,
                    1468.889,
                    1453.748,
                    1484.274
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.parquetreader.benchmarks.ReadCompleteFileWithUniquesBenchmark.baselineOriginalReader",
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
            "score": 1307.765,
            "scoreError": 43.71265369688119,
            "scoreConfidence": [
                1264.0523463031188,
                1351.4776536968814
            ],
            "scorePercentiles": {
                "0.0": 1282.287,
                "50.0": 1309.5900000000001,
                "90.0": 1326.349,
                "95.0": 1326.349,
                "99.0": 1326.349,
                "99.9": 1326.349,
                "99.99": 1326.349,
                "99.999": 1326.349,
                "99.9999": 1326.349,
                "100.0": 1326.349
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    1301.947,
                    1316.827,
                    1282.287
                ],
                [
                    1326.349,
                    1316.585,
                    1302.595
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.parquetreader.benchmarks.ReadCompleteFileWithUniquesBenchmark.measureColumnarReader",
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
            "score": 228.15533333333337,
            "scoreError": 19.62066883084173,
            "scoreConfidence": [
                208.53466450249164,
                247.7760021641751
            ],
            "scorePercentiles": {
                "0.0": 221.0124,
                "50.0": 227.14839999999998,
                "90.0": 239.8192,
                "95.0": 239.8192,
                "99.0": 239.8192,
                "99.9": 239.8192,
                "99.99": 239.8192,
                "99.999": 239.8192,
                "99.9999": 239.8192,
                "100.0": 239.8192
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    230.0564,
                    221.0124,
                    224.2404
                ],
                [
                    239.8192,
                    231.1228,
                    222.6808
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.parquetreader.benchmarks.ReadCompleteFileWithUniquesBenchmark.measureRowReader",
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
            "score": 1058.9191666666668,
            "scoreError": 26.195547328226695,
            "scoreConfidence": [
                1032.7236193384401,
                1085.1147139948935
            ],
            "scorePercentiles": {
                "0.0": 1047.318,
                "50.0": 1055.819,
                "90.0": 1072.747,
                "95.0": 1072.747,
                "99.0": 1072.747,
                "99.9": 1072.747,
                "99.99": 1072.747,
                "99.999": 1072.747,
                "99.9999": 1072.747,
                "100.0": 1072.747
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    1056.288,
                    1055.35,
                    1054.465
                ],
                [
                    1067.347,
                    1072.747,
                    1047.318
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.parquetreader.benchmarks.SnappyDecompressorProviderBenchmark.fopPooling_Gzip",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 10,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 580.6019749999999,
            "scoreError": 40.001771425287416,
            "scoreConfidence": [
                540.6002035747125,
                620.6037464252873
            ],
            "scorePercentiles": {
                "0.0": 520.094,
                "50.0": 575.11925,
                "90.0": 652.0672000000001,
                "95.0": 693.7918,
                "99.0": 695.9755,
                "99.9": 695.9755,
                "99.99": 695.9755,
                "99.999": 695.9755,
                "99.9999": 695.9755,
                "100.0": 695.9755
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    575.054,
                    559.2495,
                    649.9585,
                    631.8295,
                    584.071,
                    552.9895,
                    578.492,
                    573.2635,
                    531.139,
                    520.094
                ],
                [
                    580.5385,
                    695.9755,
                    575.1845,
                    563.7705,
                    552.4015,
                    652.3015,
                    577.4725,
                    601.461,
                    529.466,
                    527.3275
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.parquetreader.benchmarks.SnappyDecompressorProviderBenchmark.hadoopPooling_Gzip",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 10,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 584.801975,
            "scoreError": 39.286573723561936,
            "scoreConfidence": [
                545.5154012764381,
                624.0885487235619
            ],
            "scorePercentiles": {
                "0.0": 529.6685,
                "50.0": 570.6722500000001,
                "90.0": 681.23875,
                "95.0": 701.992175,
                "99.0": 702.799,
                "99.9": 702.799,
                "99.99": 702.799,
                "99.999": 702.799,
                "99.9999": 702.799,
                "100.0": 702.799
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    584.3825,
                    702.799,
                    567.202,
                    578.681,
                    556.9405,
                    628.9525,
                    562.5065,
                    589.621,
                    529.6685,
                    535.9845
                ],
                [
                    581.884,
                    686.6625,
                    565.5675,
                    573.904,
                    555.6545,
                    632.425,
                    559.8985,
                    583.2665,
                    567.4405,
                    552.5985
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.parquetreader.benchmarks.SnappyDecompressorProviderBenchmark.noPooling_Gzip",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 10,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 590.658575,
            "scoreError": 46.2968952312727,
            "scoreConfidence": [
                544.3616797687273,
                636.9554702312728
            ],
            "scorePercentiles": {
                "0.0": 533.3135,
                "50.0": 576.85175,
                "90.0": 694.3526999999999,
                "95.0": 725.039525,
                "99.0": 726.4905,
                "99.9": 726.4905,
                "99.99": 726.4905,
                "99.999": 726.4905,
                "99.9999": 726.4905,
                "100.0": 726.4905
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    583.7985,
                    697.471,
                    563.113,
                    567.963,
                    557.299,
                    643.8475,
                    569.964,
                    579.794,
                    535.2685,
                    540.398
                ],
                [
                    575.143,
                    726.4905,
                    594.9135,
                    578.5605,
                    567.7785,
                    666.288,
                    595.1735,
                    598.201,
                    533.3135,
                    538.393
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.parquetreader.benchmarks.filter.Filter1PercentFileBenchmark.baselineOriginalReader",
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
            "score": 2343.572,
            "scoreError": 128.65112835599354,
            "scoreConfidence": [
                2214.9208716440066,
                2472.2231283559936
            ],
            "scorePercentiles": {
                "0.0": 2286.214,
                "50.0": 2344.874,
                "90.0": 2400.323,
                "95.0": 2400.323,
                "99.0": 2400.323,
                "99.9": 2400.323,
                "99.99": 2400.323,
                "99.999": 2400.323,
                "99.9999": 2400.323,
                "100.0": 2400.323
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    2299.087,
                    2355.502,
                    2286.214
                ],
                [
                    2400.323,
                    2386.06,
                    2334.246
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.parquetreader.benchmarks.filter.Filter1PercentFileBenchmark.columnarReader",
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
            "score": 544.7401666666667,
            "scoreError": 26.076048872552175,
            "scoreConfidence": [
                518.6641177941145,
                570.8162155392189
            ],
            "scorePercentiles": {
                "0.0": 532.0595,
                "50.0": 544.1875,
                "90.0": 557.3625,
                "95.0": 557.3625,
                "99.0": 557.3625,
                "99.9": 557.3625,
                "99.99": 557.3625,
                "99.999": 557.3625,
                "99.9999": 557.3625,
                "100.0": 557.3625
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    547.986,
                    557.3625,
                    551.7285
                ],
                [
                    540.389,
                    532.0595,
                    538.9155
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.parquetreader.benchmarks.filter.Filter1PercentFileBenchmark.rowReader",
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
            "score": 419.2079999999999,
            "scoreError": 40.26329834226405,
            "scoreConfidence": [
                378.9447016577359,
                459.47129834226394
            ],
            "scorePercentiles": {
                "0.0": 398.31733333333335,
                "50.0": 419.5043333333333,
                "90.0": 437.94533333333334,
                "95.0": 437.94533333333334,
                "99.0": 437.94533333333334,
                "99.9": 437.94533333333334,
                "99.99": 437.94533333333334,
                "99.999": 437.94533333333334,
                "99.9999": 437.94533333333334,
                "100.0": 437.94533333333334
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    415.325,
                    398.31733333333335,
                    430.161
                ],
                [
                    409.8156666666667,
                    423.6836666666667,
                    437.94533333333334
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.parquetreader.benchmarks.filter.Filter25PercentFileBenchmark.baselineOriginalReader",
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
            "score": 3237.3276666666666,
            "scoreError": 307.32854909426493,
            "scoreConfidence": [
                2929.9991175724017,
                3544.6562157609314
            ],
            "scorePercentiles": {
                "0.0": 3134.805,
                "50.0": 3221.76,
                "90.0": 3440.88,
                "95.0": 3440.88,
                "99.0": 3440.88,
                "99.9": 3440.88,
                "99.99": 3440.88,
                "99.999": 3440.88,
                "99.9999": 3440.88,
                "100.0": 3440.88
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    3198.956,
                    3156.856,
                    3134.805
                ],
                [
                    3440.88,
                    3247.905,
                    3244.564
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.parquetreader.benchmarks.filter.Filter25PercentFileBenchmark.columnarReader",
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
            "score": 716.4989999999999,
            "scoreError": 27.226651796912808,
            "scoreConfidence": [
                689.2723482030871,
                743.7256517969128
            ],
            "scorePercentiles": {
                "0.0": 701.4755,
                "50.0": 716.4745,
                "90.0": 729.605,
                "95.0": 729.605,
                "99.0": 729.605,
                "99.9": 729.605,
                "99.99": 729.605,
                "99.999": 729.605,
                "99.9999": 729.605,
                "100.0": 729.605
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    717.3645,
                    723.4135,
                    729.605
                ],
                [
                    715.5845,
                    701.4755,
                    711.551
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.parquetreader.benchmarks.filter.Filter25PercentFileBenchmark.rowReader",
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
            "score": 1266.6988333333331,
            "scoreError": 39.5317442207635,
            "scoreConfidence": [
                1227.1670891125696,
                1306.2305775540967
            ],
            "scorePercentiles": {
                "0.0": 1251.794,
                "50.0": 1265.3485,
                "90.0": 1286.784,
                "95.0": 1286.784,
                "99.0": 1286.784,
                "99.9": 1286.784,
                "99.99": 1286.784,
                "99.999": 1286.784,
                "99.9999": 1286.784,
                "100.0": 1286.784
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    1255.863,
                    1286.784,
                    1274.762
                ],
                [
                    1275.055,
                    1255.935,
                    1251.794
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.parquetreader.benchmarks.filter.Filter50PercentFileBenchmark.baselineOriginalReader",
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
            "score": 4671.858333333333,
            "scoreError": 253.8679667786711,
            "scoreConfidence": [
                4417.990366554662,
                4925.726300112004
            ],
            "scorePercentiles": {
                "0.0": 4597.755,
                "50.0": 4637.148,
                "90.0": 4846.482,
                "95.0": 4846.482,
                "99.0": 4846.482,
                "99.9": 4846.482,
                "99.99": 4846.482,
                "99.999": 4846.482,
                "99.9999": 4846.482,
                "100.0": 4846.482
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    4641.96,
                    4624.248,
                    4597.755
                ],
                [
                    4688.369,
                    4846.482,
                    4632.336
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.parquetreader.benchmarks.filter.Filter50PercentFileBenchmark.columnarReader",
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
            "score": 1021.8073333333333,
            "scoreError": 22.567052921793714,
            "scoreConfidence": [
                999.2402804115396,
                1044.374386255127
            ],
            "scorePercentiles": {
                "0.0": 1009.884,
                "50.0": 1021.3534999999999,
                "90.0": 1030.76,
                "95.0": 1030.76,
                "99.0": 1030.76,
                "99.9": 1030.76,
                "99.99": 1030.76,
                "99.999": 1030.76,
                "99.9999": 1030.76,
                "100.0": 1030.76
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    1016.918,
                    1020.956,
                    1021.751
                ],
                [
                    1030.575,
                    1030.76,
                    1009.884
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.parquetreader.benchmarks.filter.Filter50PercentFileBenchmark.rowReader",
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
            "score": 2740.47,
            "scoreError": 155.69940558019346,
            "scoreConfidence": [
                2584.7705944198065,
                2896.169405580193
            ],
            "scorePercentiles": {
                "0.0": 2688.549,
                "50.0": 2724.9764999999998,
                "90.0": 2846.105,
                "95.0": 2846.105,
                "99.0": 2846.105,
                "99.9": 2846.105,
                "99.99": 2846.105,
                "99.999": 2846.105,
                "99.9999": 2846.105,
                "100.0": 2846.105
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    2846.105,
                    2748.114,
                    2710.099
                ],
                [
                    2717.939,
                    2688.549,
                    2732.014
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.parquetreader.benchmarks.micro.DecompressorProviderBenchmark.fopPooling_Snappy",
        "mode": "avgt",
        "threads": 1,
        "forks": 3,
        "warmupIterations": 3,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 5,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 240.88005781764898,
            "scoreError": 24.48885169671212,
            "scoreConfidence": [
                216.39120612093686,
                265.3689095143611
            ],
            "scorePercentiles": {
                "0.0": 224.25625349615822,
                "50.0": 230.92942062523687,
                "90.0": 285.07474640000044,
                "95.0": 291.7802565490451,
                "99.0": 291.7802565490451,
                "99.9": 291.7802565490451,
                "99.99": 291.7802565490451,
                "99.999": 291.7802565490451,
                "99.9999": 291.7802565490451,
                "100.0": 291.7802565490451
            },
            "scoreUnit": "ns/op",
            "rawData": [
                [
                    279.55232483864586,
                    226.32202474685593,
                    230.92942062523687,
                    242.51934965270348,
                    232.81621670804466
                ],
                [
                    280.6044063006374,
                    228.30192453978052,
                    227.32643008469782,
                    224.25625349615822,
                    236.0235299098459
                ],
                [
                    291.7802565490451,
                    227.90492430598928,
                    228.76069783879782,
                    225.14698785643964,
                    230.95611981185596
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.parquetreader.benchmarks.micro.DecompressorProviderBenchmark.hadoopPooling_Snappy",
        "mode": "avgt",
        "threads": 1,
        "forks": 3,
        "warmupIterations": 3,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 5,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 312.6019744893953,
            "scoreError": 12.60497544070868,
            "scoreConfidence": [
                299.9969990486866,
                325.206949930104
            ],
            "scorePercentiles": {
                "0.0": 304.46168538958165,
                "50.0": 309.97105290907285,
                "90.0": 331.0575947973743,
                "95.0": 353.6053445911452,
                "99.0": 353.6053445911452,
                "99.9": 353.6053445911452,
                "99.99": 353.6053445911452,
                "99.999": 353.6053445911452,
                "99.9999": 353.6053445911452,
                "100.0": 353.6053445911452
            },
            "scoreUnit": "ns/op",
            "rawData": [
                [
                    304.46168538958165,
                    305.3328474432065,
                    316.025761601527,
                    312.37015676976165,
                    306.16094627903925
                ],
                [
                    307.3645732578521,
                    313.07555601739494,
                    309.97105290907285,
                    308.41917563022463,
                    313.10738276886394
                ],
                [
                    310.9969873735601,
                    308.8368055715759,
                    307.897842467718,
                    311.40349927040506,
                    353.6053445911452
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
    ,
    {
        "benchmark": "datameer.parquetreader.benchmarks.micro.DecompressorProviderBenchmark.noPooling_Snappy",
        "mode": "avgt",
        "threads": 1,
        "forks": 3,
        "warmupIterations": 3,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 5,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 323.86451625913764,
            "scoreError": 21.368413040061004,
            "scoreConfidence": [
                302.49610321907664,
                345.23292929919864
            ],
            "scorePercentiles": {
                "0.0": 304.7267664124508,
                "50.0": 313.56040479044617,
                "90.0": 355.61163535129504,
                "95.0": 361.11795305868617,
                "99.0": 361.11795305868617,
                "99.9": 361.11795305868617,
                "99.99": 361.11795305868617,
                "99.999": 361.11795305868617,
                "99.9999": 361.11795305868617,
                "100.0": 361.11795305868617
            },
            "scoreUnit": "ns/op",
            "rawData": [
                [
                    342.9335198485133,
                    344.0065317652425,
                    361.11795305868617,
                    351.77628260575233,
                    351.9407568797009
                ],
                [
                    315.6967792615868,
                    314.0980005797962,
                    306.86226793824187,
                    308.9990132532784,
                    313.56040479044617
                ],
                [
                    311.53684065594143,
                    312.6234697534326,
                    310.86534904490736,
                    304.7267664124508,
                    307.22380803908686
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
]
