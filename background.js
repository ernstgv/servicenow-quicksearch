function SetToBlank() {
      chrome.omnibox.setDefaultSuggestion({
      description: 'Search ServiceNow tickets'
      });
    }
SetToBlank();

function navigate(url) {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.update(tabs[0].id, {url: url});
      });
}

chrome.omnibox.onInputEntered.addListener(function(text) {
      navigate("https://yourcompany.service-now.com/text_search_exact_match.do?sysparm_search=" + text);
});
