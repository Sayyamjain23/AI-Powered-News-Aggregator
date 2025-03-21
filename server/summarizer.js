const axios = require('axios');
const { OpenAI } = require('openai');
require('dotenv').config(); 
const apiKey = process.env.OPENAI_API_KEY;
const apiUrl = process.env.OPENAI_API_URL || 'https://api.openai.com/v1/engines/davinci/completions';

const openai = new OpenAI(apiKey);

const summarizeWithChatGPT = async (articleBody) => {
  try {
    const response = await openai.completions.create({
      model: 'text-davinci-003',
      prompt: `Summarize the following article:\n"${articleBody}"`,
      max_tokens: 500,
    });

    const summary = response.choices[0].text.trim();
    return summary;
  } catch (error) {
    console.error('Error summarizing with ChatGPT:', error.response ? error.response.data : error.message);
    return 'Failed to summarize';
  }
};

module.exports = { summarizeWithChatGPT };
