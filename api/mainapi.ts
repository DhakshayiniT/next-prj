import axios from 'axios';
import { Board, Prompt } from './types';

const BASE_URL = 'https://demo6396395.mockable.io';

export const fetchBoards = async (): Promise<Board[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/bcf-boards`);
    return response.data.boards;
  } catch (error) {
    console.error('Error fetching boards:', error);
    return [];
  }
};

export const fetchPrompts = async (): Promise<Prompt[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/prompts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching prompts:', error);
    return [];
  }
};
