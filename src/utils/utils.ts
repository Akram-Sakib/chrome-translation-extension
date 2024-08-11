import { languages } from "./constants";

export const matchLanguage = (targetLang: Promise<string> | string) => languages.find(
    (lang) => lang.code === targetLang
)?.name

export const uppercaseFirstLetter = (string: string): string => {
    return string.charAt(0).toUpperCase() + string.slice(1)
}