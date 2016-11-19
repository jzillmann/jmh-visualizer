export const exampleRun2 = [
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
            "score": 2657004.0226546833,
            "scoreError": 1316876.2732357727,
            "scoreConfidence": [
                1340127.7494189106,
                3973880.295890456
            ],
            "scorePercentiles": {
                "0.0": 1353246.9734590163,
                "50.0": 3093983.246403984,
                "90.0": 3523184.9143888643,
                "95.0": 3531388.323540429,
                "99.0": 3531388.323540429,
                "99.9": 3531388.323540429,
                "99.99": 3531388.323540429,
                "99.999": 3531388.323540429,
                "99.9999": 3531388.323540429,
                "100.0": 3531388.323540429
            },
            "scoreUnit": "ops/s",
            "rawData": [
                [
                    3449354.2320247795,
                    3228699.4323227573,
                    3204695.3127599033,
                    2313563.012087752,
                    1729556.0814846298
                ],
                [
                    3531388.323540429,
                    3357714.419262264,
                    2983271.180048064,
                    1353246.9734590163,
                    1418551.2595572362
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
            "score": 3927974.68895474,
            "scoreError": 419868.1819872975,
            "scoreConfidence": [
                3508106.506967442,
                4347842.870942038
            ],
            "scorePercentiles": {
                "0.0": 3355748.326215153,
                "50.0": 4005008.8139333883,
                "90.0": 4236051.258016388,
                "95.0": 4238123.18322758,
                "99.0": 4238123.18322758,
                "99.9": 4238123.18322758,
                "99.99": 4238123.18322758,
                "99.999": 4238123.18322758,
                "99.9999": 4238123.18322758,
                "100.0": 4238123.18322758
            },
            "scoreUnit": "ops/s",
            "rawData": [
                [
                    4104993.211134234,
                    4015659.127951769,
                    4238123.18322758,
                    3843522.222398928,
                    4108778.9961713967
                ],
                [
                    4217403.931115654,
                    3994358.499915008,
                    3355748.326215153,
                    3706277.155798067,
                    3694882.2356196092
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
            "score": 4639755.816807859,
            "scoreError": 106763.32787896539,
            "scoreConfidence": [
                4532992.488928894,
                4746519.144686824
            ],
            "scorePercentiles": {
                "0.0": 4491022.321286812,
                "50.0": 4642401.145093676,
                "90.0": 4746383.118536301,
                "95.0": 4748573.707502764,
                "99.0": 4748573.707502764,
                "99.9": 4748573.707502764,
                "99.99": 4748573.707502764,
                "99.999": 4748573.707502764,
                "99.9999": 4748573.707502764,
                "100.0": 4748573.707502764
            },
            "scoreUnit": "ops/s",
            "rawData": [
                [
                    4491022.321286812,
                    4726667.817838135,
                    4639839.6901254095,
                    4646135.490626551,
                    4748573.707502764
                ],
                [
                    4632844.294254836,
                    4589895.8370635435,
                    4658316.978247522,
                    4619299.431071063,
                    4644962.600061942
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
            "score": 3386678.5670606,
            "scoreError": 140765.55192277327,
            "scoreConfidence": [
                3245913.0151378266,
                3527444.1189833735
            ],
            "scorePercentiles": {
                "0.0": 3218579.7410675054,
                "50.0": 3428363.397489608,
                "90.0": 3465525.7184336027,
                "95.0": 3465701.2109522037,
                "99.0": 3465701.2109522037,
                "99.9": 3465701.2109522037,
                "99.99": 3465701.2109522037,
                "99.999": 3465701.2109522037,
                "99.9999": 3465701.2109522037,
                "100.0": 3465701.2109522037
            },
            "scoreUnit": "ops/s",
            "rawData": [
                [
                    3465701.2109522037,
                    3462043.6362515804,
                    3452071.414854968,
                    3462564.8862212636,
                    3463946.2857661927
                ],
                [
                    3404655.3801242476,
                    3256176.477292624,
                    3330038.3665893287,
                    3218579.7410675054,
                    3351008.271486084
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
            "score": 298819.93809573614,
            "scoreError": 4911.713093571093,
            "scoreConfidence": [
                293908.22500216507,
                303731.6511893072
            ],
            "scorePercentiles": {
                "0.0": 292363.1384119453,
                "50.0": 300186.5834219452,
                "90.0": 301523.6931687772,
                "95.0": 301529.55531022145,
                "99.0": 301529.55531022145,
                "99.9": 301529.55531022145,
                "99.99": 301529.55531022145,
                "99.999": 301529.55531022145,
                "99.9999": 301529.55531022145,
                "100.0": 301529.55531022145
            },
            "scoreUnit": "ops/ms",
            "rawData": [
                [
                    301428.72978428035,
                    295428.2320370526,
                    292363.1384119453,
                    300632.87027732213,
                    300988.45904228196
                ],
                [
                    299740.2965665684,
                    301470.9338957791,
                    299208.29093980754,
                    301529.55531022145,
                    295408.87469210225
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
            "score": 291733.700349705,
            "scoreError": 6032.844825334045,
            "scoreConfidence": [
                285700.85552437097,
                297766.54517503903
            ],
            "scorePercentiles": {
                "0.0": 284918.38892700843,
                "50.0": 292070.614746033,
                "90.0": 298373.7590223232,
                "95.0": 298781.270125536,
                "99.0": 298781.270125536,
                "99.9": 298781.270125536,
                "99.99": 298781.270125536,
                "99.999": 298781.270125536,
                "99.9999": 298781.270125536,
                "100.0": 298781.270125536
            },
            "scoreUnit": "ops/ms",
            "rawData": [
                [
                    298781.270125536,
                    294134.0815001689,
                    293090.0454264358,
                    284918.38892700843,
                    289435.1598177072
                ],
                [
                    291392.35119081597,
                    292363.7687296352,
                    294706.1590934077,
                    291777.4607624307,
                    286738.3179239042
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
            "score": 291444.63418205956,
            "scoreError": 17905.542587284366,
            "scoreConfidence": [
                273539.0915947752,
                309350.1767693439
            ],
            "scorePercentiles": {
                "0.0": 269665.9839753484,
                "50.0": 295401.0369823201,
                "90.0": 305037.5562936196,
                "95.0": 305567.52926752873,
                "99.0": 305567.52926752873,
                "99.9": 305567.52926752873,
                "99.99": 305567.52926752873,
                "99.999": 305567.52926752873,
                "99.9999": 305567.52926752873,
                "100.0": 305567.52926752873
            },
            "scoreUnit": "ops/ms",
            "rawData": [
                [
                    287710.5813609986,
                    295732.4713751821,
                    300267.7995284377,
                    305567.52926752873,
                    269665.9839753484
                ],
                [
                    296550.7220384209,
                    294883.12884009746,
                    297362.81215764297,
                    295069.60258945805,
                    271635.7106874807
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
            "score": 227399.61865635595,
            "scoreError": 4826.023634613859,
            "scoreConfidence": [
                222573.59502174208,
                232225.64229096982
            ],
            "scorePercentiles": {
                "0.0": 221280.83399856192,
                "50.0": 228108.05612416708,
                "90.0": 231098.5644074739,
                "95.0": 231193.28750727806,
                "99.0": 231193.28750727806,
                "99.9": 231193.28750727806,
                "99.99": 231193.28750727806,
                "99.999": 231193.28750727806,
                "99.9999": 231193.28750727806,
                "100.0": 231193.28750727806
            },
            "scoreUnit": "ops/ms",
            "rawData": [
                [
                    228997.5429749246,
                    227218.56927340955,
                    230246.0565092363,
                    229799.6319756254,
                    231193.28750727806
                ],
                [
                    223195.54605132077,
                    221280.83399856192,
                    226394.60009921066,
                    229312.05994542243,
                    226358.0582285696
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
            "score": 284167.1558920726,
            "scoreError": 4598.334375971356,
            "scoreConfidence": [
                279568.82151610125,
                288765.49026804394
            ],
            "scorePercentiles": {
                "0.0": 281216.38141224155,
                "50.0": 283214.5459540064,
                "90.0": 288517.9256193677,
                "95.0": 288530.0328125064,
                "99.0": 288530.0328125064,
                "99.9": 288530.0328125064,
                "99.99": 288530.0328125064,
                "99.999": 288530.0328125064,
                "99.9999": 288530.0328125064,
                "100.0": 288530.0328125064
            },
            "scoreUnit": "ops/ms",
            "rawData": [
                [
                    281895.3321136599,
                    284533.7597943529,
                    288408.9608811189,
                    281330.81606887706,
                    281216.38141224155
                ],
                [
                    287272.8429385603,
                    281440.28955335356,
                    288530.0328125064,
                    281751.33041326434,
                    285291.8129327909
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
            "score": 223648.69935357495,
            "scoreError": 3914.8290656641084,
            "scoreConfidence": [
                219733.87028791083,
                227563.52841923907
            ],
            "scorePercentiles": {
                "0.0": 218929.64062305252,
                "50.0": 223787.8775546733,
                "90.0": 227709.70156894714,
                "95.0": 227880.83672564768,
                "99.0": 227880.83672564768,
                "99.9": 227880.83672564768,
                "99.99": 227880.83672564768,
                "99.999": 227880.83672564768,
                "99.9999": 227880.83672564768,
                "100.0": 227880.83672564768
            },
            "scoreUnit": "ops/ms",
            "rawData": [
                [
                    224666.71593486346,
                    222858.25833947462,
                    218929.64062305252,
                    221419.47766933072,
                    225321.87740030806
                ],
                [
                    226169.48515864246,
                    227880.83672564768,
                    221664.94657508304,
                    224238.84156929023,
                    223336.91354005635
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.StupidMultithreadedBenchmark.withThreads1",
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
            "score": 1423.0828350935349,
            "scoreError": 116.59361540046073,
            "scoreConfidence": [
                1306.4892196930741,
                1539.6764504939956
            ],
            "scorePercentiles": {
                "0.0": 1384.2649131781372,
                "50.0": 1439.623075206597,
                "90.0": 1452.9787767302555,
                "95.0": 1452.9787767302555,
                "99.0": 1452.9787767302555,
                "99.9": 1452.9787767302555,
                "99.99": 1452.9787767302555,
                "99.999": 1452.9787767302555,
                "99.9999": 1452.9787767302555,
                "100.0": 1452.9787767302555
            },
            "scoreUnit": "ops/us",
            "rawData": [
                [
                    1397.3183815473628,
                    1384.2649131781372,
                    1441.229028805322,
                    1452.9787767302555,
                    1439.623075206597
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.StupidMultithreadedBenchmark.withThreads2",
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
            "score": 2709.519000423132,
            "scoreError": 87.56441582162755,
            "scoreConfidence": [
                2621.954584601505,
                2797.0834162447595
            ],
            "scorePercentiles": {
                "0.0": 2686.413309242415,
                "50.0": 2711.49868359879,
                "90.0": 2735.28220924157,
                "95.0": 2735.28220924157,
                "99.0": 2735.28220924157,
                "99.9": 2735.28220924157,
                "99.99": 2735.28220924157,
                "99.999": 2735.28220924157,
                "99.9999": 2735.28220924157,
                "100.0": 2735.28220924157
            },
            "scoreUnit": "ops/us",
            "rawData": [
                [
                    2711.49868359879,
                    2686.5100633865604,
                    2686.413309242415,
                    2735.28220924157,
                    2727.8907366463245
                ]
            ]
        },
        "secondaryMetrics": {
        }
    },
    {
        "benchmark": "io.morethan.javabenchmarks.showcase.StupidMultithreadedBenchmark.withThreads4",
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
            "score": 2653.5588504588463,
            "scoreError": 322.2925950312916,
            "scoreConfidence": [
                2331.266255427555,
                2975.851445490138
            ],
            "scorePercentiles": {
                "0.0": 2533.704129579117,
                "50.0": 2701.4748531606174,
                "90.0": 2723.7185302367325,
                "95.0": 2723.7185302367325,
                "99.0": 2723.7185302367325,
                "99.9": 2723.7185302367325,
                "99.99": 2723.7185302367325,
                "99.999": 2723.7185302367325,
                "99.9999": 2723.7185302367325,
                "100.0": 2723.7185302367325
            },
            "scoreUnit": "ops/us",
            "rawData": [
                [
                    2533.704129579117,
                    2597.7182912767603,
                    2711.178448041006,
                    2701.4748531606174,
                    2723.7185302367325
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
            "score": 9.720560939364038,
            "scoreError": 0.035475505314495136,
            "scoreConfidence": [
                9.685085434049542,
                9.756036444678534
            ],
            "scorePercentiles": {
                "0.0": 9.626048472207733,
                "50.0": 9.73567258110794,
                "90.0": 9.769758283885812,
                "95.0": 9.774533778969898,
                "99.0": 9.77470574936922,
                "99.9": 9.77470574936922,
                "99.99": 9.77470574936922,
                "99.999": 9.77470574936922,
                "99.9999": 9.77470574936922,
                "100.0": 9.77470574936922
            },
            "scoreUnit": "ops/s",
            "rawData": [
                [
                    9.771266341382773,
                    9.689912790707364,
                    9.75192577275669,
                    9.73948367416809,
                    9.71917685449332,
                    9.742569266915211,
                    9.724065890258803,
                    9.745998937534079,
                    9.77470574936922,
                    9.75284160572918
                ],
                [
                    9.740820969677804,
                    9.626048472207733,
                    9.708648290014855,
                    9.739014872817748,
                    9.756185766413168,
                    9.682353544671871,
                    9.732330289398131,
                    9.674464364597622,
                    9.640132002173264,
                    9.699273331993851
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
            "score": 13.103216361160563,
            "scoreError": 0.554562105020922,
            "scoreConfidence": [
                12.54865425613964,
                13.657778466181485
            ],
            "scorePercentiles": {
                "0.0": 11.69138411193413,
                "50.0": 13.243260884827105,
                "90.0": 13.805892231512932,
                "95.0": 14.272693032386176,
                "99.0": 14.297076758113292,
                "99.9": 14.297076758113292,
                "99.99": 14.297076758113292,
                "99.999": 14.297076758113292,
                "99.9999": 14.297076758113292,
                "100.0": 14.297076758113292
            },
            "scoreUnit": "ops/s",
            "rawData": [
                [
                    12.813716003475431,
                    12.209675873406884,
                    12.566148179853077,
                    13.465742621758928,
                    12.214074149676756,
                    13.17859809149764,
                    14.297076758113292,
                    13.774302122990584,
                    12.789415847779553,
                    12.925793300413424
                ],
                [
                    12.753727123461843,
                    11.69138411193413,
                    13.30792367815657,
                    13.414623010334731,
                    12.750371267762569,
                    13.715873595485514,
                    13.485119656886157,
                    13.400087387329888,
                    13.501272199323363,
                    13.80940224357097
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
            "score": 18.925303096463146,
            "scoreError": 0.09174067692192324,
            "scoreConfidence": [
                18.833562419541224,
                19.01704377338507
            ],
            "scorePercentiles": {
                "0.0": 18.670319883572592,
                "50.0": 18.950608706725305,
                "90.0": 19.071328793764444,
                "95.0": 19.081872403484752,
                "99.0": 19.08237923703181,
                "99.9": 19.08237923703181,
                "99.99": 19.08237923703181,
                "99.999": 19.08237923703181,
                "99.9999": 19.08237923703181,
                "100.0": 19.08237923703181
            },
            "scoreUnit": "ops/s",
            "rawData": [
                [
                    18.946660527629554,
                    18.670319883572592,
                    18.956634621603758,
                    18.907518242155213,
                    18.932849763638018,
                    18.84783900206081,
                    18.86844508378116,
                    18.98023975685121,
                    18.954556885821052,
                    18.959712251480713
                ],
                [
                    18.97049630161875,
                    19.08237923703181,
                    19.07224256609067,
                    19.063104842828423,
                    18.98852473320667,
                    19.034620377875836,
                    18.831941830248795,
                    18.789810732244035,
                    18.815606119251033,
                    18.832559170272887
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
            "score": 1232.5640442301003,
            "scoreError": 16.254834602434073,
            "scoreConfidence": [
                1216.3092096276662,
                1248.8188788325344
            ],
            "scorePercentiles": {
                "0.0": 1189.2719891321963,
                "50.0": 1235.4598341426026,
                "90.0": 1257.0834705724762,
                "95.0": 1261.5005451192108,
                "99.0": 1261.7252426633238,
                "99.9": 1261.7252426633238,
                "99.99": 1261.7252426633238,
                "99.999": 1261.7252426633238,
                "99.9999": 1261.7252426633238,
                "100.0": 1261.7252426633238
            },
            "scoreUnit": "ops/ms",
            "rawData": [
                [
                    1244.2465968440688,
                    1248.186545432663,
                    1228.5547686779294,
                    1257.231291781064,
                    1241.8561465516923,
                    1189.2719891321963,
                    1239.2650262830512,
                    1218.9390614957422,
                    1261.7252426633238,
                    1255.7530796951846
                ],
                [
                    1251.8965125077725,
                    1226.4607379846957,
                    1238.788461401516,
                    1205.5034845771122,
                    1214.3125356599708,
                    1221.0561142888184,
                    1219.406271258334,
                    1238.7092432460838,
                    1232.2104250391217,
                    1217.9073500816658
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
            "score": 2482.36120971429,
            "scoreError": 43.430925106869964,
            "scoreConfidence": [
                2438.93028460742,
                2525.79213482116
            ],
            "scorePercentiles": {
                "0.0": 2375.4961105196376,
                "50.0": 2493.1303658067354,
                "90.0": 2547.4921392139067,
                "95.0": 2553.1584436515664,
                "99.0": 2553.4197038384445,
                "99.9": 2553.4197038384445,
                "99.99": 2553.4197038384445,
                "99.999": 2553.4197038384445,
                "99.9999": 2553.4197038384445,
                "100.0": 2553.4197038384445
            },
            "scoreUnit": "ops/ms",
            "rawData": [
                [
                    2375.4961105196376,
                    2446.0265056253575,
                    2436.1649057363857,
                    2418.634679371835,
                    2442.1190109599233,
                    2443.3248474699194,
                    2511.946343368905,
                    2548.1945001008853,
                    2464.532835886901,
                    2495.0979972908053
                ],
                [
                    2419.8880603037974,
                    2541.170891231101,
                    2517.0577694047647,
                    2553.4197038384445,
                    2520.6997977483325,
                    2510.2283585792716,
                    2531.342048874491,
                    2491.1627343226655,
                    2464.9126767543244,
                    2515.8044168980587
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
            "score": 2577.015618407858,
            "scoreError": 55.45729551206946,
            "scoreConfidence": [
                2521.5583228957885,
                2632.472913919927
            ],
            "scorePercentiles": {
                "0.0": 2486.941141134369,
                "50.0": 2553.4268563158457,
                "90.0": 2664.6842511392715,
                "95.0": 2670.7959652727473,
                "99.0": 2671.0444052381663,
                "99.9": 2671.0444052381663,
                "99.99": 2671.0444052381663,
                "99.999": 2671.0444052381663,
                "99.9999": 2671.0444052381663,
                "100.0": 2671.0444052381663
            },
            "scoreUnit": "ops/ms",
            "rawData": [
                [
                    2531.487304788759,
                    2523.7204807587304,
                    2540.7744765983625,
                    2512.5184385360362,
                    2491.251453101397,
                    2565.258757595716,
                    2517.899987633532,
                    2541.594955035975,
                    2514.763970144484,
                    2486.941141134369
                ],
                [
                    2652.1620580246836,
                    2625.989694101358,
                    2666.0756059297814,
                    2624.6275091539055,
                    2632.068777920603,
                    2649.0414329920404,
                    2649.3329927609707,
                    2538.0374688176207,
                    2605.7214578906546,
                    2671.0444052381663
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
            "score": 7870496.7469091145,
            "scoreError": 141377.7070183896,
            "scoreConfidence": [
                7729119.039890725,
                8011874.453927504
            ],
            "scorePercentiles": {
                "0.0": 7630215.947612508,
                "50.0": 7880679.187796734,
                "90.0": 8068046.6466478165,
                "95.0": 8182907.553955266,
                "99.0": 8188825.805588063,
                "99.9": 8188825.805588063,
                "99.99": 8188825.805588063,
                "99.999": 8188825.805588063,
                "99.9999": 8188825.805588063,
                "100.0": 8188825.805588063
            },
            "scoreUnit": "ops/s",
            "rawData": [
                [
                    7720431.373206782,
                    7630215.947612508,
                    7899412.570314197,
                    7861945.805279271,
                    7716381.786655143,
                    7736211.557372259,
                    7699896.049715508,
                    7643161.456714154,
                    7664459.679858834,
                    7953593.97196705
                ],
                [
                    7940223.807878903,
                    8004152.223822337,
                    8046319.510088986,
                    7852299.165351427,
                    8004248.091865736,
                    8188825.805588063,
                    7929946.084688053,
                    8070460.772932131,
                    7805261.53607844,
                    8042487.741192518
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
            "score": 7752286.576676935,
            "scoreError": 65980.15639577831,
            "scoreConfidence": [
                7686306.420281157,
                7818266.733072713
            ],
            "scorePercentiles": {
                "0.0": 7631511.382238919,
                "50.0": 7740542.910718743,
                "90.0": 7887242.876905806,
                "95.0": 7894152.611248321,
                "99.0": 7894332.822979467,
                "99.9": 7894332.822979467,
                "99.99": 7894332.822979467,
                "99.999": 7894332.822979467,
                "99.9999": 7894332.822979467,
                "100.0": 7894332.822979467
            },
            "scoreUnit": "ops/s",
            "rawData": [
                [
                    7631511.382238919,
                    7828931.853383864,
                    7894332.822979467,
                    7755426.550492676,
                    7795776.643123199,
                    7705011.0392727405,
                    7681621.167008719,
                    7759701.04190614,
                    7703593.864627915,
                    7797325.595790911
                ],
                [
                    7701762.833442314,
                    7693586.052831047,
                    7725659.2709448105,
                    7689888.425928756,
                    7761023.276326842,
                    7687562.848050304,
                    7815819.048017407,
                    7890728.588356554,
                    7855871.47384908,
                    7670597.754967043
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
            "score": 6205067.670166187,
            "scoreError": 67229.89454527058,
            "scoreConfidence": [
                6137837.775620917,
                6272297.564711457
            ],
            "scorePercentiles": {
                "0.0": 6083733.860085232,
                "50.0": 6225314.314084283,
                "90.0": 6306115.480493111,
                "95.0": 6348042.890157182,
                "99.0": 6350023.939210631,
                "99.9": 6350023.939210631,
                "99.99": 6350023.939210631,
                "99.999": 6350023.939210631,
                "99.9999": 6350023.939210631,
                "100.0": 6350023.939210631
            },
            "scoreUnit": "ops/s",
            "rawData": [
                [
                    6265309.402636327,
                    6191509.466830403,
                    6244419.974237843,
                    6100634.504067404,
                    6143235.36683608,
                    6212361.588578753,
                    6267528.181656318,
                    6310402.958141644,
                    6254192.8993548015,
                    6350023.939210631
                ],
                [
                    6095009.541504642,
                    6083733.860085232,
                    6232392.028141737,
                    6228923.813709855,
                    6238639.334971767,
                    6221704.814458711,
                    6251414.915276398,
                    6106577.81617057,
                    6087570.710049601,
                    6215768.287405011
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
            "score": 6197188.513157265,
            "scoreError": 134101.9321180812,
            "scoreConfidence": [
                6063086.581039184,
                6331290.445275347
            ],
            "scorePercentiles": {
                "0.0": 5744866.621647485,
                "50.0": 6232975.8056381615,
                "90.0": 6334923.499356576,
                "95.0": 6338734.586371619,
                "99.0": 6338878.1737786,
                "99.9": 6338878.1737786,
                "99.99": 6338878.1737786,
                "99.999": 6338878.1737786,
                "99.9999": 6338878.1737786,
                "100.0": 6338878.1737786
            },
            "scoreUnit": "ops/s",
            "rawData": [
                [
                    6203865.173613566,
                    5744866.621647485,
                    5857213.8569825655,
                    6281337.135585088,
                    6338878.1737786,
                    6146833.544198183,
                    6104908.628255288,
                    6258439.187212625,
                    6336006.42563899,
                    6258864.24652217
                ],
                [
                    6134078.686476224,
                    6321176.492048626,
                    6224908.424657691,
                    6241043.186618632,
                    6203697.178426477,
                    6325177.162814857,
                    6142755.075427841,
                    6316909.106619925,
                    6307231.317356554,
                    6195580.639263908
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
            "score": 29.778437237815126,
            "scoreError": 0.5000274254836085,
            "scoreConfidence": [
                29.278409812331518,
                30.278464663298735
            ],
            "scorePercentiles": {
                "0.0": 29.298313228571427,
                "50.0": 29.762874514705885,
                "90.0": 30.265445326470587,
                "95.0": 30.270317705882352,
                "99.0": 30.270317705882352,
                "99.9": 30.270317705882352,
                "99.99": 30.270317705882352,
                "99.999": 30.270317705882352,
                "99.9999": 30.270317705882352,
                "100.0": 30.270317705882352
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    29.804723735294118,
                    29.298313228571427,
                    29.6054895,
                    29.979263852941177,
                    29.950460588235295
                ],
                [
                    30.221593911764707,
                    29.72102529411765,
                    30.270317705882352,
                    29.559636647058824,
                    29.373547914285716
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
            "score": 91.97057891318181,
            "scoreError": 7.469265511950057,
            "scoreConfidence": [
                84.50131340123176,
                99.43984442513187
            ],
            "scorePercentiles": {
                "0.0": 87.90882425,
                "50.0": 90.16152470833333,
                "90.0": 102.77835316181819,
                "95.0": 103.4627172,
                "99.0": 103.4627172,
                "99.9": 103.4627172,
                "99.99": 103.4627172,
                "99.999": 103.4627172,
                "99.9999": 103.4627172,
                "100.0": 103.4627172
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    94.43166572727273,
                    91.44015963636363,
                    90.55290766666667,
                    103.4627172,
                    88.11490983333333
                ],
                [
                    96.61907681818182,
                    89.77014175,
                    88.90645183333334,
                    88.49893441666667,
                    87.90882425
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
            "score": 148.0109183714286,
            "scoreError": 1.7050609613001355,
            "scoreConfidence": [
                146.30585741012845,
                149.71597933272875
            ],
            "scorePercentiles": {
                "0.0": 146.28545785714286,
                "50.0": 147.93423164285713,
                "90.0": 149.55103502857142,
                "95.0": 149.5961937142857,
                "99.0": 149.5961937142857,
                "99.9": 149.5961937142857,
                "99.99": 149.5961937142857,
                "99.999": 149.5961937142857,
                "99.9999": 149.5961937142857,
                "100.0": 149.5961937142857
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    146.71730842857144,
                    146.28545785714286,
                    147.25779671428572,
                    149.5961937142857,
                    148.81371642857144
                ],
                [
                    147.782458,
                    148.0860052857143,
                    149.14460685714286,
                    147.3052927142857,
                    149.1203477142857
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
            "score": 243.54605942000003,
            "scoreError": 16.0116035164753,
            "scoreConfidence": [
                227.53445590352473,
                259.5576629364753
            ],
            "scorePercentiles": {
                "0.0": 237.5001272,
                "50.0": 240.6110997,
                "90.0": 270.32623466,
                "95.0": 273.477416,
                "99.0": 273.477416,
                "99.9": 273.477416,
                "99.99": 273.477416,
                "99.999": 273.477416,
                "99.9999": 273.477416,
                "100.0": 273.477416
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    239.736175,
                    241.1016056,
                    273.477416,
                    239.1817966,
                    239.9877472
                ],
                [
                    241.9656026,
                    241.2879246,
                    237.5001272,
                    240.6090264,
                    240.613173
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
            "score": 239.55012202000003,
            "scoreError": 1.9115213789737677,
            "scoreConfidence": [
                237.63860064102627,
                241.4616433989738
            ],
            "scorePercentiles": {
                "0.0": 238.0788256,
                "50.0": 239.4933633,
                "90.0": 241.58047951999998,
                "95.0": 241.6084704,
                "99.0": 241.6084704,
                "99.9": 241.6084704,
                "99.99": 241.6084704,
                "99.999": 241.6084704,
                "99.9999": 241.6084704,
                "100.0": 241.6084704
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    238.9565606,
                    239.617953,
                    241.3285616,
                    241.6084704,
                    238.0913088
                ],
                [
                    238.2492396,
                    238.0788256,
                    240.156854,
                    240.044673,
                    239.3687736
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
            "score": 170.5596383857143,
            "scoreError": 3.442083303492361,
            "scoreConfidence": [
                167.11755508222194,
                174.00172168920665
            ],
            "scorePercentiles": {
                "0.0": 166.88917285714285,
                "50.0": 169.73436366666667,
                "90.0": 173.77841673333333,
                "95.0": 173.812273,
                "99.0": 173.812273,
                "99.9": 173.812273,
                "99.99": 173.812273,
                "99.999": 173.812273,
                "99.9999": 173.812273,
                "100.0": 173.812273
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    173.13349616666667,
                    166.88917285714285,
                    169.67103616666665,
                    173.47371033333334,
                    171.0632805
                ],
                [
                    169.65940316666666,
                    169.53774833333333,
                    169.79769116666668,
                    168.55857216666666,
                    173.812273
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
            "score": 10441.613679700002,
            "scoreError": 122.42873701135396,
            "scoreConfidence": [
                10319.184942688647,
                10564.042416711356
            ],
            "scorePercentiles": {
                "0.0": 10344.985505,
                "50.0": 10436.0417395,
                "90.0": 10577.9716747,
                "95.0": 10584.131862,
                "99.0": 10584.131862,
                "99.9": 10584.131862,
                "99.99": 10584.131862,
                "99.999": 10584.131862,
                "99.9999": 10584.131862,
                "100.0": 10584.131862
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    10424.455566,
                    10345.924433,
                    10356.476119,
                    10344.985505,
                    10420.776923
                ],
                [
                    10453.350306,
                    10584.131862,
                    10515.878181,
                    10522.529989,
                    10447.627913
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
            "score": 102.82043561500002,
            "scoreError": 0.4380527159444815,
            "scoreConfidence": [
                102.38238289905554,
                103.2584883309445
            ],
            "scorePercentiles": {
                "0.0": 101.6477005,
                "50.0": 102.83322079999999,
                "90.0": 103.66935758,
                "95.0": 103.88421347,
                "99.0": 103.8923039,
                "99.9": 103.8923039,
                "99.99": 103.8923039,
                "99.999": 103.8923039,
                "99.9999": 103.8923039,
                "100.0": 103.8923039
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    102.645418,
                    103.1191181,
                    102.455062,
                    102.5086898,
                    102.2590581,
                    102.8756742,
                    102.4717682,
                    103.0929708,
                    101.6477005,
                    102.3702121
                ],
                [
                    103.0716888,
                    102.4720276,
                    102.7907674,
                    103.0200517,
                    103.0968525,
                    103.7304953,
                    103.0443723,
                    102.7756994,
                    103.0687816,
                    103.8923039
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
            "score": 78.58651684922162,
            "scoreError": 3.2123745126044136,
            "scoreConfidence": [
                75.37414233661721,
                81.79889136182604
            ],
            "scorePercentiles": {
                "0.0": 73.89258057142857,
                "50.0": 77.62722257692307,
                "90.0": 84.35221706730769,
                "95.0": 86.91431970416666,
                "99.0": 87.04268933333333,
                "99.9": 87.04268933333333,
                "99.99": 87.04268933333333,
                "99.999": 87.04268933333333,
                "99.9999": 87.04268933333333,
                "100.0": 87.04268933333333
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    77.79919192307692,
                    79.51373692307692,
                    79.88945446153846,
                    77.45525323076923,
                    73.89258057142857,
                    74.79498735714286,
                    80.57948661538461,
                    75.48975614285715,
                    84.47529675,
                    75.71785342857143
                ],
                [
                    83.24449992307693,
                    87.04268933333333,
                    74.38636614285714,
                    82.18212861538461,
                    79.89691430769231,
                    75.69838835714286,
                    77.33951715384616,
                    81.08515246153846,
                    76.9462645,
                    74.30081878571428
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
            "score": 52.83544450236842,
            "scoreError": 0.26916003429968133,
            "scoreConfidence": [
                52.56628446806874,
                53.1046045366681
            ],
            "scorePercentiles": {
                "0.0": 52.11078015,
                "50.0": 52.90217792105263,
                "90.0": 53.19426218947369,
                "95.0": 53.369965113157896,
                "99.0": 53.378549842105265,
                "99.9": 53.378549842105265,
                "99.99": 53.378549842105265,
                "99.999": 53.378549842105265,
                "99.9999": 53.378549842105265,
                "100.0": 53.378549842105265
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    53.378549842105265,
                    52.84163378947368,
                    52.92114668421053,
                    52.89440557894737,
                    52.909950263157896,
                    52.678885421052634,
                    52.4860788,
                    52.8671745,
                    52.95448057894737,
                    52.4831281
                ],
                [
                    52.2588159,
                    53.03835736842105,
                    53.08092452631579,
                    52.8524199,
                    53.071922368421056,
                    52.913831157894734,
                    52.11078015,
                    52.69957975,
                    53.2068552631579,
                    53.059970105263154
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
            "score": 102.2284532,
            "scoreError": "NaN",
            "scoreConfidence": [
                "NaN",
                "NaN"
            ],
            "scorePercentiles": {
                "0.0": 102.2284532,
                "50.0": 102.2284532,
                "90.0": 102.2284532,
                "95.0": 102.2284532,
                "99.0": 102.2284532,
                "99.9": 102.2284532,
                "99.99": 102.2284532,
                "99.999": 102.2284532,
                "99.9999": 102.2284532,
                "100.0": 102.2284532
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    102.2284532
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
            "score": 53.00664242105263,
            "scoreError": "NaN",
            "scoreConfidence": [
                "NaN",
                "NaN"
            ],
            "scorePercentiles": {
                "0.0": 53.00664242105263,
                "50.0": 53.00664242105263,
                "90.0": 53.00664242105263,
                "95.0": 53.00664242105263,
                "99.0": 53.00664242105263,
                "99.9": 53.00664242105263,
                "99.99": 53.00664242105263,
                "99.999": 53.00664242105263,
                "99.9999": 53.00664242105263,
                "100.0": 53.00664242105263
            },
            "scoreUnit": "ms/op",
            "rawData": [
                [
                    53.00664242105263
                ]
            ]
        },
        "secondaryMetrics": {
        }
    }
]