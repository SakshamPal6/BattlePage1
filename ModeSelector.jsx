import React from 'react';

const ModeSelector = ({ selectedMode, setSelectedMode }) => {
  return (
    <div className="flex space-x-4">
      <button
        onClick={() => setSelectedMode('1vs1')}
        className={`px-14 py-2 text-2xl rounded-xl ${selectedMode === '1vs1' ? 'bg-blue-600' : 'bg-blue-800'} focus:outline-none`}>
        1 vs 1
      </button>
      <button
        onClick={() => setSelectedMode('2vs2')}
        className={`px-14 py-2 text-2xl rounded-xl ${selectedMode === '2vs2' ? 'bg-blue-600' : 'bg-blue-800'} focus:outline-none`}>
        2 vs 2
      </button>
      <button
        onClick={() => setSelectedMode('4vs4')}
        className={`px-14 py-2 text-2xl rounded-xl ${selectedMode === '4vs4' ? 'bg-blue-600' : 'bg-blue-800'} focus:outline-none`}>
        4 vs 4
      </button>
    </div>
  );
};

export default ModeSelector;
