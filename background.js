chrome.runtime.onInstalled.addListener(() => {
  const contexts = [
    'page',
    'selection',
    'link',
    'editable',
    'image',
    'video',
    'audio',
  ]

  chrome.contextMenus.create({
    title: 'Find Lyrics',
    id: 'find-lyrics',
    contexts: [...contexts, 'browser_action'],
  })
})

function getActiveTab(callback) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0]
    callback(activeTab)
  })
}

chrome.contextMenus.onClicked.addListener(info => {

  if (info.menuItemId === 'find-lyrics') {
    getActiveTab((tab) => {
      if (info.menuItemId === 'find-lyrics') {
        handleClick(tab.id)
      }
    })
  }
})