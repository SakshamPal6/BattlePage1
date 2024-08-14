
// import { FaChevronDown } from "react-icons/fa";
// import { TbSeparator } from "react-icons/tb";

// import { FaMinus } from "react-icons/fa";
// import { FaPlus } from "react-icons/fa";



// const SettingsPanel = () => {
//   return (
//     <div className="bg-gradient-to-r from-[#0c0c40] to-[#000c24] p-8 rounded-xl text-white max-w mx-auto">
//       <div className='flex '>
//           <h2 className="text-3xl font-bold mb-6 tracking-widest">SETTINGS</h2>
//           <button className="text-sm text-white font-semibold tracking-widest ml-[1000px] mb-5">RESTORE DEFAULT SETTINGS</button>
          
//       </div>

//     </div>
//   )      
//   };       

// export default SettingsPanel;
import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { FaMinus } from "react-icons/fa";

const Settings = () => {
  const [difficulty, setDifficulty] = useState('Normal');
  const [topic, setTopic] = useState('Normal');
  const [language, setLanguage] = useState('Normal');
  const [questions, setQuestions] = useState(20);
  const [time, setTime] = useState(20);
  const [company, setCompany] = useState('Normal');

  const handleIncrement = (setter, value) => setter(value + 1);
  const handleDecrement = (setter, value) => setter(value > 1 ? value - 1 : value);

  return (
    <div className="flex  items-center mt-8 justify-between h-auto">
      <div className=" bg-opacity-50  ml-20 text-white ">
        <h2 className=" text-4xl tracking-[0.5rem] font-extralight ">SETTINGS</h2>
        <div className="space-y-2 ml-[65px] mt-4 max-w-xl">
          {/* Difficulty */}
          <div className="flex justify-between gap-2 items-center">
            <span className='font-bold tracking-wider'>Difficulty</span>
            <div><hr className='w-[138px] border-dotted' /></div>
            <div className=" rounded-full border-2 flex space-x-2">
              {['Slow', 'Normal', 'Fast', 'Fast+'].map((level) => (
                <button
                  key={level}
                  onClick={() => setDifficulty(level)}
                  className={`px-4 uppercase tracking-widest font-bold py-2 text-xs rounded-full ${
                    difficulty === level
                      ? 'bg-white text-black'
                      : ' text-white'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          {/* Topic */}
          <div className="flex justify-start gap-2 items-center">
            <span className='font-bold tracking-wider'>Topic</span>
            <div><hr className='w-[350px] border-dotted' /></div>
            <div className='flex items-center gap-1'>
              <h1 className='bg-white text-black tracking-widest text-xs font-bold px-8 border rounded-3xl py-2'>NORMAL</h1>
              <button><IoIosArrowDropdownCircle className='h-8 w-8'/></button>
            </div>
          </div>

          {/* Programming Language */}
          <div className="flex justify-start gap-2 items-center">
            <span className='font-bold tracking-wider'>Programming Language</span>
            <div><hr className='w-[193px] border-dotted' /></div>
            <div className='flex items-center gap-1'>
              <h1 className='bg-white text-black tracking-widest text-xs font-bold px-8 border rounded-3xl py-2'>NORMAL</h1>
              <button><IoIosArrowDropdownCircle className='h-8 w-8'/></button>
            </div>
          </div>

          {/* Total number of Questions */}
          <div className="flex justify-start gap-2 items-center">
            <span className='font-bold tracking-wider'>Total number of Questions</span>
            <div><hr className='w-[222px] border-dotted' /></div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleDecrement(setQuestions, questions)}
                className="w-5 h-5"> <FaMinus /> </button>
              <span className='bg-white text-black py-1 px-4 rounded-full'>{questions}</span>
              <button
                onClick={() => handleIncrement(setQuestions, questions)}
                className="w-6 h-5 "><FaPlus /></button>
            </div>
          </div>

          {/* Total Time */}
          <div className="flex justify-start gap-2 items-center">
            <span className='font-bold tracking-wider'>Total Time</span>
            <div><hr className='w-[358px] border-dotted' /></div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleDecrement(setTime, time)}
                className="w-5 h-5"> <FaMinus /> </button>
              <span className='bg-white text-black py-1 px-3 rounded-full'>{time}s</span>
              <button
                onClick={() => handleIncrement(setTime, time)}
                className="w-6 h-5 "><FaPlus /></button>
            </div>
          </div>

          {/* Company */}
          <div className="flex justify-start gap-2  items-center">
            <span className='font-bold tracking-wider'>Company</span>
            <div><hr className='w-[315px] border-dotted' /></div>
            <div className='flex items-center gap-1'>
              <h1 className='bg-white text-black tracking-widest text-xs font-bold px-8 border rounded-3xl py-2'>NORMAL</h1>
              <button><IoIosArrowDropdownCircle className='h-8 w-8'/></button>
            </div>
          </div>
        </div> 
      </div>
      <div className="flex flex-col  h-auto w-full  items-center ">
        <button className="text-gray-400 ml-56 mt-8 tracking-widest font-bold text-xs uppercase">Restore Default Settings</button>
        <button className="bg-green-600 text-white text-lg px-14 mt-[240px] ml-[450px] py-2 rounded-full">Apply</button>
      </div>
    </div>
  );
};

export default Settings;
