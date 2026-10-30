// Shared data exporter
// Collapses the repeated "window.X = X;" tail that every data file used to
// carry. Each data file ends with a single exposeData() call.
//
// Browser-only: the site ships no build step, and nothing requires() these
// files directly — production path is <script src> in workshop.html.
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
