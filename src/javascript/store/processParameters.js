import { getUniqueNames } from 'functions/util.js'
import BenchmarkRun from 'models/BenchmarkRun.js';


export function addSettingsFromParameters(settings) {
    const topBar = getParameterByName('topBar');
    if (topBar) {
        settings.topBar = topBar;
    }
}

export function getBenchmarksLoadFunctionForDefinedExamples(examples) {
    var example = getParameterByName('example');
    if (!example) {
        example = getExampleFromHash();
    }
    if (example === 'single') {
        return (initBenchmarksFunction) => initBenchmarksFunction(examples.singleRunExample);
    } else if (example === 'two') {
        return (initBenchmarksFunction) => initBenchmarksFunction(examples.twoRunsExample);
    } else if (example === 'multi') {
        return (initBenchmarksFunction) => initBenchmarksFunction(examples.multiRunExample);
    }
}

export function getBenchmarksLoadFunctionForSourceExamples() {
    const source = getParameterByName('source');
    if (source) {
        return (benchmarkLoadFunction) => fetchFromUrls(benchmarkLoadFunction, [source]);
    } else {
        const sources = getParameterByName('sources');
        if (sources) {
            return (benchmarkLoadFunction) => fetchFromUrls(benchmarkLoadFunction, sources.split(','));
        } else {
            const gist = getParameterByName('gist');
            if (gist) {
                return (benchmarkLoadFunction) => fetchFromGists(benchmarkLoadFunction, [gist]);
            } else {
                const gists = getParameterByName('gists');
                if (gists) {
                    return (benchmarkLoadFunction) => fetchFromGists(benchmarkLoadFunction, gists.split(','));
                }
            }
        }
    }
}

function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

function fetchFromUrls(benchmarkLoadFunction, urls) {
    const fetchedJsonByUrl = new Map();
    urls.forEach((url) => {
        fetch(url).then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        }).then((json) => {
            fetchedJsonByUrl.set(url, json);
            if (fetchedJsonByUrl.size == urls.length) {
                const uniqueNames = getUniqueNames(urls);
                benchmarkLoadFunction(uniqueNames.map((name, i) => new BenchmarkRun({
                    name: name,
                    benchmarks: fetchedJsonByUrl.get(urls[i])
                })));
            }
        }).catch(function (error) {
            alert(`Could not fetch data from ${url}: ${error}`);
        });
    });
}

function fetchFromGists(benchmarkLoadFunction, gists) {
    const benchmarkRuns = [];
    Promise.all(
      gists.map((gist) => {
        const url = `https://api.github.com/gists/${gist}`;
        return fetch(url)
          .then((response) => {
            if (!response.ok) {
              throw Error(response.statusText);
            }
            return response.json();
          })
          .catch((error) => {
            alert(`Could not fetch data from ${url}: ${error}`);
          });
      })
    )
      .then((jsons) => {
        jsons.forEach((json) => {
          Object.entries(json.files).forEach(([key, value]) => {
            benchmarkRuns.push(
              new BenchmarkRun({
                name: `${json.id}/${key}`,
                benchmarks: JSON.parse(value.content),
              })
            );
          });
        });
      })
      .then(() => {
        benchmarkLoadFunction(benchmarkRuns);
      });
}

// backwards compatibility - Jan 2018
function getExampleFromHash() {
    const urlHash = window.location.hash;
    if (urlHash === '#singleRunExample') {
        return 'single';
    } else if (urlHash === '#twoRunsExample') {
        return 'two';
    } else if (urlHash === '#multiRunExample') {
        return 'multi';
    }
}