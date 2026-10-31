// LinkedIn and Social Media In-App Browser Fix
// This script detects when the site is running in an embedded browser
// and provides alternative link handling to ensure external links work properly

(function() {
    'use strict';

    // Detect if we're in an embedded browser (LinkedIn, Facebook, Instagram, etc.)
    function isEmbeddedBrowser() {
        const userAgent = navigator.userAgent.toLowerCase();
        const isInApp = /linkedin|facebook|instagram|twitter|whatsapp|telegram|wechat|line/i.test(userAgent);
        const isWebView = /wv|webview/i.test(userAgent);
        const isInFrame = window.self !== window.top;

        return isInApp || isWebView || isInFrame;
    }

    // One delegated listener covers every CTA, including the ones main.js renders after load.
    document.addEventListener('click', function(event) {
        const link = event.target.closest('a.cta-button');
        if (!link || !isEmbeddedBrowser()) {
            return; // Let normal behavior handle it
        }

        event.preventDefault();

        // Open the link outside the embedded browser, or show manual instructions
        if (!window.openLinkExternally(link.href)) {
            window.showLinkInstruction(link.href);
        }
    });
})();
