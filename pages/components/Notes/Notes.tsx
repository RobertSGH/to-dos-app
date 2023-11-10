import { Note } from '@/pages/Context/Types';

const Notes: React.FC = () => {
  const dummyData: Note = {
    id: 'string',
    description: 'string',
    created_at: new Date(),
    updated_at: new Date(),
  };

  return (
    <div className='todo-app'>
      <p>{dummyData.description}</p>
    </div>
  );
};
export default Notes;
