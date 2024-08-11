import { useStorage } from "@plasmohq/storage/hook"
import { languages } from "~utils/constants"

import "~style.css"

function IndexPopup() {
  const [translateTo, setTranslateTo] = useStorage("translateTo", "bn")

  return (
    <div className="py-2 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 w-80">
      <h1 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white border-b border-black p-2">
        Translation
      </h1>
      <div className="p-2">
        <p className="text-gray-800 dark:text-gray-100">
          This is a simple translation extension that uses Google Translate API
          to translate selected text from English to Bengali.
        </p>
      </div>
      <div>
        <div className="p-2">
          <label
            htmlFor="translateTo"
            className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            Translate To
          </label>
          <select
            id="translateTo"
            value={translateTo}
            onChange={(e) => setTranslateTo(e.target.value)}
            className="w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

export default IndexPopup
