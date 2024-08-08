export const languages = [
    {
        code: "en",
        name: "English",
    },
    {
        code: "bn",
        name: "Bengali",
    },
    {
        code: "hi",
        name: "Hindi",
    },
    {
        code: "es",
        name: "Spanish",
    },
    {
        code: "fr",
        name: "French",
    },
    {
        code: "de",
        name: "German",
    },
    {
        code: "it",
        name: "Italian",
    },
    {
        code: "ja",
        name: "Japanese",
    },
    {
        code: "ko",
        name: "Korean",
    },
    {
        code: "pt",
        name: "Portuguese",
    },
    {
        code: "ru",
        name: "Russian",
    },
    {
        code: "zh",
        name: "Chinese",
    },
];

export const matchLanguage = (targetLang: string) => languages.find(
    (lang) => lang.code === targetLang
)?.name