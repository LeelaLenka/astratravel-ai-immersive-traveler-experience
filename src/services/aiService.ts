import { ChatMessage, Destination, TravelAlert } from "../types";
import { generateTravelAdvice, getSafetyAlerts } from "./geminiService";
import { generateTravelAdviceOpenAI, getSafetyAlertsOpenAI } from "./openaiService";
// @ts-ignore
import { getLocalTravelAdvice } from "./localKnowledgeBase";

// Map API severity to TravelAlert severity
const mapSeverity = (apiSeverity: string): 'high' | 'medium' | 'low' => {
  const severityMap: { [key: string]: 'high' | 'medium' | 'low' } = {
    'critical': 'high',
    'high': 'high',
    'warning': 'medium',
    'medium': 'medium',
    'info': 'low',
    'low': 'low'
  };
  return severityMap[apiSeverity.toLowerCase()] || 'low';
};

/**
 * Unified travel advice service with fallback
 * Uses: Local KB -> Gemini -> OpenAI
 */
export const generateTravelAdviceWithFallback = async (
  query: string,
  history: ChatMessage[],
  context: { destination?: Destination; userLocation?: string }
): Promise<string> => {
  // Try local knowledge base first (instant, no API calls)
  try {
    console.log("Checking local knowledge base...");
    const localResponse = getLocalTravelAdvice(query, context.destination?.name);
    if (localResponse) {
      console.log("✓ Local knowledge base response");
      return localResponse;
    }
  } catch (error) {
    console.warn("Local KB error:", error);
  }

  // Try Gemini API
  try {
    console.log("Attempting Gemini API...");
    const response = await generateTravelAdvice(query, history, context);
    if (response && response.trim()) {
      console.log("✓ Gemini API successful");
      return response;
    }
  } catch (error) {
    console.warn("Gemini API failed:", error);
  }

  // Try OpenAI API
  try {
    console.log("Attempting OpenAI API...");
    const response = await generateTravelAdviceOpenAI(query, history, context);
    if (response && response.trim()) {
      console.log("✓ OpenAI API successful");
      return response;
    }
  } catch (error) {
    console.warn("OpenAI API failed:", error);
  }

  // Final fallback: use local KB one more time
  console.log("Using local knowledge base as final fallback");
  return getLocalTravelAdvice(query, context.destination?.name);
};

/**
 * Unified safety alerts service with fallback
 * Returns TravelAlert[] with proper severity mapping
 */
export const getSafetyAlertsWithFallback = async (
  destination: string
): Promise<TravelAlert[]> => {
  // Try Gemini first
  try {
    console.log("Fetching safety alerts from Gemini...");
    const alerts: any = await getSafetyAlerts(destination);
    if (alerts && Array.isArray(alerts) && alerts.length > 0) {
      console.log("✓ Gemini safety alerts retrieved");
      return alerts.map((alert: any) => ({
        id: alert.id || Math.random().toString(),
        type: alert.type || 'info',
        title: alert.title || 'Travel Alert',
        message: alert.message || 'No details available',
        severity: mapSeverity(alert.severity || 'low')
      }));
    }
  } catch (error) {
    console.warn("Gemini API failed:", error);
  }

  // Try OpenAI
  try {
    const alerts: any = await getSafetyAlertsOpenAI(destination);
    if (alerts && Array.isArray(alerts) && alerts.length > 0) {
      console.log("✓ OpenAI safety alerts retrieved");
      return alerts.map((alert: any) => ({
        id: alert.id || Math.random().toString(),
        type: alert.type || 'info',
        title: alert.title || 'Travel Alert',
        message: alert.message || 'No details available',
        severity: mapSeverity(alert.severity || 'low')
      }));
    }
  } catch (error) {
    console.error("OpenAI API failed:", error);
  }

  // Return default alerts if both fail
  return [
    {
      id: "1",
      type: "info",
      title: "Travel Information",
      message: "Always check official travel advisories before visiting",
      severity: "low"
    },
    {
      id: "2",
      type: "safety",
      title: "General Safety",
      message: "Stay aware of your surroundings and keep valuables secure",
      severity: "medium"
    },
    {
      id: "3",
      type: "scam",
      title: "Common Scams",
      message: "Be cautious of unofficial guides and currency exchanges",
      severity: "medium"
    }
  ];
};
