import BenchmarkRun from 'models/BenchmarkRun.js';

import DoingWorkSpinner from 'components/DoingWorkSpinner.jsx';

//A non-ui class which cares about upload file, converting them to json and passing them on to the AppState
export default class FileUploader {

    constructor(uploadBenchmarksFunction) {
        this.uploadBenchmarksFunction = uploadBenchmarksFunction;
    }

    upload(files) {
        if (files.length > 2) {
            alert(`Maximum 2 files allowed to upload, but not ${files.length}!`)
            return
        }
        DoingWorkSpinner.show();

        const benchmarkRuns = [];
        const uploadFunction = this.uploadBenchmarksFunction;
        files.forEach((file, i) => {
            const reader = new FileReader();
            const runName = file.name.replace('.json', '');
            reader.onload = function(evt) {
                try {
                    var parsedBenchmarks = JSON.parse(evt.target.result);
                    const benchmarkRun = new BenchmarkRun({
                        name: runName,
                        benchmarks: parsedBenchmarks
                    });
                    benchmarkRuns.push(benchmarkRun);
                    if (i == files.length - 1) {
                        benchmarkRuns.sort((a, b) => a.name.localeCompare(b.name));
                        uploadFunction(benchmarkRuns);
                    }
                } catch ( e ) {
                    alert(e); //error in the above string(in this case,yes)!
                    DoingWorkSpinner.hide();
                }
            };
            reader.readAsText(file);
        });
    }

}