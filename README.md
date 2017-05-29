# JMH Visualizer

Visualize [JMH](http://openjdk.java.net/projects/code-tools/jmh/) Benchmarks! Online version at http://jmh.morethan.io!

## Features

- Vizualize the benchmarks of a single JSON result grouped by benchmark class
  - Vertical bar-chart with score and score error 
  - Link to the original JSON
  - Show individual runs as tooltip
- Compare the benchmarks of 2 runs (two JSON files) grouped by benchmark class
  - Vertical bar-chart from -100% to 100%
  - Link to the original JSON
  - Show score and error of both runs in tooltip
- Visualize secondary metrics like '·gc.alloc.rate'

## Major Changes

- **May 2017** - 0.4 Secondary Metrics support
- **Apr 2017** - 0.3 Error Bars & Params support
- **Nov 2016** - 0.2: Add 2 run compare view
- **Okt 2016** - 0.1: Initial Release

## Tips & Tricks

While this app will visualize any valid JMH JSON you throw at it, you can write your benchmarks in a way that make the visualization much more enjoyable...

- Put those benchmarks in a single class which you most likely wanne compare to each other
- Don't mix incompatible benchmark styles into one class (like mixing average and single shot is ok, but mixing avarage and throughput will screw up the chart)
- On the other hand, don't put to much stuff in a single class/chart (since readability will suffer) - deconstruct
- Sensibly design your package structure, your class name and you methods names, those are reflected in the auto-generated charts
- Keep method names short but meaningful
- The method names reflect initial sort, so if you have benchmarks called 'with1Threads, with10Threads' naming them 'with01Thread, with10Thread' will display nicer


## Contribute

Use the [issue tracker](https://github.com/jzillmann/jmh-visualizer/issues) and/or open [pull requests](https://github.com/jzillmann/jmh-visualizer/pulls)!

#### Useful Commands

- ```npm install``` Download all necessary npm packages
- ```npm run lint``` Lint the javascript files
- ```npm run test``` Run tests
- ```npm run check``` Run Lint & Test
- ```npm run watch``` Continuously build the project
- ```open build/index.html``` Open the build project in your default browser
- ```npm run release``` Build production version
- ```npm run deploy``` Build production version & move it to the github pages fodler

#### Realease
- Increase version in package.json
- ```npm run deploy```
- commit & push
- tag with
  - _git tag -a $releaseVersion -m "$releaseVersion release"_
  - _git push --tags_

## Credits

http://recharts.org/ - The chart ground work
http://www.favicon.cc/ - Created the favicon with

Babel, webpack, react,... and many more for an enjoyable webstack!