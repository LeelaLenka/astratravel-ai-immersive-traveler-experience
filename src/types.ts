// =====================
// Destination
// =====================
export interface Destination {
  id: string;
  name: string;
  country: string;
  description?: string;
  imageUrl: string;
  vrImageUrl: string;
  safetyScore: number;
  coordinates?: [number, number];
  scamAlerts?: string[];
}

// =====================
// Chat Messages
// =====================
export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: number;
}

// =====================
// Travel Alerts (USED BY APP)
// =====================
export type TravelAlert = {
  id: string;
  type: string;
  severity: 'high' | 'medium' | 'low';
  title: string;
  message: string;
};

// =====================
// User Context
// =====================
export interface UserContext {
  location: string | null;
  budget: 'low' | 'medium' | 'high';
  interests: string[];
  currentTripId: string | null;
}
