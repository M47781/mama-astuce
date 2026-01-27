
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";
const ai = new GoogleGenAI({ apiKey: API_KEY });

export const getSkincareAdvice = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction: `
          أنت مساعد ذكي لعلامة "MAMA Astuce". 
          منتجنا هو مرهم طبيعي 100% لتهدئة الحروق الخفيفة، حروق الشمس، والجروح السطحية.
          مكوناتنا طبيعية وآمنة.
          قواعد الرد:
          1. كن ودوداً ومحترفاً باللغة العربية.
          2. شجع المستخدم على تنظيف المنطقة المصابة قبل الاستخدام.
          3. ذكر دائماً أن المنتج غير مخصص للحروق العميقة أو الخطيرة.
          4. إذا كانت الحالة تبدو طارئة، انصح بالتوجه فوراً للطبيب.
          5. أسعارنا: 500mg بـ 40,000 دج و 1g بـ 120,000 دج.
          أجب باختصار ووضوح.
        `,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "عذراً، واجهت مشكلة في الاتصال. يرجى المحاولة لاحقاً.";
  }
};
