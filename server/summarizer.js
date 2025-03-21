const axios = require('axios');
const { OpenAI } = require('openai');

const apiKey = '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';
const apiUrl = 'https://api.openai.com/v1/engines/davinci/completions';

const openai = new OpenAI(apiKey);


const summarizeWithChatGPT = async (articleBody) => {
  try {
    const response = await openai.completions.create({
      model: 'text-davinci-003', // Specify the GPT model here
      prompt: `Summarize the following article:\n"${articleBody}"`,
      max_tokens: 500,
    });

    const summary = response.choices[0].text.trim();
    return summary;
  } catch (error) {
    console.error('Error summarizing with ChatGPT:', error);
    return 'Failed to summarize';
  }
};


module.exports = { summarizeWithChatGPT };
