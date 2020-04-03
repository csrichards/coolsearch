// Listen for the message sent in background.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message == "loaded_reddit") {
        searchForm = document.querySelector('#search');
        searchExpand = document.querySelector('#searchexpando');
        searchExpand.style = "display: block;";

        searchForm.addEventListener("focusout", () => {
            setTimeout(function() {
                searchExpand.style = "display: block;";
            }, 500);
        })
    }
    
});