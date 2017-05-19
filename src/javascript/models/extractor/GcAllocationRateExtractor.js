import GcExtractor from './GcExtractor.js'

export default class GcAllocationRateExtractor extends GcExtractor {

    constructor() {
        super('·gc.alloc.rate')
    }

}
