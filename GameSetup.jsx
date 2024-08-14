import React, { useState } from 'react';
import ModeSelector from './ModeSelector';
import PlayerSelection from './PlayerSelection';

const GameSetup = () => {
  const [selectedMode, setSelectedMode] = useState('1vs1');

  return (
    <div className="bg-gradient-to-r from-[#0c0c40] to-[#000c24]   flex flex-col h-[420px] items-center justify-center text-white  ">
      <ModeSelector selectedMode={selectedMode} setSelectedMode={setSelectedMode} />
      <div className=" flex flex-col items-center justify-between w-[1080px] h-72 mt-8">
        <PlayerSelection selectedMode={selectedMode} />
      </div>
    </div>
  );
};

export default GameSetup;
