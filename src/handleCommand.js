function handleClick(tabId){
  getVideoTitle(tabId, (videoTitle) => {
    videoTitle[0] ? console.log(videoTitle) : alert("Youtube video title not found")
  })
}

function getVideoTitle(tabId, callback){
  chrome.tabs.query(
    {active: true, windowId: chrome.windows.WINDOW_ID_CURRENT},
    () => {
      let code = `document.querySelector("#container > h1 > yt-formatted-string").textContent`

      chrome.tabs.executeScript(tabId, {code}, (result) => {
        callback(result)
      })
    })
}