import { useEffect, useState } from 'react';
import { fetchBoards, fetchPrompts } from '../api/mainapi';
import { Board, Prompt } from '../types/maintype';

const IndexPage: React.FC = () => {
  const [boards, setBoards] = useState<Board[]>([]);
  const [prompts, setPrompts] = useState<Prompt[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedBoards = await fetchBoards();
      const fetchedPrompts = await fetchPrompts();
      setBoards(fetchedBoards);
      setPrompts(fetchedPrompts);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Boards</h1>
      <ul>
        {boards.map(board => (
          <li key={board.id}>{board.name}</li>
        ))}
      </ul>

      <h1>Prompts</h1>
      <ul>
        {prompts.map(prompt => (
          <li key={prompt.id}>{prompt.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndexPage;
