import translate from "translate";

const translateText = async (textToTranslate, targetLang) => {
  try {
    const text = await translate(textToTranslate, targetLang);
    console.log(`Text: ${textToTranslate} Translated to: ${text}`);
    return text;
  } catch (error) {
    console.error(error.message);
  }
};

export default translateText;
