// Shared data exporter
// Collapses the repeated "module.exports = X; window.X = X;" tail that every
// data file used to carry. Each data file ends with a single exposeData() call.
//
// Load order: this file must be included before any data file that calls it.

function exposeData(name, value) {
    // CommonJS consumers (if a future build step requires() the file)
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = value;
    }
    // Browser: attach to window for the inline data-driven page
    if (typeof window !== 'undefined') {
        window[name] = value;
    }
    return value;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = exposeData;
}
if (typeof window !== 'undefined') {
    window.exposeData = exposeData;
}
