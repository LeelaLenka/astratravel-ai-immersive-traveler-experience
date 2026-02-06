
import { GoogleGenerativeAI } from "@google/generative-ai";
import { ChatMessage, Destination } from "../types";
import { API_CONFIG } from "../constants";

let genAI: GoogleGenerativeAI | null = null;

try {
  genAI = new GoogleGenerativeAI(API_CONFIG.GEMINI_API_KEY);
} catch (error) {
  console.warn("Failed to initialize Gemini API:", error);
}

export const generateTravelAdvice = async (
  query: string,
  history: ChatMessage[],
  context: { destination?: Destination; userLocation?: string }
): Promise<string> => {
  if (!genAI) {
    throw new Error("Gemini API not initialized");
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const systemPrompt = `You are Astra, a world-renowned AI travel expert with deep knowledge of destinations worldwide.
Destination Context: ${context.destination?.name || "Global"} (Safety: ${context.destination?.safetyScore || "N/A"}/10)

Your specialized expertise covers:
✈️ VISA & DOCUMENTATION: Entry requirements, visa-free eligibility, travel documents
🛡️ SAFETY & SECURITY: Crime rates, emergency contacts, areas to avoid  
💰 BUDGET & COSTS: Daily budgets, currency rates, money-saving tips
🏨 ACCOMMODATION: Hotels, hostels, prices, best neighborhoods
🍽️ FOOD & DINING: Local dishes, restaurants, food safety, allergies
🚌 TRANSPORTATION: Public transit, taxis, rentals, best ways to travel
📸 ATTRACTIONS: Must-see sites, hidden gems, unique experiences
🎭 CULTURE & ETIQUETTE: Local customs, traditions, photography rules
📅 TIMING & WEATHER: Best seasons, festivals, weather patterns
⚠️ SCAMS & FRAUD: Common scams, prevention, tourist traps to avoid

Response Style: Provide specific costs, local details, actionable tips. Prioritize safety. Include alternatives if needed.`;

    const chat = model.startChat({
      history: history
        .filter(m => m.role !== 'system')
        .map(m => ({
          role: m.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: m.content }]
        })),
      generationConfig: {
        maxOutputTokens: 512,
        temperature: 0.7,
      }
    });

    const result = await chat.sendMessage(query);
    const text = result.response.text();
    
    if (!text || !text.trim()) {
      throw new Error("Empty response from Gemini");
    }
    
    return text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};

export const getSafetyAlerts = async (destination: string) => {
  if (!genAI) {
    throw new Error("Gemini API not initialized");
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const prompt = `You are a travel safety expert. Generate exactly 3 travel safety alerts for ${destination}.
Return ONLY valid JSON array with exactly 3 objects. Each object must contain: id, type, title, message, severity.
Severity must be one of: critical, warning, info
Return ONLY the JSON array, no other text.

Example format (follow EXACTLY):
[
  {"id": "1", "type": "scam", "title": "Taxi Scams", "message": "Always use official taxis or apps", "severity": "warning"},
  {"id": "2", "type": "safety", "title": "Night Travel", "message": "Avoid traveling alone at night", "severity": "warning"},
  {"id": "3", "type": "cultural", "title": "Respect Local Customs", "message": "Ask before photographing people", "severity": "info"}
]`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();
    
    if (!text || !text.trim()) {
      throw new Error("Empty response from safety alerts");
    }
    
    // Extract JSON from response
    const jsonMatch = text.match(/\[[\s\S]*\]/);
    if (jsonMatch) {
      const parsed = JSON.parse(jsonMatch[0]);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
    
    throw new Error("Could not parse safety alerts JSON");
  } catch (error) {
    console.error("Safety Alerts Error:", error);
    throw error;
  }
};
