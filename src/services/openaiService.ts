import { ChatMessage, Destination } from "../types";

// Using local fallback since OpenAI API key would need to be from user
// In production, this should call a backend API that securely manages API keys
const OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";

export const generateTravelAdviceOpenAI = async (
  query: string,
  history: ChatMessage[],
  context: { destination?: Destination; userLocation?: string }
): Promise<string> => {
  // This requires a valid OpenAI API key - throw error to use fallback
  throw new Error("OpenAI API requires backend configuration. Using local knowledge base instead.");
};

export const getSafetyAlertsOpenAI = async (destination: string) => {
  // This requires a valid OpenAI API key - throw error to use fallback
  throw new Error("OpenAI API requires backend configuration. Using default alerts instead.");
};
