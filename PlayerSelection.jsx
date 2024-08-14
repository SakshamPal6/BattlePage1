import { FaPlus } from "react-icons/fa";
import React from 'react';

const PlayerSelection = ({ selectedMode }) => {
  let playerSlots = [];

  if (selectedMode === '1vs1') {
    playerSlots = ['You', 'Opponent'];
  } else if (selectedMode === '2vs2') {
    playerSlots = ['You', 'Teammate', 'Opponent 1', 'Opponent 2'];
  } else if (selectedMode === '4vs4') {
    playerSlots = [
      'You', 'Teammate 1', 'Teammate 2', 'Teammate 3', 
      'Opponent 1', 'Opponent 2', 'Opponent 3', 'Opponent 4'
    ];
  }

  const isFourVsFour = selectedMode === '4vs4';

  return (
    <div className="flex items-center justify-between gap-[90px]">
      <div className={`grid ${isFourVsFour ? 'grid-cols-2' : 'grid-cols-1'} gap-10`}>
        {playerSlots.slice(0, playerSlots.length / 2).map((slot, index) => (
          <div key={index} className="bg-blue-800 h-28 w-36 flex items-center justify-center rounded-xl">
            {slot === 'You' ? (
              <div className="text-center">
                <img src='https://static.vecteezy.com/system/resources/thumbnails/024/624/706/small_2x/3d-rendering-person-icon-3d-render-blue-user-sign-icon-png.png' alt="You" className="rounded-full w-12 h-12 mb-2" />
                <span>{slot}</span>
              </div>
            ) : (
              <div className="h-10 w-10">
                <button><FaPlus className="h-10 w-10" /></button>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-white text-3xl">VS</div>

      <div className={`grid ${isFourVsFour ? 'grid-cols-2' : 'grid-cols-1'} gap-10 `}>
        {playerSlots.slice(playerSlots.length / 2).map((slot, index) => (
          <div key={index} className="bg-blue-800 h-28 w-36 flex items-center justify-center rounded-xl">
            {slot === 'You' ? (
              <div className="text-center">
                <img src="path/to/your/image.jpg" alt="You" className="rounded-full w-12 h-12 mb-2" />
                <span>{slot}</span>
              </div>
            ) : (
              <div className="h-10 w-10">
                <button><FaPlus className="h-10 w-10" /></button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerSelection;

