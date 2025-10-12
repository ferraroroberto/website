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
        const links = document.querySelectorAll('a[href^="https://lu.ma/"], a.cta-button');
        
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
        let success = false;
        for (const method of methods) {
            try {
                if (method()) {
                    success = true;
                    break;
                }
            } catch (e) {
                console.log('Link opening method failed:', e);
            }
        }
        
        // If all methods failed, show user instruction
        if (!success) {
            showLinkInstruction(url);
        }
    }
    
    // Show instruction for manual link opening
    function showLinkInstruction(url) {
        const instruction = document.createElement('div');
        instruction.innerHTML = `
            <div style="
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: white;
                padding: 30px;
                border-radius: 12px;
                box-shadow: 0 8px 32px rgba(0,0,0,0.3);
                z-index: 10001;
                max-width: 400px;
                text-align: center;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            ">
                <div style="font-size: 24px; margin-bottom: 15px;">🔗</div>
                <h3 style="margin: 0 0 15px 0; color: #333;">Open in External Browser</h3>
                <p style="margin: 0 0 20px 0; color: #666; line-height: 1.5;">
                    To access the workshop registration, please copy this link and open it in your regular browser:
                </p>
                <div style="
                    background: #f5f5f5;
                    padding: 10px;
                    border-radius: 6px;
                    margin: 15px 0;
                    word-break: break-all;
                    font-family: monospace;
                    font-size: 12px;
                ">${url}</div>
                <button onclick="navigator.clipboard.writeText('${url}').then(() => alert('Link copied!'))" style="
                    background: #0077b5;
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 6px;
                    cursor: pointer;
                    margin-right: 10px;
                ">Copy Link</button>
                <button onclick="this.parentElement.parentElement.remove()" style="
                    background: #ccc;
                    color: #333;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 6px;
                    cursor: pointer;
                ">Close</button>
            </div>
        `;
        
        // Add backdrop
        const backdrop = document.createElement('div');
        backdrop.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            z-index: 10000;
        `;
        backdrop.onclick = () => {
            backdrop.remove();
            instruction.remove();
        };
        
        document.body.appendChild(backdrop);
        document.body.appendChild(instruction);
    }
    
    // Initialize the fix when DOM is ready
    function initializeLinkedInFix() {
        if (isEmbeddedBrowser()) {
            console.log('Embedded browser detected, applying LinkedIn fix');
            
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