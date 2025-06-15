const { GoogleGenerativeAI } = require("@google/generative-ai");

export const GenerateContent=async(x)=>{
  const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY);


    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash", generationConfig: {
      responseMimeType: "text/plain",
    } });

    const prompt = x;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();
    const plainText = text.replace(/\\[a-z0-9]+\s?|{\*?\\[^}]+}|[{}]/g, "").trim();
    return plainText;

}



// import {
//   GoogleGenerativeAI,
//   HarmCategory,
//   HarmBlockThreshold,
// } from "@google/generative-ai";

// const apiKey = process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY;
// const genAI = new GoogleGenerativeAI(apiKey);

// const model = genAI.getGenerativeModel({
//   model: "gemini-2.0-flash-exp",
// });

// const generationConfig = {
//   temperature: 1,
//   topP: 0.95,
//   topK: 40,
//   maxOutputTokens: 8192,
//   responseMimeType: "text/plain",
// };

// export const chatSession = model.startChat({
//     generationConfig,
//     history: [
//     ],
//   })&&console.log("...");
