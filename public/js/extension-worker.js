// If extension does not have a popup, this will be executed
// when the extension icon is clicked
chrome.action.onClicked.addListener(async tab => {
    try {
        await chrome.scripting.executeScript({
            target: {
                tabId: tab.id
            },
            files: ['js/content-app.js']
        });
    }
    catch (e) {
        console.error(e);
    }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log('received message from content script: ', request.message);

    // This is an example of how the content application can be shown
    // from the extension popup
    if (request.message === 'show_on_page_content') {
        chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
            const tabId = tabs[0].id;
            try {
                await chrome.scripting.executeScript({
                    target: {
                        tabId: tabId
                    },
                    files: ['js/content-app.js']
                });
            }
            catch (e) {
                console.error(e);
            }
        });
    }

    if (request.message == 'close_content_app') {
        chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
            const tabId = tabs[0].id;
            try {
                await chrome.scripting.executeScript({
                    target: {
                        tabId: tabId
                    },
                    function: () => {
                        const contentApp = document.getElementById(`app-container-${chrome.runtime.id}`);
                        if (contentApp) {
                            contentApp.remove();
                        }
                    }
                });
            }
            catch (e) {
                console.error(e);
            }
        });
    }
});
