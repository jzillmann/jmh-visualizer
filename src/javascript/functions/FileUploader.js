import BenchmarkRun from 'models/BenchmarkRun.js';

import DoingWorkSpinner from 'components/DoingWorkSpinner.jsx';

//A non-ui class which cares about upload file, converting them to json and passing them on to the AppState
export default class FileUploader {

    constructor(uploadBenchmarksFunction) {
        this.uploadBenchmarksFunction = uploadBenchmarksFunction;
    }

    upload(files) {
        DoingWorkSpinner.show();

        const benchmarkRuns = [];
        const uploadFunction = this.uploadBenchmarksFunction;
        files.forEach((file) => {
            const reader = new FileReader();
            const runName = file.name.replace('.json', '');
            reader.onload = function (evt) {
                try {
                    var parsedBenchmarks = JSON.parse(evt.target.result);
                    const benchmarkRun = new BenchmarkRun({
                        name: runName,
                        benchmarks: parsedBenchmarks
                    });
                    benchmarkRuns.push(benchmarkRun);
                    if (benchmarkRuns.length == files.length) {
                        benchmarkRuns.sort((a, b) => a.name.localeCompare(b.name));
                        uploadFunction(benchmarkRuns);
                    }
                } catch (e) {
                    alert(e); //error in the above string(in this case,yes)!
                    DoingWorkSpinner.hide();
                }
            };
            reader.readAsText(file);
        });
    }

}