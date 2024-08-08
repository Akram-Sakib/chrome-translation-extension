import { Storage } from "@plasmohq/storage"
import { matchLanguage } from "~constants";

const storage = new Storage()
let sourceLang = 'en';
let targetLang = 'bn';

storage.watch({
    translateTo: (c) => {
        targetLang = c.newValue
    }
})

chrome.runtime.onInstalled.addListener(function () {
    chrome.contextMenus.create({
        title: `Translate "%s to ${matchLanguage(targetLang)}`,
        contexts: ["selection"],
        id: "myContextMenuId"
    })
})


const translate = async (sourceText: string) => {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURIComponent(sourceText)}`;

    const response = await fetch(url);

    let translation
    if (url) {
        const data = await response.json()
        translation = {
            sourceText: sourceText,
            translatedText: data[0][0][0],
            targetLang
        }
    }
    return translation
}


chrome.contextMenus.onClicked.addListener(async function (info, tab) {
    const text = await translate(info.selectionText)
    chrome.tabs.sendMessage(tab.id, {
        type: "lookup",
        text: text
    })
})
