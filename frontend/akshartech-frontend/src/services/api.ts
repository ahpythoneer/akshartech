import axios from 'axios';

// Create an axios instance with default config
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Define interfaces for API responses
export interface Content {
  id: number;
  type: string;
  key: string;
  title: string | null;
  subtitle: string | null;
  content: string | null;
  image_url: string | null;
  order: number;
  created_at: string;
  updated_at: string;
}

export interface ContentResponse {
  status: string;
  count: number;
  data: Content[];
}

export interface SingleContentResponse {
  status: string;
  data: Content;
}

export interface VisitorStats {
  total_visitors: number;
  recent_visitors: number;
  page_stats: { page: string; count: number }[];
  daily_stats: { date: string; count: number }[];
}

export interface VisitorStatsResponse {
  status: string;
  data: VisitorStats;
}

// API functions
export const contentApi = {
  // Get all content
  getAllContent: async (): Promise<Content[]> => {
    const response = await api.get<ContentResponse>('/content');
    return response.data.data;
  },

  // Get content by type
  getContentByType: async (type: string): Promise<Content[]> => {
    const response = await api.get<ContentResponse>(`/content/${type}`);
    return response.data.data;
  },

  // Get specific content item by type and key
  getContentByKey: async (type: string, key: string): Promise<Content> => {
    const response = await api.get<SingleContentResponse>(`/content/${type}/${key}`);
    return response.data.data;
  },
};

export const statsApi = {
  // Get visitor statistics
  getVisitorStats: async (days: number = 30): Promise<VisitorStats> => {
    const response = await api.get<VisitorStatsResponse>(`/stats/visitors?days=${days}`);
    return response.data.data;
  },
};

export default api;
