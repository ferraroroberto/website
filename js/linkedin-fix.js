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
    
    // Check if we're in LinkedIn specifically
    function isLinkedInBrowser() {
        const userAgent = navigator.userAgent.toLowerCase();
        return /linkedin/i.test(userAgent) || 
               (window.self !== window.top && document.referrer.includes('linkedin'));
    }
    
    // Enhanced link handling for embedded browsers
    function enhanceLinksForEmbeddedBrowser() {
        const links = document.querySelectorAll('a.cta-button');
        
        links.forEach(link => {
            // Remove existing event listeners to avoid conflicts
            link.removeEventListener('click', handleEmbeddedLinkClick);
            
            // Add our enhanced click handler
            link.addEventListener('click', handleEmbeddedLinkClick);
            
            // Add visual indicator for embedded browsers
            if (isEmbeddedBrowser()) {
                link.style.position = 'relative';
                link.title = 'Tap and hold, then select "Open in Browser" for best experience';
            }
        });
    }
    
    // Handle link clicks in embedded browsers
    function handleEmbeddedLinkClick(event) {
        if (!isEmbeddedBrowser()) {
            return; // Let normal behavior handle it
        }
        
        event.preventDefault();
        const url = this.href;
        
        // Open the link outside the embedded browser, or show manual instructions
        if (!window.openLinkExternally(url)) {
            window.showLinkInstruction(url);
        }
    }
    
    // Initialize the fix when DOM is ready
    function initializeLinkedInFix() {
        if (isEmbeddedBrowser()) {
            // Enhance all links
            enhanceLinksForEmbeddedBrowser();
            
            // Re-enhance links when new content is added dynamically
            const observer = new MutationObserver(() => {
                enhanceLinksForEmbeddedBrowser();
            });
            
            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        }
    }
    
    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeLinkedInFix);
    } else {
        initializeLinkedInFix();
    }
    
    // Also run after a short delay to catch dynamically loaded content
    setTimeout(initializeLinkedInFix, 1000);
    
})();