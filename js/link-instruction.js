// Modal shown when no automatic method could open a link outside an embedded browser
// (LinkedIn, WebView, iframe): lets the visitor copy the URL and open it by hand.

(function() {
    'use strict';

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

    window.showLinkInstruction = showLinkInstruction;
})();
