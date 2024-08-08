import cssText from "data-text:~style.css"
import type { PlasmoCSConfig } from "plasmo"
import { useEffect, useState } from "react"

import { matchLanguage } from "~constants"

export const config: PlasmoCSConfig = {
  matches: ["https://www.plasmo.com/*"], //<all_urls>
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const PlasmoOverlay = () => {
  const [translate, setTranslate] = useState(null)

  useEffect(() => {
    chrome.runtime.onMessage.addListener(function ({ type, text }) {
      setTranslate(text)
      return true
    })
  }, [])

  const uppercaseFirstLetter = (string: string): string => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  return (
    <div className="z-50 fixed top-32 right-8 p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h1 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
        Hi I'm your translation bot!
      </h1>
      {!!translate?.sourceText && (
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-600 dark:text-white">
          {uppercaseFirstLetter(translate?.sourceText)} in{" "}
          {matchLanguage(translate?.targetLang)} is: {translate?.translatedText}
        </h2>
      )}
    </div>
  )
}

export default PlasmoOverlay
