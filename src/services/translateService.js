import translate from "google-translate-api";

const translateText = async (text, targetLang) => {
  try {
    const translatedText = await translate(text, { to: targetLang });
    return translatedText.text;
  } catch (error) {
    console.error(error.message);
    return text;
  }
};

export default translateText;