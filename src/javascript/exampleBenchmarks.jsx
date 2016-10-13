export const exampleBenchmarks = [{
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
        "score": 3327874.3653578595,
        "scoreError": 320897.49301746977,
        "scoreConfidence": [3006976.8723403895, 3648771.8583753295],
        "scorePercentiles": {
            "0.0": 2741752.1441862592,
            "50.0": 3390033.394120197,
            "90.0": 3475962.9023028915,
            "95.0": 3479523.3075099946,
            "99.0": 3479523.3075099946,
            "99.9": 3479523.3075099946,
            "99.99": 3479523.3075099946,
            "99.999": 3479523.3075099946,
            "99.9999": 3479523.3075099946,
            "100.0": 3479523.3075099946
        },
        "scoreUnit": "ops/s",
        "rawData": [[3408698.724162582, 3443919.255438961, 3359735.542804136, 3422235.547829266, 3334103.8393710456], [3307816.7098200293, 2741752.1441862592, 3409590.518378507, 3479523.3075099946, 3371368.064077812]]
    },
    "secondaryMetrics": {}
}, {
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
        "score": 4569955.186106403,
        "scoreError": 73499.80947518151,
        "scoreConfidence": [4496455.376631222, 4643454.995581585],
        "scorePercentiles": {
            "0.0": 4490884.362531282,
            "50.0": 4556053.757527746,
            "90.0": 4661862.932515275,
            "95.0": 4667164.9920431,
            "99.0": 4667164.9920431,
            "99.9": 4667164.9920431,
            "99.99": 4667164.9920431,
            "99.999": 4667164.9920431,
            "99.9999": 4667164.9920431,
            "100.0": 4667164.9920431
        },
        "scoreUnit": "ops/s",
        "rawData": [[4558080.619952256, 4614144.39676484, 4554026.895103237, 4542971.622329791, 4576751.772391525], [4490884.362531282, 4544175.727808067, 4604980.90449701, 4667164.9920431, 4546370.567642924]]
    },
    "secondaryMetrics": {}
}, {
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
        "score": 4649337.0854055,
        "scoreError": 142438.19026798988,
        "scoreConfidence": [4506898.895137509, 4791775.27567349],
        "scorePercentiles": {
            "0.0": 4537294.7567794025,
            "50.0": 4629376.077354884,
            "90.0": 4779260.357914272,
            "95.0": 4780301.959592424,
            "99.0": 4780301.959592424,
            "99.9": 4780301.959592424,
            "99.99": 4780301.959592424,
            "99.999": 4780301.959592424,
            "99.9999": 4780301.959592424,
            "100.0": 4780301.959592424
        },
        "scoreUnit": "ops/s",
        "rawData": [[4744352.7764358325, 4769885.9428109005, 4643092.584551441, 4780301.959592424, 4537456.372938238], [4537294.7567794025, 4704639.429913929, 4593615.993411705, 4615659.570158327, 4567071.467462793]]
    },
    "secondaryMetrics": {}
}, {
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
        "score": 3422905.523854898,
        "scoreError": 104395.35959877947,
        "scoreConfidence": [3318510.1642561182, 3527300.8834536774],
        "scorePercentiles": {
            "0.0": 3290844.892289364,
            "50.0": 3420453.5625884063,
            "90.0": 3507179.6971413516,
            "95.0": 3509315.9946997613,
            "99.0": 3509315.9946997613,
            "99.9": 3509315.9946997613,
            "99.99": 3509315.9946997613,
            "99.999": 3509315.9946997613,
            "99.9999": 3509315.9946997613,
            "100.0": 3509315.9946997613
        },
        "scoreUnit": "ops/s",
        "rawData": [[3404662.2849113164, 3348318.089538894, 3509315.9946997613, 3486940.6793426815, 3470505.3749213247], [3436244.840265496, 3487953.019115665, 3398862.7061899146, 3395407.3572745607, 3290844.892289364]]
    },
    "secondaryMetrics": {}
}, {
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
        "score": 9.661100879167014,
        "scoreError": 0.1070087189207254,
        "scoreConfidence": [9.554092160246288, 9.76810959808774],
        "scorePercentiles": {
            "0.0": 9.338399035048287,
            "50.0": 9.67908585523651,
            "90.0": 9.801603233324663,
            "95.0": 9.853418379305797,
            "99.0": 9.855976799062153,
            "99.9": 9.855976799062153,
            "99.99": 9.855976799062153,
            "99.999": 9.855976799062153,
            "99.9999": 9.855976799062153,
            "100.0": 9.855976799062153
        },
        "scoreUnit": "ops/s",
        "rawData": [[9.678587579092257, 9.678020063300155, 9.671296902897053, 9.772756697831365, 9.721052597325027, 9.632321274070371, 9.686238743956132, 9.660038272337472, 9.540734077322448, 9.69126389428267], [9.740922211523962, 9.624105720878337, 9.736352030083241, 9.647757796544584, 9.804808403935029, 9.382029200986079, 9.338399035048287, 9.855976799062153, 9.679584131380762, 9.67977215148292]]
    },
    "secondaryMetrics": {}
}, {
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
        "score": 12.903496037634966,
        "scoreError": 0.6192979203769032,
        "scoreConfidence": [12.284198117258063, 13.522793958011869],
        "scorePercentiles": {
            "0.0": 11.700850486848402,
            "50.0": 12.826338978714517,
            "90.0": 13.924495623215716,
            "95.0": 13.998726384449247,
            "99.0": 14.002206045695539,
            "99.9": 14.002206045695539,
            "99.99": 14.002206045695539,
            "99.999": 14.002206045695539,
            "99.9999": 14.002206045695539,
            "100.0": 14.002206045695539
        },
        "scoreUnit": "ops/s",
        "rawData": [[12.877008600375747, 13.732777446859549, 13.85144084522988, 13.75863476070583, 12.378730563865908, 11.936404507878654, 11.700850486848402, 12.8297874536188, 14.002206045695539, 12.536434458653225], [12.93104924027569, 12.822890503810232, 13.764615413666286, 12.059145011757717, 12.288753619393606, 13.059513396560781, 12.618401274028338, 12.527897374841455, 12.460766927863927, 13.932612820769698]]
    },
    "secondaryMetrics": {}
}, {
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
        "score": 18.931419124313173,
        "scoreError": 0.13719444086583793,
        "scoreConfidence": [18.794224683447336, 19.06861356517901],
        "scorePercentiles": {
            "0.0": 18.617186814241435,
            "50.0": 18.930498318200307,
            "90.0": 19.17488385317633,
            "95.0": 19.213274012751103,
            "99.0": 19.215227695942225,
            "99.9": 19.215227695942225,
            "99.99": 19.215227695942225,
            "99.999": 19.215227695942225,
            "99.9999": 19.215227695942225,
            "100.0": 19.215227695942225
        },
        "scoreUnit": "ops/s",
        "rawData": [[18.991385194318003, 18.617186814241435, 18.814525392694446, 18.998401769900227, 18.696126876703193, 18.89382804159688, 18.881810796979362, 19.17615403211976, 19.0263769494119, 18.881990336052255], [19.215227695942225, 19.030345004093313, 19.008364819121468, 18.731153458938817, 19.005258516515525, 18.93635463654262, 18.84704638046432, 19.163452242685448, 18.788751528084216, 18.924641999857997]]
    },
    "secondaryMetrics": {}
}, {
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
        "score": 9186911.744911809,
        "scoreError": 1120611.4848585585,
        "scoreConfidence": [8066300.26005325, 1.0307523229770366E7],
        "scorePercentiles": {
            "0.0": 5337041.663667044,
            "50.0": 9564624.584680963,
            "90.0": 1.0360282719400382E7,
            "95.0": 1.047056871497875E7,
            "99.0": 1.0476019938630663E7,
            "99.9": 1.0476019938630663E7,
            "99.99": 1.0476019938630663E7,
            "99.999": 1.0476019938630663E7,
            "99.9999": 1.0476019938630663E7,
            "100.0": 1.0476019938630663E7
        },
        "scoreUnit": "ops/s",
        "rawData": [[9512056.216762085, 1.0366995465592422E7, 9701785.085683761, 9539719.924723214, 1.017092034562062E7, 8545516.340624146, 9767357.714632422, 9053583.716880077, 9879671.117112165, 9589529.244638715], [9945887.001473054, 1.0476019938630663E7, 9454037.072723383, 1.0299868003672026E7, 8538415.368542824, 5337041.663667044, 6641062.694570666, 8197415.0304617295, 8630164.383391773, 1.0091188568833413E7]]
    },
    "secondaryMetrics": {}
}, {
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
        "score": 6937944.81108655,
        "scoreError": 1388117.7663271637,
        "scoreConfidence": [5549827.044759387, 8326062.577413714],
        "scorePercentiles": {
            "0.0": 2821331.634912043,
            "50.0": 7349408.307924929,
            "90.0": 8731399.585837817,
            "95.0": 8972147.148530927,
            "99.0": 8984311.963433092,
            "99.9": 8984311.963433092,
            "99.99": 8984311.963433092,
            "99.999": 8984311.963433092,
            "99.9999": 8984311.963433092,
            "100.0": 8984311.963433092
        },
        "scoreUnit": "ops/s",
        "rawData": [[6132478.545852617, 7873167.676144205, 8984311.963433092, 8636133.51068496, 7643733.627969897, 8741015.66538976, 8136801.318966711, 4858514.456899193, 7211058.1948148925, 5804058.981076494], [8644854.869870327, 7757936.859618778, 6458100.96024035, 2821331.634912043, 7487758.421034966, 5194951.166029565, 6103438.261379497, 5209590.105437616, 8077307.8938054815, 6982352.108170569]]
    },
    "secondaryMetrics": {}
}, {
    "benchmark": "io.morethan.javabenchmarks.string.ConcatenatedStringBenchmark.stringBufferPreSized",
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
        "score": 1.222915977203054E7,
        "scoreError": 325041.7376185356,
        "scoreConfidence": [1.1904118034412004E7, 1.2554201509649076E7],
        "scorePercentiles": {
            "0.0": 1.1506130176480526E7,
            "50.0": 1.2251566649929997E7,
            "90.0": 1.2737981430327045E7,
            "95.0": 1.2849637142076256E7,
            "99.0": 1.2855208428822167E7,
            "99.9": 1.2855208428822167E7,
            "99.99": 1.2855208428822167E7,
            "99.999": 1.2855208428822167E7,
            "99.9999": 1.2855208428822167E7,
            "100.0": 1.2855208428822167E7
        },
        "scoreUnit": "ops/s",
        "rawData": [[1.2140314630799092E7, 1.239131516441334E7, 1.2111878080410045E7, 1.219421543886718E7, 1.1506130176480526E7, 1.257712525811302E7, 1.1584498355722962E7, 1.2685770058134852E7, 1.193638747979E7, 1.2309217117666358E7], [1.2094505345760336E7, 1.1948071069541777E7, 1.1734253048981272E7, 1.2308917860992813E7, 1.2096013143398076E7, 1.2309612570745967E7, 1.2677892359458396E7, 1.2378087158608653E7, 1.2743782693903955E7, 1.2855208428822167E7]]
    },
    "secondaryMetrics": {}
}, {
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
        "score": 9802062.808632286,
        "scoreError": 159353.40192352267,
        "scoreConfidence": [9642709.406708764, 9961416.210555809],
        "scorePercentiles": {
            "0.0": 9329938.560091365,
            "50.0": 9832594.42849883,
            "90.0": 1.0029595498856904E7,
            "95.0": 1.0092594977404121E7,
            "99.0": 1.0095815775064794E7,
            "99.9": 1.0095815775064794E7,
            "99.99": 1.0095815775064794E7,
            "99.999": 1.0095815775064794E7,
            "99.9999": 1.0095815775064794E7,
            "100.0": 1.0095815775064794E7
        },
        "scoreUnit": "ops/s",
        "rawData": [[9604930.066490985, 9724652.36040725, 9834677.671110988, 9707783.485257087, 9853857.263118347, 9830511.185886675, 9617494.344023878, 9731953.447939206, 9329938.560091365, 9976200.913174422], [9565309.324372945, 9873000.943726152, 1.0031399821851345E7, 1.0095815775064794E7, 9901118.783434639, 9734999.231644023, 9777291.154083552, 1.0013356591906933E7, 9881717.37249608, 9955247.876565076]]
    },
    "secondaryMetrics": {}
}, {
    "benchmark": "io.morethan.javabenchmarks.string.ConcatenatedStringBenchmark.stringBuilderPreSized",
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
        "score": 1.3022707066547329E7,
        "scoreError": 144393.34740363134,
        "scoreConfidence": [1.2878313719143698E7, 1.316710041395096E7],
        "scorePercentiles": {
            "0.0": 1.2610809648001935E7,
            "50.0": 1.3021587669001635E7,
            "90.0": 1.3268779291852916E7,
            "95.0": 1.3297903244007386E7,
            "99.0": 1.329926890058734E7,
            "99.9": 1.329926890058734E7,
            "99.99": 1.329926890058734E7,
            "99.999": 1.329926890058734E7,
            "99.9999": 1.329926890058734E7,
            "100.0": 1.329926890058734E7
        },
        "scoreUnit": "ops/s",
        "rawData": [[1.2970918928305276E7, 1.3240190997634815E7, 1.3095388613889819E7, 1.3078542275795419E7, 1.2963957561510814E7, 1.3075223089242991E7, 1.2895378637162266E7, 1.2920956404707579E7, 1.3089992950538702E7, 1.3201763677691253E7], [1.2990423227508971E7, 1.329926890058734E7, 1.2610809648001935E7, 1.2940327690763598E7, 1.3095617544096109E7, 1.3052752110494297E7, 1.3271955768988261E7, 1.2987124566411609E7, 1.288618598666263E7, 1.2787362750952892E7]]
    },
    "secondaryMetrics": {}
}, {
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
        "score": 8184332.977597943,
        "scoreError": 156116.30700232557,
        "scoreConfidence": [8028216.670595617, 8340449.284600268],
        "scorePercentiles": {
            "0.0": 7841705.562531173,
            "50.0": 8155933.547709832,
            "90.0": 8455408.072995154,
            "95.0": 8534347.144415926,
            "99.0": 8538296.603148676,
            "99.9": 8538296.603148676,
            "99.99": 8538296.603148676,
            "99.999": 8538296.603148676,
            "99.9999": 8538296.603148676,
            "100.0": 8538296.603148676
        },
        "scoreUnit": "ops/s",
        "rawData": [[8024595.861847097, 8034813.844651854, 8140351.450235111, 8012967.44881502, 8143886.798504091, 8234485.937977688, 8101314.402176064, 8057638.76970152, 7989071.443880056, 8053726.904672964], [8294336.172007196, 8459307.42849368, 8337818.283966416, 8211741.142441483, 8381310.479735952, 8420313.873508414, 8167980.296915572, 8538296.603148676, 8240996.846748863, 7841705.562531173]]
    },
    "secondaryMetrics": {}
}, {
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
        "score": 8125444.578145705,
        "scoreError": 110229.3479100085,
        "scoreConfidence": [8015215.230235697, 8235673.926055714],
        "scorePercentiles": {
            "0.0": 7779506.009876886,
            "50.0": 8144767.650738879,
            "90.0": 8243902.659942487,
            "95.0": 8310798.436789806,
            "99.0": 8314293.549033195,
            "99.9": 8314293.549033195,
            "99.99": 8314293.549033195,
            "99.999": 8314293.549033195,
            "99.9999": 8314293.549033195,
            "100.0": 8314293.549033195
        },
        "scoreUnit": "ops/s",
        "rawData": [[8314293.549033195, 8244391.304165424, 8197205.718389793, 8180491.418192185, 8146452.5519050555, 8187398.858697417, 8239504.861936062, 8112797.604968474, 8126449.531770895, 8012627.606535541], [8099296.055604097, 8212525.971832177, 8215692.387173457, 8198724.064470405, 8143082.749572703, 8128229.565522709, 7779506.009876886, 8071009.938589146, 7874050.218265394, 8025161.596413078]]
    },
    "secondaryMetrics": {}
}, {
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
        "score": 6287089.598741502,
        "scoreError": 305226.8525513633,
        "scoreConfidence": [5981862.746190138, 6592316.451292865],
        "scorePercentiles": {
            "0.0": 4908742.138459294,
            "50.0": 6365439.624978909,
            "90.0": 6509894.0663225325,
            "95.0": 6586904.308933291,
            "99.0": 6590760.76980824,
            "99.9": 6590760.76980824,
            "99.99": 6590760.76980824,
            "99.999": 6590760.76980824,
            "99.9999": 6590760.76980824,
            "100.0": 6590760.76980824
        },
        "scoreUnit": "ops/s",
        "rawData": [[6352794.518216861, 6347599.167363537, 6398502.989580522, 6317768.139273964, 6273783.039009116, 6174896.9050930925, 6363819.190497256, 6297802.197944916, 6393716.124532957, 6367060.059460564], [6476256.692442147, 6398421.305052531, 6345487.920751019, 6432539.371647225, 6513631.552309242, 6590760.76980824, 6466589.898607274, 6394677.022270452, 4908742.138459294, 5926942.972509803]]
    },
    "secondaryMetrics": {}
}, {
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
        "score": 6209167.731743028,
        "scoreError": 197871.4583339864,
        "scoreConfidence": [6011296.273409042, 6407039.190077015],
        "scorePercentiles": {
            "0.0": 5701340.042597328,
            "50.0": 6252116.97858214,
            "90.0": 6472309.105079873,
            "95.0": 6499721.125807123,
            "99.0": 6500922.020613847,
            "99.9": 6500922.020613847,
            "99.99": 6500922.020613847,
            "99.999": 6500922.020613847,
            "99.9999": 6500922.020613847,
            "100.0": 6500922.020613847
        },
        "scoreUnit": "ops/s",
        "rawData": [[6318372.770897952, 6429272.928908575, 6019640.635415179, 6080425.9379032785, 6476904.124479359, 6258131.694293903, 5701340.042597328, 6088361.330839812, 6203656.677244529, 6500922.020613847], [5748701.925244147, 5880140.835293113, 6289997.307164415, 6224139.967190127, 6243586.074389179, 6385580.825004752, 6370788.564880865, 6430953.930484501, 6246102.262870376, 6286334.779145318]]
    },
    "secondaryMetrics": {}
}, {
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
        "score": 102.96369450499999,
        "scoreError": 0.5392133328422525,
        "scoreConfidence": [102.42448117215774, 103.50290783784224],
        "scorePercentiles": {
            "0.0": 101.8706512,
            "50.0": 102.9815181,
            "90.0": 103.80274248,
            "95.0": 104.063668585,
            "99.0": 104.0771046,
            "99.9": 104.0771046,
            "99.99": 104.0771046,
            "99.999": 104.0771046,
            "99.9999": 104.0771046,
            "100.0": 104.0771046
        },
        "scoreUnit": "ms/op",
        "rawData": [[102.6502062, 103.5056136, 103.0914996, 102.9993287, 103.519912, 102.7445547, 104.0771046, 102.2804964, 103.596602, 102.5009409], [103.8083843, 103.2647423, 103.7519661, 102.9637075, 102.8652918, 102.0512324, 101.8706512, 102.3895901, 102.3004356, 103.0416301]]
    },
    "secondaryMetrics": {}
}, {
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
        "score": 78.59188876043956,
        "scoreError": 3.2979305599910385,
        "scoreConfidence": [75.29395820044851, 81.8898193204306],
        "scorePercentiles": {
            "0.0": 72.25060757142857,
            "50.0": 77.4407465,
            "90.0": 84.37775954807691,
            "95.0": 86.1135215,
            "99.0": 86.19929791666667,
            "99.9": 86.19929791666667,
            "99.99": 86.19929791666667,
            "99.999": 86.19929791666667,
            "99.9999": 86.19929791666667,
            "100.0": 86.19929791666667
        },
        "scoreUnit": "ms/op",
        "rawData": [[78.92505884615385, 75.61938064285714, 76.031621, 76.84925357142858, 77.7294666923077, 83.01851076923077, 76.72744192857142, 77.15202630769231, 80.01527653846153, 75.617074], [80.93590992307692, 75.75525228571429, 79.4192076923077, 82.20818392307692, 73.06387092857143, 76.41289585714286, 83.42366923076924, 84.48376958333333, 86.19929791666667, 72.25060757142857]]
    },
    "secondaryMetrics": {}
}, {
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
        "score": 52.91480844513158,
        "scoreError": 0.45668009521113573,
        "scoreConfidence": [52.45812834992044, 53.37148854034271],
        "scorePercentiles": {
            "0.0": 52.0048736,
            "50.0": 52.95588268421052,
            "90.0": 53.436341215789476,
            "95.0": 54.12465799210526,
            "99.0": 54.160845,
            "99.9": 54.160845,
            "99.99": 54.160845,
            "99.999": 54.160845,
            "99.9999": 54.160845,
            "100.0": 54.160845
        },
        "scoreUnit": "ms/op",
        "rawData": [[53.0042712631579, 53.27994136842105, 52.8940572, 54.160845, 53.22262852631579, 52.88270545, 52.907494105263154, 52.20909085, 53.073404, 52.70381025], [53.12348163157895, 53.43710484210526, 53.42946857894737, 52.5033125, 53.136606578947365, 52.2183732, 52.2495537, 52.0048736, 53.34083715789474, 52.5143091]]
    },
    "secondaryMetrics": {}
}, {
    "benchmark": "io.morethan.javabenchmarks.showcase.MultithreadedBenchmark.fourThread",
    "mode": "avgt",
    "threads": 4,
    "forks": 1,
    "warmupIterations": 0,
    "warmupTime": "1 s",
    "warmupBatchSize": 1,
    "measurementIterations": 5,
    "measurementTime": "1 s",
    "measurementBatchSize": 1,
    "primaryMetric": {
        "score": 501.95513313333333,
        "scoreError": 4.291587579598147,
        "scoreConfidence": [497.66354555373516, 506.2467207129315],
        "scorePercentiles": {
            "0.0": 500.304618,
            "50.0": 502.31742212499995,
            "90.0": 502.9835435416667,
            "95.0": 502.9835435416667,
            "99.0": 502.9835435416667,
            "99.9": 502.9835435416667,
            "99.99": 502.9835435416667,
            "99.999": 502.9835435416667,
            "99.9999": 502.9835435416667,
            "100.0": 502.9835435416667
        },
        "scoreUnit": "ms/op",
        "rawData": [[501.3702992916666, 502.9835435416667, 500.304618, 502.31742212499995, 502.79978270833334]]
    },
    "secondaryMetrics": {}
}, {
    "benchmark": "io.morethan.javabenchmarks.showcase.MultithreadedBenchmark.fourThreadVary",
    "mode": "avgt",
    "threads": 4,
    "forks": 1,
    "warmupIterations": 0,
    "warmupTime": "1 s",
    "warmupBatchSize": 1,
    "measurementIterations": 5,
    "measurementTime": "1 s",
    "measurementBatchSize": 1,
    "primaryMetric": {
        "score": 352.36515710916666,
        "scoreError": 2.5338658555272633,
        "scoreConfidence": [349.8312912536394, 354.8990229646939],
        "scorePercentiles": {
            "0.0": 351.6858741666667,
            "50.0": 352.2729994375,
            "90.0": 353.4138643,
            "95.0": 353.4138643,
            "99.0": 353.4138643,
            "99.9": 353.4138643,
            "99.99": 353.4138643,
            "99.999": 353.4138643,
            "99.9999": 353.4138643,
            "100.0": 353.4138643
        },
        "scoreUnit": "ms/op",
        "rawData": [[352.2729994375, 351.6858741666667, 351.9776193916666, 352.47542825, 353.4138643]]
    },
    "secondaryMetrics": {}
}, {
    "benchmark": "io.morethan.javabenchmarks.showcase.MultithreadedBenchmark.oneThread",
    "mode": "avgt",
    "threads": 1,
    "forks": 1,
    "warmupIterations": 0,
    "warmupTime": "1 s",
    "warmupBatchSize": 1,
    "measurementIterations": 5,
    "measurementTime": "1 s",
    "measurementBatchSize": 1,
    "primaryMetric": {
        "score": 502.65429800000004,
        "scoreError": 3.352561745254605,
        "scoreConfidence": [499.30173625474544, 506.00685974525464],
        "scorePercentiles": {
            "0.0": 501.58803133333333,
            "50.0": 503.0852345,
            "90.0": 503.3924755,
            "95.0": 503.3924755,
            "99.0": 503.3924755,
            "99.9": 503.3924755,
            "99.99": 503.3924755,
            "99.999": 503.3924755,
            "99.9999": 503.3924755,
            "100.0": 503.3924755
        },
        "scoreUnit": "ms/op",
        "rawData": [[503.0852345, 501.58803133333333, 503.364221, 503.3924755, 501.84152766666665]]
    },
    "secondaryMetrics": {}
}, {
    "benchmark": "io.morethan.javabenchmarks.showcase.MultithreadedBenchmark.twoThread",
    "mode": "avgt",
    "threads": 2,
    "forks": 1,
    "warmupIterations": 0,
    "warmupTime": "1 s",
    "warmupBatchSize": 1,
    "measurementIterations": 5,
    "measurementTime": "1 s",
    "measurementBatchSize": 1,
    "primaryMetric": {
        "score": 503.03157029999994,
        "scoreError": 4.7176930789593365,
        "scoreConfidence": [498.3138772210406, 507.74926337895926],
        "scorePercentiles": {
            "0.0": 501.07400099999995,
            "50.0": 503.5204925,
            "90.0": 504.0302155,
            "95.0": 504.0302155,
            "99.0": 504.0302155,
            "99.9": 504.0302155,
            "99.99": 504.0302155,
            "99.999": 504.0302155,
            "99.9999": 504.0302155,
            "100.0": 504.0302155
        },
        "scoreUnit": "ms/op",
        "rawData": [[501.07400099999995, 503.9089495, 504.0302155, 502.624193, 503.5204925]]
    },
    "secondaryMetrics": {}
}, {
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
        "score": 102.5980399,
        "scoreError": "NaN",
        "scoreConfidence": ["NaN", "NaN"],
        "scorePercentiles": {
            "0.0": 102.5980399,
            "50.0": 102.5980399,
            "90.0": 102.5980399,
            "95.0": 102.5980399,
            "99.0": 102.5980399,
            "99.9": 102.5980399,
            "99.99": 102.5980399,
            "99.999": 102.5980399,
            "99.9999": 102.5980399,
            "100.0": 102.5980399
        },
        "scoreUnit": "ms/op",
        "rawData": [[102.5980399]]
    },
    "secondaryMetrics": {}
}, {
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
        "score": 52.6156144,
        "scoreError": "NaN",
        "scoreConfidence": ["NaN", "NaN"],
        "scorePercentiles": {
            "0.0": 52.6156144,
            "50.0": 52.6156144,
            "90.0": 52.6156144,
            "95.0": 52.6156144,
            "99.0": 52.6156144,
            "99.9": 52.6156144,
            "99.99": 52.6156144,
            "99.999": 52.6156144,
            "99.9999": 52.6156144,
            "100.0": 52.6156144
        },
        "scoreUnit": "ms/op",
        "rawData": [[52.6156144]]
    },
    "secondaryMetrics": {}
}]





