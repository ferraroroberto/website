// Tries a series of ways to open a URL outside an embedded browser.
// Returns true as soon as one works, false if all of them fail.

(function() {
    'use strict';

    function openLinkExternally(url) {
        // Try multiple methods to open the link externally
        const methods = [
            // Method 1: Try to open in new window
            () => {
                const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
                if (newWindow) {
                    newWindow.focus();
                    return true;
                }
                return false;
            },

            // Method 2: Try to navigate parent window
            () => {
                if (window.parent && window.parent !== window) {
                    window.parent.location.href = url;
                    return true;
                }
                return false;
            },

            // Method 3: Try to navigate top window
            () => {
                if (window.top && window.top !== window) {
                    window.top.location.href = url;
                    return true;
                }
                return false;
            },

            // Method 4: Try to navigate current window
            () => {
                window.location.href = url;
                return true;
            }
        ];

        // Try each method until one works
        for (const method of methods) {
            try {
                if (method()) {
                    return true;
                }
            } catch (e) {
                console.log('Link opening method failed:', e);
            }
        }
        return false;
    }

    window.openLinkExternally = openLinkExternally;
})();
