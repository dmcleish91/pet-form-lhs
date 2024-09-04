import React from 'react';
import LHSForm from './components/LHSForm';

function App() {
  const [score, setScore] = React.useState<number>(0);
  return (
    <div className='w-full h-100 bg-slate-100'>
      <LHSForm score={score} setScore={setScore} />
    </div>
  );
}

export default App;
