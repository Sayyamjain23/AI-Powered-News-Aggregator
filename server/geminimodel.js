
require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const summarizeWithGemini = async (articleBody) => {
    try {
        const prompt = `Summarize the following article:\n"${articleBody}"`;
        const result = await model.generateContent(prompt);
        
        // Extract response correctly
        const summary = result.response.candidates[0].content.parts[0].text;
        return summary;
    } catch (error) {
        console.error('Error summarizing with Gemini:', error);
        return 'Failed to summarize';
    }
};

module.exports = { summarizeWithGemini };
