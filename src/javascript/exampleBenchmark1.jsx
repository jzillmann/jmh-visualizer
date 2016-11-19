export const exampleRun1 = [
    {
        "benchmark": "io.morethan.javabenchmarks.datastructure.ListCreationBenchmark.arrayList",
        "mode": "thrpt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 5,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 3467631.2300505415,
            "scoreError": 98563.33258873208,
            "scoreConfidence": [
                3369067.897461809,
                3566194.5626392737
            ],
            "scorePercentiles": {
                "0.0": 3333994.173460993,
                "50.0": 3474993.5017186473,
                "90.0": 3532339.4656069754,
                "95.0": 3532453.3325443356,
                "99.0": 3532453.3325443356,
                "99.9": 3532453.3325443356,
                "99.99": 3532453.3325443356,
                "99.999": 3532453.3325443356,
                "99.9999": 3532453.3325443356,
                "100.0": 3532453.3325443356
            },
            "scoreUnit": "ops/s",
            "rawData": [
                [
                    3524193.1540743182,
                    3531314.663170731,
                    3532453.3325443356,
                    3520395.64538141,
                    3474431.2865468427
                ],
                [
                    3440045.3067861893,
                    3333994.173460993,
                    3445535.4557112623,
                    3475555.716890452,
                    3398393.5659388755
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.datastructure.ListCreationBenchmark.arrayList_preSized",
        "mode": "thrpt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 5,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 4434114.43194098,
            "scoreError": 162357.60067329454,
            "scoreConfidence": [
                4271756.831267686,
                4596472.032614275
            ],
            "scorePercentiles": {
                "0.0": 4235234.929285744,
                "50.0": 4442657.599407332,
                "90.0": 4606831.947486893,
                "95.0": 4616972.696033958,
                "99.0": 4616972.696033958,
                "99.9": 4616972.696033958,
                "99.99": 4616972.696033958,
                "99.999": 4616972.696033958,
                "99.9999": 4616972.696033958,
                "100.0": 4616972.696033958
            },
            "scoreUnit": "ops/s",
            "rawData": [
                [
                    4387907.870160588,
                    4415369.455557752,
                    4235234.929285744,
                    4493163.454426142,
                    4515565.210563311
                ],
                [
                    4498258.182714103,
                    4616972.696033958,
                    4469945.743256911,
                    4348193.164669668,
                    4360533.612741628
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.datastructure.ListCreationBenchmark.arrayList_preSized_reUsed",
        "mode": "thrpt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 5,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 4361609.499181856,
            "scoreError": 939443.3394829157,
            "scoreConfidence": [
                3422166.159698941,
                5301052.838664772
            ],
            "scorePercentiles": {
                "0.0": 2643499.3636192847,
                "50.0": 4553024.003404848,
                "90.0": 4729956.354727961,
                "95.0": 4731623.863515516,
                "99.0": 4731623.863515516,
                "99.9": 4731623.863515516,
                "99.99": 4731623.863515516,
                "99.999": 4731623.863515516,
                "99.9999": 4731623.863515516,
                "100.0": 4731623.863515516
            },
            "scoreUnit": "ops/s",
            "rawData": [
                [
                    4494893.115865175,
                    4708594.13630849,
                    4731623.863515516,
                    4546631.485472386,
                    4347826.860553541
                ],
                [
                    4559416.52133731,
                    4714948.775639965,
                    4294497.89978434,
                    4574162.969722556,
                    2643499.3636192847
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.datastructure.ListCreationBenchmark.immutableList",
        "mode": "thrpt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 5,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 2981815.101709012,
            "scoreError": 531678.441084036,
            "scoreConfidence": [
                2450136.660624976,
                3513493.542793048
            ],
            "scorePercentiles": {
                "0.0": 2044142.2793960872,
                "50.0": 3075757.833634517,
                "90.0": 3308773.966145652,
                "95.0": 3320440.164272431,
                "99.0": 3320440.164272431,
                "99.9": 3320440.164272431,
                "99.99": 3320440.164272431,
                "99.999": 3320440.164272431,
                "99.9999": 3320440.164272431,
                "100.0": 3320440.164272431
            },
            "scoreUnit": "ops/s",
            "rawData": [
                [
                    2945691.3886469672,
                    3070641.4787076386,
                    2877623.558878289,
                    2044142.2793960872,
                    3041207.6020551748
                ],
                [
                    3113544.6225625942,
                    3080874.188561396,
                    3320440.164272431,
                    3120207.5510048973,
                    3203778.183004643
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.datastructure.NoOpStrategyBenchmark.noOpImplementation",
        "mode": "thrpt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 5,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 265220.92558560526,
            "scoreError": 45170.935351863656,
            "scoreConfidence": [
                220049.9902337416,
                310391.86093746894
            ],
            "scorePercentiles": {
                "0.0": 188113.52554093578,
                "50.0": 274012.63750846114,
                "90.0": 295455.54619391693,
                "95.0": 296578.8535378697,
                "99.0": 296578.8535378697,
                "99.9": 296578.8535378697,
                "99.99": 296578.8535378697,
                "99.999": 296578.8535378697,
                "99.9999": 296578.8535378697,
                "100.0": 296578.8535378697
            },
            "scoreUnit": "ops/ms",
            "rawData": [
                [
                    277565.0291087347,
                    296578.8535378697,
                    274123.85649402405,
                    285345.78009834216,
                    280448.55492052657
                ],
                [
                    262636.3641159435,
                    188113.52554093578,
                    259105.86701653324,
                    254390.00650024443,
                    273901.41852289817
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.datastructure.NoOpStrategyBenchmark.nullCheck",
        "mode": "thrpt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 5,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 220418.79942255607,
            "scoreError": 59887.50080151633,
            "scoreConfidence": [
                160531.29862103972,
                280306.3002240724
            ],
            "scorePercentiles": {
                "0.0": 123193.03908686576,
                "50.0": 230076.47892903056,
                "90.0": 260497.0634234419,
                "95.0": 260613.95551031004,
                "99.0": 260613.95551031004,
                "99.9": 260613.95551031004,
                "99.99": 260613.95551031004,
                "99.999": 260613.95551031004,
                "99.9999": 260613.95551031004,
                "100.0": 260613.95551031004
            },
            "scoreUnit": "ops/ms",
            "rawData": [
                [
                    225766.78870732873,
                    235885.08968190284,
                    259445.03464162865,
                    197271.08810861825,
                    240521.47354462056
                ],
                [
                    209475.73162557645,
                    123193.03908686576,
                    217629.62416797693,
                    234386.1691507324,
                    260613.95551031004
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.datastructure.NoOpStrategyBenchmark.optional",
        "mode": "thrpt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 5,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 286896.3310704279,
            "scoreError": 20107.878323701556,
            "scoreConfidence": [
                266788.45274672634,
                307004.20939412946
            ],
            "scorePercentiles": {
                "0.0": 263809.14550875756,
                "50.0": 290223.2660515711,
                "90.0": 303583.74685001234,
                "95.0": 304202.334309049,
                "99.0": 304202.334309049,
                "99.9": 304202.334309049,
                "99.99": 304202.334309049,
                "99.999": 304202.334309049,
                "99.9999": 304202.334309049,
                "100.0": 304202.334309049
            },
            "scoreUnit": "ops/ms",
            "rawData": [
                [
                    289755.87927714444,
                    294666.01416999276,
                    304202.334309049,
                    295525.73942506313,
                    266111.307867935
                ],
                [
                    280134.28668965935,
                    290690.65282599785,
                    298016.4597186821,
                    286051.49091199733,
                    263809.14550875756
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.datastructure.NoOpStrategyBenchmark.someImplementation",
        "mode": "thrpt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 5,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 224779.77076967285,
            "scoreError": 6696.675911157437,
            "scoreConfidence": [
                218083.0948585154,
                231476.4466808303
            ],
            "scorePercentiles": {
                "0.0": 213027.69406189365,
                "50.0": 226382.8790553661,
                "90.0": 227817.1455298249,
                "95.0": 227847.54350347715,
                "99.0": 227847.54350347715,
                "99.9": 227847.54350347715,
                "99.99": 227847.54350347715,
                "99.999": 227847.54350347715,
                "99.9999": 227847.54350347715,
                "100.0": 227847.54350347715
            },
            "scoreUnit": "ops/ms",
            "rawData": [
                [
                    227188.19217040992,
                    227543.56376695447,
                    226305.29260554747,
                    225248.74335308146,
                    227847.54350347715
                ],
                [
                    227334.41601450165,
                    213027.69406189365,
                    223305.96702314483,
                    223535.8296925333,
                    226460.46550518475
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.experimental.SwitchVsPolymorphismBenchmark.coupled",
        "mode": "thrpt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 5,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 217694.53564075212,
            "scoreError": 17936.228360750083,
            "scoreConfidence": [
                199758.30728000205,
                235630.7640015022
            ],
            "scorePercentiles": {
                "0.0": 196326.7377236194,
                "50.0": 220783.76529144408,
                "90.0": 229145.98592086066,
                "95.0": 229219.58926719605,
                "99.0": 229219.58926719605,
                "99.9": 229219.58926719605,
                "99.99": 229219.58926719605,
                "99.999": 229219.58926719605,
                "99.9999": 229219.58926719605,
                "100.0": 229219.58926719605
            },
            "scoreUnit": "ops/ms",
            "rawData": [
                [
                    223565.2981603508,
                    217674.27872224286,
                    196326.7377236194,
                    197339.53865361406,
                    220754.4647037449
                ],
                [
                    228483.5558038421,
                    220813.0658791433,
                    229219.58926719605,
                    227120.43137595127,
                    215648.39611781633
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.experimental.SwitchVsPolymorphismBenchmark.polymorphic",
        "mode": "thrpt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 5,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 263911.6821445559,
            "scoreError": 17585.524385298857,
            "scoreConfidence": [
                246326.15775925704,
                281497.20652985474
            ],
            "scorePercentiles": {
                "0.0": 245131.49609579527,
                "50.0": 265706.69709600275,
                "90.0": 282976.23170290526,
                "95.0": 284263.5028585698,
                "99.0": 284263.5028585698,
                "99.9": 284263.5028585698,
                "99.99": 284263.5028585698,
                "99.999": 284263.5028585698,
                "99.9999": 284263.5028585698,
                "100.0": 284263.5028585698
            },
            "scoreUnit": "ops/ms",
            "rawData": [
                [
                    267973.3418403934,
                    271390.7913019247,
                    268955.9732944289,
                    263440.0523516122,
                    271206.68639697257
                ],
                [
                    254763.47010520793,
                    249270.75276638527,
                    245131.49609579527,
                    262720.75443426927,
                    284263.5028585698
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.experimental.SwitchVsPolymorphismBenchmark.switchStyle",
        "mode": "thrpt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 5,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 218200.11811166693,
            "scoreError": 7932.427219999143,
            "scoreConfidence": [
                210267.6908916678,
                226132.54533166607
            ],
            "scorePercentiles": {
                "0.0": 208780.15592889974,
                "50.0": 218879.631611146,
                "90.0": 224321.13156794064,
                "95.0": 224428.94828844082,
                "99.0": 224428.94828844082,
                "99.9": 224428.94828844082,
                "99.99": 224428.94828844082,
                "99.999": 224428.94828844082,
                "99.9999": 224428.94828844082,
                "100.0": 224428.94828844082
            },
            "scoreUnit": "ops/ms",
            "rawData": [
                [
                    223350.78108343887,
                    218392.93162616494,
                    224428.94828844082,
                    211651.39295566714,
                    218259.44475812427
                ],
                [
                    213936.50176215926,
                    223258.4641810501,
                    219366.33159612707,
                    220576.22893659753,
                    208780.15592889974
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.MultithreadedBenchmark.withThreads1",
        "mode": "thrpt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 0,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 5,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 1389.6098704234967,
            "scoreError": 234.65247463498477,
            "scoreConfidence": [
                1154.9573957885118,
                1624.2623450584815
            ],
            "scorePercentiles": {
                "0.0": 1282.8319881068917,
                "50.0": 1409.8429343063594,
                "90.0": 1437.4899565094358,
                "95.0": 1437.4899565094358,
                "99.0": 1437.4899565094358,
                "99.9": 1437.4899565094358,
                "99.99": 1437.4899565094358,
                "99.999": 1437.4899565094358,
                "99.9999": 1437.4899565094358,
                "100.0": 1437.4899565094358
            },
            "scoreUnit": "ops/us",
            "rawData": [
                [
                    1282.8319881068917,
                    1407.6916546680318,
                    1409.8429343063594,
                    1410.192818526765,
                    1437.4899565094358
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.MultithreadedBenchmark.withThreads2",
        "mode": "thrpt",
        "threads": 2,
        "forks": 1,
        "warmupIterations": 0,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 5,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 2361.1477089685004,
            "scoreError": 1679.3844264057627,
            "scoreConfidence": [
                681.7632825627377,
                4040.532135374263
            ],
            "scorePercentiles": {
                "0.0": 1605.9649311930766,
                "50.0": 2561.9161621802423,
                "90.0": 2645.338248408064,
                "95.0": 2645.338248408064,
                "99.0": 2645.338248408064,
                "99.9": 2645.338248408064,
                "99.99": 2645.338248408064,
                "99.999": 2645.338248408064,
                "99.9999": 2645.338248408064,
                "100.0": 2645.338248408064
            },
            "scoreUnit": "ops/us",
            "rawData": [
                [
                    2624.62742831607,
                    2645.338248408064,
                    2561.9161621802423,
                    2367.891774745049,
                    1605.9649311930766
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.MultithreadedBenchmark.withThreads4",
        "mode": "thrpt",
        "threads": 4,
        "forks": 1,
        "warmupIterations": 0,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 5,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 2418.5407045651855,
            "scoreError": 696.0873886618272,
            "scoreConfidence": [
                1722.4533159033583,
                3114.628093227013
            ],
            "scorePercentiles": {
                "0.0": 2206.7702175649483,
                "50.0": 2448.630893613011,
                "90.0": 2675.824339436126,
                "95.0": 2675.824339436126,
                "99.0": 2675.824339436126,
                "99.9": 2675.824339436126,
                "99.99": 2675.824339436126,
                "99.999": 2675.824339436126,
                "99.9999": 2675.824339436126,
                "100.0": 2675.824339436126
            },
            "scoreUnit": "ops/us",
            "rawData": [
                [
                    2206.7702175649483,
                    2291.5520199252605,
                    2675.824339436126,
                    2448.630893613011,
                    2469.9260522865798
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.ThroughputBenchmark.sleep100Milliseconds",
        "mode": "thrpt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 1,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 10,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 9.720933344560345,
            "scoreError": 0.040865038817575444,
            "scoreConfidence": [
                9.68006830574277,
                9.76179838337792
            ],
            "scorePercentiles": {
                "0.0": 9.636807897237636,
                "50.0": 9.708782857370561,
                "90.0": 9.783059613906943,
                "95.0": 9.815906762643271,
                "99.0": 9.817592836154345,
                "99.9": 9.817592836154345,
                "99.99": 9.817592836154345,
                "99.999": 9.817592836154345,
                "99.9999": 9.817592836154345,
                "100.0": 9.817592836154345
            },
            "scoreUnit": "ops/s",
            "rawData": [
                [
                    9.737474048110181,
                    9.673302387981124,
                    9.751869102962472,
                    9.695638501081474,
                    9.727833667678814,
                    9.772397519608369,
                    9.694704120999138,
                    9.678797715543572,
                    9.762843590649494,
                    9.673260009055138
                ],
                [
                    9.69493632215552,
                    9.758562850047456,
                    9.677668142712031,
                    9.706985084147709,
                    9.687787252882579,
                    9.77575384567354,
                    9.817592836154345,
                    9.710580630593414,
                    9.783871365932876,
                    9.636807897237636
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.ThroughputBenchmark.sleep100MillisecondsRandom",
        "mode": "thrpt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 1,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 10,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 12.926238750532258,
            "scoreError": 0.49705390027705104,
            "scoreConfidence": [
                12.429184850255208,
                13.423292650809309
            ],
            "scorePercentiles": {
                "0.0": 11.932534824930782,
                "50.0": 12.796254967646293,
                "90.0": 13.962938443992355,
                "95.0": 14.179050329887389,
                "99.0": 14.189934860678324,
                "99.9": 14.189934860678324,
                "99.99": 14.189934860678324,
                "99.999": 14.189934860678324,
                "99.9999": 14.189934860678324,
                "100.0": 14.189934860678324
            },
            "scoreUnit": "ops/s",
            "rawData": [
                [
                    12.804971714265657,
                    13.299912287743458,
                    13.071036507622505,
                    12.903940230060579,
                    12.3312149539164,
                    11.932534824930782,
                    12.536228519121805,
                    12.477419014932762,
                    12.662116449407783,
                    12.63273161303703
                ],
                [
                    13.972244244859608,
                    12.383006886901676,
                    14.189934860678324,
                    13.879186236187078,
                    13.29676703403592,
                    12.728811437626655,
                    12.6903368717279,
                    12.78753822102693,
                    13.128825481271491,
                    12.816017621290758
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.ThroughputBenchmark.sleep50Milliseconds",
        "mode": "thrpt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 1,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 10,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 19.00615630767558,
            "scoreError": 0.10258341752939855,
            "scoreConfidence": [
                18.903572890146183,
                19.10873972520498
            ],
            "scorePercentiles": {
                "0.0": 18.735978917850524,
                "50.0": 19.014030011673587,
                "90.0": 19.161608785930923,
                "95.0": 19.225406106589258,
                "99.0": 19.228686671557092,
                "99.9": 19.228686671557092,
                "99.99": 19.228686671557092,
                "99.999": 19.228686671557092,
                "99.9999": 19.228686671557092,
                "100.0": 19.228686671557092
            },
            "scoreUnit": "ops/s",
            "rawData": [
                [
                    18.972560958378274,
                    19.076468227006163,
                    19.04234725539145,
                    18.926442400536757,
                    19.073905232394786,
                    18.849945424149855,
                    18.735978917850524,
                    18.923742238950013,
                    19.057008417516826,
                    19.054033379269146
                ],
                [
                    18.902098881120878,
                    18.984913397460307,
                    19.228686671557092,
                    19.10214446347084,
                    18.87745935118168,
                    18.954792213070736,
                    18.98571276795572,
                    19.148409509505726,
                    19.16307537220039,
                    19.06340107454444
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.string.ConcatenatedStringBenchmark.pluses",
        "mode": "thrpt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 10,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 1174.6408455077114,
            "scoreError": 103.0562103148359,
            "scoreConfidence": [
                1071.5846351928756,
                1277.6970558225473
            ],
            "scorePercentiles": {
                "0.0": 808.2086649618565,
                "50.0": 1198.341290062794,
                "90.0": 1309.087467913104,
                "95.0": 1310.2795847466286,
                "99.0": 1310.323753353949,
                "99.9": 1310.323753353949,
                "99.99": 1310.323753353949,
                "99.999": 1310.323753353949,
                "99.9999": 1310.323753353949,
                "100.0": 1310.323753353949
            },
            "scoreUnit": "ops/ms",
            "rawData": [
                [
                    1309.4403812075418,
                    1310.323753353949,
                    1248.620302975429,
                    1215.1329707548095,
                    1161.349449184374,
                    1134.2736959964263,
                    1056.56741591726,
                    1060.9245882076807,
                    1022.9128318774663,
                    808.2086649618565
                ],
                [
                    1244.0144067158376,
                    1270.1359908093168,
                    1305.9112482631651,
                    1144.2156564774332,
                    1198.0909294235278,
                    1195.7479516830526,
                    1206.5286452305322,
                    1170.169588001603,
                    1231.6567884109113,
                    1198.5916507020606
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.string.ConcatenatedStringBenchmark.stringBuffer",
        "mode": "thrpt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 10,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 2391.384198245239,
            "scoreError": 79.50303065373329,
            "scoreConfidence": [
                2311.881167591506,
                2470.8872288989724
            ],
            "scorePercentiles": {
                "0.0": 2244.984734889887,
                "50.0": 2398.2139583095022,
                "90.0": 2535.1068982750585,
                "95.0": 2548.2004146700488,
                "99.0": 2548.769224213442,
                "99.9": 2548.769224213442,
                "99.99": 2548.769224213442,
                "99.999": 2548.769224213442,
                "99.9999": 2548.769224213442,
                "100.0": 2548.769224213442
            },
            "scoreUnit": "ops/ms",
            "rawData": [
                [
                    2298.247884443726,
                    2376.3985026433147,
                    2252.888833711707,
                    2285.0356717945897,
                    2244.984734889887,
                    2432.900291543658,
                    2330.0715016075183,
                    2383.3291529189833,
                    2434.063974002872,
                    2416.9730447107004
                ],
                [
                    2273.9783411305702,
                    2514.5316826404023,
                    2537.393033345576,
                    2456.5991702809533,
                    2353.7565371795317,
                    2430.249430682204,
                    2548.769224213442,
                    2413.098763700021,
                    2368.2115605977274,
                    2476.2026288673974
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.string.ConcatenatedStringBenchmark.stringBuilder",
        "mode": "thrpt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 10,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 2524.135038734134,
            "scoreError": 30.763563331966427,
            "scoreConfidence": [
                2493.3714754021676,
                2554.8986020661005
            ],
            "scorePercentiles": {
                "0.0": 2457.1179160682273,
                "50.0": 2532.773057040802,
                "90.0": 2568.8958534890166,
                "95.0": 2572.929155961537,
                "99.0": 2573.0830516934343,
                "99.9": 2573.0830516934343,
                "99.99": 2573.0830516934343,
                "99.999": 2573.0830516934343,
                "99.9999": 2573.0830516934343,
                "100.0": 2573.0830516934343
            },
            "scoreUnit": "ops/ms",
            "rawData": [
                [
                    2467.7268561977517,
                    2533.8756262103348,
                    2493.7578928061494,
                    2548.6318172048004,
                    2570.00513705549,
                    2482.7691537351543,
                    2573.0830516934343,
                    2538.5446194896535,
                    2536.555508370749,
                    2527.2969188161464
                ],
                [
                    2545.935404218128,
                    2493.3527023158395,
                    2557.553459403392,
                    2558.912301390753,
                    2551.5380415757168,
                    2524.7318785307934,
                    2465.6903666127896,
                    2531.6704878712694,
                    2523.9516351161014,
                    2457.1179160682273
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.string.StringConstantBenchmark.buildStringWithCharSeperator",
        "mode": "thrpt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 10,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 7076939.988206416,
            "scoreError": 320158.6305589284,
            "scoreConfidence": [
                6756781.357647488,
                7397098.618765345
            ],
            "scorePercentiles": {
                "0.0": 6366878.870718378,
                "50.0": 7191255.542866383,
                "90.0": 7459405.0967598,
                "95.0": 7486526.356757051,
                "99.0": 7487821.92151363,
                "99.9": 7487821.92151363,
                "99.99": 7487821.92151363,
                "99.999": 7487821.92151363,
                "99.9999": 7487821.92151363,
                "100.0": 7487821.92151363
            },
            "scoreUnit": "ops/s",
            "rawData": [
                [
                    7338335.9974026475,
                    7255613.627504553,
                    7114734.17470304,
                    6994784.15795478,
                    7241975.911004908,
                    7322391.44977016,
                    7461910.626382049,
                    7101752.201852498,
                    6417923.866008063,
                    6369443.51166379
                ],
                [
                    7193004.657271846,
                    7116837.8423118545,
                    7436855.330159555,
                    7292470.001268691,
                    7063819.029110331,
                    6465859.499710735,
                    6366878.870718378,
                    7487821.92151363,
                    7189506.42846092,
                    7306880.659355919
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.string.StringConstantBenchmark.buildStringWithSeperatorAsCharConstant",
        "mode": "thrpt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 10,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 6821353.507515783,
            "scoreError": 620757.9582842289,
            "scoreConfidence": [
                6200595.549231554,
                7442111.465800012
            ],
            "scorePercentiles": {
                "0.0": 4248167.485541519,
                "50.0": 7038530.607626023,
                "90.0": 7331314.561585225,
                "95.0": 7401974.246342458,
                "99.0": 7405609.849239758,
                "99.9": 7405609.849239758,
                "99.99": 7405609.849239758,
                "99.999": 7405609.849239758,
                "99.9999": 7405609.849239758,
                "100.0": 7405609.849239758
            },
            "scoreUnit": "ops/s",
            "rawData": [
                [
                    6989226.029918743,
                    7012981.614122666,
                    7304376.607288428,
                    6884241.239802283,
                    5948381.41648826,
                    6693892.152756705,
                    7317065.494208418,
                    7084184.10096172,
                    6915658.314133137,
                    6811853.156830646
                ],
                [
                    7064079.601129378,
                    6773634.715347828,
                    4248167.485541519,
                    6064423.139937878,
                    7099689.599402671,
                    7294365.180420908,
                    7405609.849239758,
                    7085289.3032301655,
                    7097053.358260794,
                    7332897.791293759
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.string.StringConstantBenchmark.buildStringWithSeperatorAsStringConstant",
        "mode": "thrpt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 10,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 5744394.420998035,
            "scoreError": 395050.54781150515,
            "scoreConfidence": [
                5349343.87318653,
                6139444.96880954
            ],
            "scorePercentiles": {
                "0.0": 4495940.808471717,
                "50.0": 5920029.897983047,
                "90.0": 6184053.382914184,
                "95.0": 6226615.276093425,
                "99.0": 6228852.068813188,
                "99.9": 6228852.068813188,
                "99.99": 6228852.068813188,
                "99.999": 6228852.068813188,
                "99.9999": 6228852.068813188,
                "100.0": 6228852.068813188
            },
            "scoreUnit": "ops/s",
            "rawData": [
                [
                    6034150.871745955,
                    6183487.899380384,
                    5925769.818839696,
                    5928817.267794563,
                    6078374.208072067,
                    6049770.000716166,
                    6121080.951401659,
                    6184116.214417939,
                    6228852.068813188,
                    5870551.733266693
                ],
                [
                    5032143.057869235,
                    5914289.977126398,
                    5985472.624709446,
                    4495940.808471717,
                    5204876.311472421,
                    5621707.761364345,
                    5565060.767118689,
                    5406738.76957938,
                    5751435.500673464,
                    5305251.807127303
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.string.StringConstantBenchmark.buildStringWithStringSeperator",
        "mode": "thrpt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 10,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 5816121.961668772,
            "scoreError": 291876.3655662464,
            "scoreConfidence": [
                5524245.5961025255,
                6107998.327235018
            ],
            "scorePercentiles": {
                "0.0": 5161146.731003059,
                "50.0": 5907466.445350005,
                "90.0": 6153852.963029693,
                "95.0": 6174799.488155863,
                "99.0": 6175726.575067021,
                "99.9": 6175726.575067021,
                "99.99": 6175726.575067021,
                "99.999": 6175726.575067021,
                "99.9999": 6175726.575067021,
                "100.0": 6175726.575067021
            },
            "scoreUnit": "ops/s",
            "rawData": [
                [
                    5968153.088503181,
                    5894542.50956979,
                    5325164.953460061,
                    5842087.040492461,
                    5280740.816637861,
                    5788946.064781332,
                    5739217.2073069895,
                    5598841.720948636,
                    6065190.848673543,
                    6157184.836843864
                ],
                [
                    6123649.624029175,
                    6061998.649184244,
                    5924209.348384635,
                    6120065.702542032,
                    6123866.098702156,
                    6175726.575067021,
                    5161602.259328454,
                    5920390.38113022,
                    5161146.731003059,
                    5889714.776786698
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.datastructure.NullIndexBenchmark.arrayWithBooleans",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 5,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 29.327344521447667,
            "scoreError": 1.2326643624496922,
            "scoreConfidence": [
                28.094680158997974,
                30.56000888389736
            ],
            "scorePercentiles": {
                "0.0": 28.304596194444443,
                "50.0": 29.106267071428572,
                "90.0": 30.699827083155082,
                "95.0": 30.770430363636365,
                "99.0": 30.770430363636365,
                "99.9": 30.770430363636365,
                "99.99": 30.770430363636365,
                "99.999": 30.770430363636365,
                "99.9999": 30.770430363636365,
                "100.0": 30.770430363636365
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    30.006314676470588,
                    29.003635428571428,
                    28.5698255,
                    29.1385268,
                    30.06439755882353
                ],
                [
                    29.885940794117648,
                    29.074007342857143,
                    28.304596194444443,
                    28.455770555555556,
                    30.770430363636365
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.datastructure.NullIndexBenchmark.arrayWithNullIndices",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 5,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 88.91915026666666,
            "scoreError": 4.144560524081336,
            "scoreConfidence": [
                84.77458974258532,
                93.063710790748
            ],
            "scorePercentiles": {
                "0.0": 86.6647195,
                "50.0": 88.23997383333332,
                "90.0": 95.22163355833332,
                "95.0": 95.680748,
                "99.0": 95.680748,
                "99.9": 95.680748,
                "99.99": 95.680748,
                "99.999": 95.680748,
                "99.9999": 95.680748,
                "100.0": 95.680748
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    95.680748,
                    86.83595275,
                    91.08960358333333,
                    88.696607,
                    87.07050966666667
                ],
                [
                    87.78334066666666,
                    86.6647195,
                    89.34309583333334,
                    88.79012941666667,
                    87.23679625
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.datastructure.NullIndexBenchmark.bitSet",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 3,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 5,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 161.87140509809527,
            "scoreError": 45.19790385091178,
            "scoreConfidence": [
                116.67350124718348,
                207.06930894900705
            ],
            "scorePercentiles": {
                "0.0": 144.80801142857143,
                "50.0": 147.91893064285716,
                "90.0": 235.07247775666667,
                "95.0": 241.8865756,
                "99.0": 241.8865756,
                "99.9": 241.8865756,
                "99.99": 241.8865756,
                "99.999": 241.8865756,
                "99.9999": 241.8865756,
                "100.0": 241.8865756
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    145.00769614285716,
                    241.8865756,
                    167.8492875,
                    156.44791614285714,
                    173.74559716666667
                ],
                [
                    145.66817585714287,
                    144.80801142857143,
                    147.46292985714285,
                    148.16479442857144,
                    147.67306685714286
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.experimental.PullPushBenchmark.pull",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 7,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 5,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 283.6893328766667,
            "scoreError": 103.25993072518708,
            "scoreConfidence": [
                180.42940215147962,
                386.9492636018538
            ],
            "scorePercentiles": {
                "0.0": 238.9761632,
                "50.0": 253.578646,
                "90.0": 439.2057437333334,
                "95.0": 448.31947233333335,
                "99.0": 448.31947233333335,
                "99.9": 448.31947233333335,
                "99.99": 448.31947233333335,
                "99.999": 448.31947233333335,
                "99.9999": 448.31947233333335,
                "100.0": 448.31947233333335
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    256.43214975,
                    448.31947233333335,
                    265.565139,
                    357.18218633333333,
                    293.6840315
                ],
                [
                    240.4862154,
                    241.0508846,
                    250.72514225,
                    238.9761632,
                    244.4719444
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.experimental.PullPushBenchmark.pullWithoutJit",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 7,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 5,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 266.87816218,
            "scoreError": 53.75647114152165,
            "scoreConfidence": [
                213.12169103847836,
                320.6346333215217
            ],
            "scorePercentiles": {
                "0.0": 236.6597472,
                "50.0": 243.9671836,
                "90.0": 329.99194747499996,
                "95.0": 332.32055775,
                "99.0": 332.32055775,
                "99.9": 332.32055775,
                "99.99": 332.32055775,
                "99.999": 332.32055775,
                "99.9999": 332.32055775,
                "100.0": 332.32055775
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    239.9058886,
                    245.5040052,
                    242.430362,
                    241.0757846,
                    236.6597472
                ],
                [
                    332.32055775,
                    309.034455,
                    239.6672582,
                    286.37102225,
                    295.812541
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.experimental.PullPushBenchmark.push",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 7,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 5,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 214.17584424166665,
            "scoreError": 85.49038557191639,
            "scoreConfidence": [
                128.68545866975026,
                299.6662298135831
            ],
            "scorePercentiles": {
                "0.0": 167.0331085,
                "50.0": 185.08631441666665,
                "90.0": 312.65356311,
                "95.0": 315.0216304,
                "99.0": 315.0216304,
                "99.9": 315.0216304,
                "99.99": 315.0216304,
                "99.999": 315.0216304,
                "99.9999": 315.0216304,
                "100.0": 315.0216304
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    195.12454083333333,
                    221.2513866,
                    315.0216304,
                    291.3409575,
                    266.09361825
                ],
                [
                    171.20956833333332,
                    167.574599,
                    175.048088,
                    172.060945,
                    167.0331085
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.experimental.PullPushBenchmark.pushWithoutJit",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 7,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 5,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 10706.271273,
            "scoreError": 502.961928954825,
            "scoreConfidence": [
                10203.309344045176,
                11209.233201954825
            ],
            "scorePercentiles": {
                "0.0": 10331.763236,
                "50.0": 10621.585184,
                "90.0": 11380.561865399999,
                "95.0": 11410.201523,
                "99.0": 11410.201523,
                "99.9": 11410.201523,
                "99.99": 11410.201523,
                "99.999": 11410.201523,
                "99.9999": 11410.201523,
                "100.0": 11410.201523
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    10645.559895,
                    10513.900054,
                    10597.610473,
                    10331.763236,
                    10391.774766
                ],
                [
                    10670.32498,
                    10837.428171,
                    11410.201523,
                    11113.804947,
                    10550.344685
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.AvgTimeBenchmark.sleep100Milliseconds",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 1,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 10,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 102.73731038999998,
            "scoreError": 0.5062236425830061,
            "scoreConfidence": [
                102.23108674741697,
                103.24353403258299
            ],
            "scorePercentiles": {
                "0.0": 101.6370697,
                "50.0": 102.79519794999999,
                "90.0": 103.51128005,
                "95.0": 103.65277035999999,
                "99.0": 103.6593142,
                "99.9": 103.6593142,
                "99.99": 103.6593142,
                "99.999": 103.6593142,
                "99.9999": 103.6593142,
                "100.0": 103.6593142
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    103.5284374,
                    102.7907683,
                    103.2334967,
                    103.270726,
                    103.2506549,
                    103.3568639,
                    103.0886561,
                    102.3286275,
                    101.8715267,
                    102.4212804
                ],
                [
                    101.6370697,
                    101.8699713,
                    102.7996276,
                    102.5708418,
                    103.0339327,
                    103.6593142,
                    102.4833319,
                    102.0266303,
                    102.7025359,
                    102.8219145
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.AvgTimeBenchmark.sleep100MillisecondsRandom",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 1,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 10,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 78.60358133402013,
            "scoreError": 3.323284529742504,
            "scoreConfidence": [
                75.28029680427763,
                81.92686586376264
            ],
            "scorePercentiles": {
                "0.0": 72.02182871428572,
                "50.0": 78.90245,
                "90.0": 85.03957163076923,
                "95.0": 85.38726019583333,
                "99.0": 85.39316341666667,
                "99.9": 85.39316341666667,
                "99.99": 85.39316341666667,
                "99.999": 85.39316341666667,
                "99.9999": 85.39316341666667,
                "100.0": 85.39316341666667
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    76.40950642857143,
                    73.39520964285714,
                    79.95079692307692,
                    73.54687485714285,
                    81.48451492307693,
                    79.05790869230769,
                    78.74699130769231,
                    82.9198253076923,
                    77.74782735714285,
                    76.08853464285714
                ],
                [
                    74.57722035714286,
                    82.3935513076923,
                    79.42289946153846,
                    85.39316341666667,
                    85.275099,
                    78.32037592307692,
                    74.85320157142857,
                    80.47391061538461,
                    72.02182871428572,
                    79.99238623076923
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.AvgTimeBenchmark.sleep50Milliseconds",
        "mode": "avgt",
        "threads": 1,
        "forks": 2,
        "warmupIterations": 1,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 10,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 52.62350501802632,
            "scoreError": 0.28612888567165395,
            "scoreConfidence": [
                52.33737613235467,
                52.90963390369797
            ],
            "scorePercentiles": {
                "0.0": 52.0636679,
                "50.0": 52.5723723,
                "90.0": 53.12975899473684,
                "95.0": 53.2444505,
                "99.0": 53.24957694736842,
                "99.9": 53.24957694736842,
                "99.99": 53.24957694736842,
                "99.999": 53.24957694736842,
                "99.9999": 53.24957694736842,
                "100.0": 53.24957694736842
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    53.147048,
                    52.79073675,
                    52.5659944,
                    52.7926938,
                    52.54208315,
                    52.97415794736842,
                    52.2072311,
                    52.5698005,
                    52.36807815,
                    52.4885526
                ],
                [
                    52.6566024,
                    52.5749441,
                    52.96281247368421,
                    53.24957694736842,
                    52.1872683,
                    52.87277084210526,
                    52.8525038,
                    52.3457387,
                    52.2578385,
                    52.0636679
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.QuickBenchmark.sleep100Milliseconds",
        "mode": "avgt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 0,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 1,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 102.7422955,
            "scoreError": "NaN",
            "scoreConfidence": [
                "NaN",
                "NaN"
            ],
            "scorePercentiles": {
                "0.0": 102.7422955,
                "50.0": 102.7422955,
                "90.0": 102.7422955,
                "95.0": 102.7422955,
                "99.0": 102.7422955,
                "99.9": 102.7422955,
                "99.99": 102.7422955,
                "99.999": 102.7422955,
                "99.9999": 102.7422955,
                "100.0": 102.7422955
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    102.7422955
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.QuickBenchmark.sleep50Milliseconds",
        "mode": "avgt",
        "threads": 1,
        "forks": 1,
        "warmupIterations": 0,
        "warmupTime": "1 s",
        "warmupBatchSize": 1,
        "measurementIterations": 1,
        "measurementTime": "1 s",
        "measurementBatchSize": 1,
        "primaryMetric": {
            "score": 52.04125415,
            "scoreError": "NaN",
            "scoreConfidence": [
                "NaN",
                "NaN"
            ],
            "scorePercentiles": {
                "0.0": 52.04125415,
                "50.0": 52.04125415,
                "90.0": 52.04125415,
                "95.0": 52.04125415,
                "99.0": 52.04125415,
                "99.9": 52.04125415,
                "99.99": 52.04125415,
                "99.999": 52.04125415,
                "99.9999": 52.04125415,
                "100.0": 52.04125415
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    52.04125415
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
]