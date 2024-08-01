import tldr from "wikipedia-tldr"

chrome.runtime.onInstalled.addListener(function () {
    chrome.contextMenus.create({
        title: 'Quick Wiki Lookup For "%s"',
        contexts: ["selection"],
        id: "myContextMenuId"
    })
})

type WikiTldrThumbnail = {
    source: string
    width: number
    height: number
}

export type WikiTldr = {
    query: string
    type: string
    title: string
    displaytitle: string
    thumbnail: WikiTldrThumbnail
    originalimage: WikiTldrThumbnail
    lang: string
    description: string
    extract: string
    extract_html: string
}

export type WikiMessage = {
    type: string
    text: WikiTldr
}

const trans = async (sourceText: string) => {
    const sourceLang = 'en';
    const targetLang = 'bn';

    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURIComponent(sourceText)}`;

    const response = await fetch(url);

    let translation
    if (url) {
        const data = await response.json()
        translation = {
            sourceText: sourceText,
            translatedText: data[0][0][0]
        }
    }
    return translation
}


chrome.contextMenus.onClicked.addListener(async function (info, tab) {
    const tldrText = await trans(info.selectionText)
    chrome.tabs.sendMessage(tab.id, {
        type: "lookup",
        text: tldrText
    } as WikiMessage)
})