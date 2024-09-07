browser.tabs.onUpdated.addListener((tabId, changeInfo, tabInfo) => {
    if (tabInfo.url.includes("youtube.com/shorts")) {
        setTimeout(() => {
            browser.tabs.update({ url: "https://youtube.com" })
        }, 100)
    }
});