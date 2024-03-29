import React, { useEffect, useState } from 'react';
import Dashboard from '../components/Dashboard';
import axios from 'axios';

const App: React.FC = () => {
  const [response1, setResponse1] = useState<any>({});
  const [response2, setResponse2] = useState<any>([]);

  useEffect(() => {
    const fetchBoardsAndPrompts = async () => {
      try {
        const boardsResponse = await axios.get('https://demo6396395.mockable.io/bcf-boards');
        const promptsResponse = await axios.get('https://demo6396395.mockable.io/prompts');
        
        setResponse1(boardsResponse.data);
        setResponse2(promptsResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchBoardsAndPrompts();
  }, []);

  return (
    <div>
      <Dashboard boards={response1.boards || []} prompts={response2 || []} />
    </div>
  );
};

export default App;
