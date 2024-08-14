
import GameSetup from './GameSetup';
import Settings from './Settings';



function FinalBattlePage() {
  return (
    <div className="h-screen bg-gradient-to-r from-[#0c0c40] to-[#000c24] text-white">
      <GameSetup />
      <Settings/>
    </div>
  );
}

export default FinalBattlePage;