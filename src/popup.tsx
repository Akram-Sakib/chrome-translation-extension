import { useEffect, useState } from "react"

import "~style.css"

function IndexPopup() {
  const [currentUrl, setCurrentUrl] = useState<string>("")
  const getCurrentUrl: () => Promise<void> = async (): Promise<void> => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
    setCurrentUrl(tab.url)
  }

  useEffect(() => {
    getCurrentUrl()
  }, [currentUrl])

  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 w-80">
      <h1 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
        Chrome Translation Extension
      </h1>
    </div>
  )
}

export default IndexPopup
