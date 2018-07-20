// Helper that abstracts selected data to view decicions 
export default class ViewSelection {

    constructor() {
        this.numberOfBenchmarkRuns = 0;
        this.uploadedBenchmarks = false;
        this.detailedBenchmarkBundle = null; // bundleKey
        this.focusedBundles = new Set(); // bundleKeys[]
        this.runView = null;
        this.runSelection = []; // boolean[runs]
    }

    showUploadView() {
        return this.numberOfBenchmarkRuns == 0;
    }

    showDetailedView() {
        return this.detailedBenchmarkBundle ? true : false;
    }

    showSummaryView() {
        if (this.numberOfBenchmarkRuns < 2) {
            return false;
        }
        if (this.runView !== 'Summary') {
            return false;
        }
        for (var runSelected of this.runSelection) {
            if (!runSelected) {
                return false;
            }
        }
        return true;
    }

    shouldFilterFocusedBenchmarks() {
        return this.focusedBundles.size > 0 && !this.showSummaryView();
    }

    initBenchmarkRuns(numberOfBenchmarkRuns) {
        this.numberOfBenchmarkRuns = numberOfBenchmarkRuns;
        this.runSelection = Array(numberOfBenchmarkRuns).fill(true);
        if (numberOfBenchmarkRuns > 1) {
            this.runView = 'Summary';
        }
    }

    focusBundle(benchmarkBundleName) {
        const alreadyFocused = this.focusedBundles.has(benchmarkBundleName);
        if (alreadyFocused) {
            this.focusedBundles.delete(benchmarkBundleName);
        } else {
            this.focusedBundles.add(benchmarkBundleName);
        }
    }

    getPossibleRunViews() {
        if (this.numberOfBenchmarkRuns < 2) {
            return [];
        }
        if (this.detailedBenchmarkBundle) {
            return ['Compare']
        }
        return ['Summary', 'Compare'];
    }
}