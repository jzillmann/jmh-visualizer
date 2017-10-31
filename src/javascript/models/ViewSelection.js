// Helper that abstracts selected data to view decicions 
export default class ViewSelection {

    constructor() {
        this.hasBenchmarks = false;
        this.uploadedBenchmarks = false;
        this.detailedBenchmarkBundle = null; // bundleKey
        this.focusedBundles = new Set(); // bundleKeys[]
        this.runView = 'Summary';
        this.runSelection = []; // boolean[runs]
    }

    showUploadView() {
        return !this.hasBenchmarks;
    }

    shouldPreventPageReload() {
        return this.hasBenchmarks && this.uploadedBenchmarks;
    }

    showDetailedView() {
        return this.detailedBenchmarkBundle ? true : false;
    }

    showSummaryView() {
        if (this.runView !== 'Summary') {
            return false;
        }
        if (this.runSelection.length < 2) {
            return false;
        }
        for ( var runSelected of this.runSelection ) {
            if (!runSelected) {
                return false;
            }
        }
        return true;
    }

    shouldFilterFocusedBenchmarks() {
        return this.focusedBundles.size > 0 && !this.showSummaryView();
    }

    focusBundle(benchmarkBundleName) {
        const alreadyFocused = this.focusedBundles.has(benchmarkBundleName);
        if (alreadyFocused) {
            this.focusedBundles.delete(benchmarkBundleName);
        } else {
            this.focusedBundles.add(benchmarkBundleName);
        }
    }
}