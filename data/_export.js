// Shared data exporter
// Collapses the repeated "window.X = X;" tail that every data file used to
// carry. Each data file ends with a single exposeData() call.
//
// Browser-only: the site ships no build step, and nothing requires() these
// files directly (production path is <script src> in workshop.html). A
// prior version also stubbed a CommonJS `module.exports = value` branch to
// promise dual browser/CommonJS support, but it was dead: exposeData()
// closes over *this* file's own `module`, so `module.exports = value` could
// never reach a data file's own module.exports — requiring a data file
// always returned `{}`. Removed rather than "fixed" since nothing consumes it.
//
// Load order: this file must be included before any data file that calls it.

function exposeData(name, value) {
    if (typeof window !== 'undefined') {
        window[name] = value;
    }
    return value;
}

if (typeof window !== 'undefined') {
    window.exposeData = exposeData;
}
