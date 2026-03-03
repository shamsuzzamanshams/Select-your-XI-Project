
import './App.css'

import AvailablePlayers from './components/AvailabelPlayers/AvailablePlayers';
import Navbar from './components/NavBar/Navbar';
import SelectedPlayres from './components/SelectedPlayers/SelectedPlayres';
import { Suspense, useState } from 'react';

const fetchPlayer = async () => {
  const res = await fetch("/players.json")
  return res.json()
}
const playersPromise = fetchPlayer();
function App() {

  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(6000000);




  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>

      <div className='max-w-[1200px] mx-auto flex justify-between items-center'>
        <h3>Available Players</h3>
        <div>
          <button onClick={() => setToggle(true)} className={`py-3 px-4 border-1 border-gray-400 rounded-l-2xl border-r-0 ${toggle === true ? "bg-[#E7FE29]" : ""}`}>Available</button>
          <button onClick={() => setToggle(false)} className={`py-3 px-4 border-1 border-gray-400 rounded-r-2xl border-l-0 ${toggle === false ? "bg-[#E7FE29]" : ""}`}>Selected <span>(0)</span></button>
        </div>
      </div>

      {
        toggle === true ? <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
          <AvailablePlayers availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} playersPromise={playersPromise}></AvailablePlayers>
        </Suspense> : <SelectedPlayres></SelectedPlayres>
      }




    </>
  )
}

export default App
