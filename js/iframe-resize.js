// Iframe auto-resize
// Reports this page's content height to the parent window so an embedding
// iframe (e.g. on Squarespace) can grow to fit without scrollbars.
// Referenced by every page that may be embedded.

(function () {
    function sendHeight() {
        const height = document.documentElement.scrollHeight || document.body.scrollHeight;
        parent.postMessage({ type: 'setHeight', height: height }, '*');
    }

    window.addEventListener('load', sendHeight);
    window.addEventListener('resize', sendHeight);
    setInterval(sendHeight, 1000); // fallback for dynamic content changes
})();
