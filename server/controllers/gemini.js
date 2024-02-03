import {
  GoogleGenerativeAI,
  HarmBlockThreshold,
  HarmCategory,
} from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

async function run(prompt, data) {
  const generationConfig = {
    temperature: 0.65,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
  };
  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_NONE,
    },
  ];

  console.log(prompt + " " + data);
  const parts = [
    // {text: 'Tell me 100 lines on Indian Law'},
    { text: `${prompt} ${data}` },
  ];
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const result = await model.generateContent({
    contents: [{ role: "user", parts }],
    generationConfig,
    safetySettings,
  });
  const response = await result.response;
  const text = response.text();
  console.log(text);
  return text;
}

const GeminiApi = async (req, res) => {
  const Inputprompt = req.body.prompt;
  const Inputdata = req.body.data;
  console.log(req.body);
  console.log(Inputprompt);
  try {
    const response = await run(Inputprompt, Inputdata);
    console.log(response);
    res.json({ response });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
};


export const GeminiWithHistory = async (req, res) => {

console.log("Hello");
  // Access your API key as an environment variable (see "Set up your API key" above)
  const genAI = new GoogleGenerativeAI(process.env.API_KEY);

  async function run() {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: "Hello, I have 2 dogs in my house.",
        },
        {
          role: "model",
          parts: "Great to meet you. What would you like to know?",
        },
      ],
      generationConfig: {
        maxOutputTokens: 100,
      },
    });

    const msg = "How many paws are in my house?";
    const result = await chat.sendMessage(msg);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    return text;
  }

  try {
    const response = await run();
    console.log(response);
    res.json({ response });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
};

export default GeminiApi;
