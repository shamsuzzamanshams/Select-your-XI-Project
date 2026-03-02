
import './App.css'
import navImg from './assets/logo.png';
import dollarImg from "./assets/Currency.png"
import AvailablePlayers from './components/AvailabelPlayers/AvailablePlayers';
import SelectedPlayres from './components/SelectedPlayers/SelectedPlayres';
import { Suspense } from 'react';

const fetchPlayer = async () => {
  const res = await fetch("/players.json")
  return res.json()
}

function App() {

  const playersPromise = fetchPlayer();


  return (
    <>
      <div className="navbar max-w-[1200px] mx-auto">
        <div className="flex-1">
          <a className="text-xl">
            <img className="w-[60px] h[60px]" src={navImg} />
          </a>
        </div>
        <div className="flex items-center">
          <span className='mr-1'>6000000000</span>
          <span className='mr-1'>Coin</span>
          <img src={dollarImg} alt="" />
        </div>
      </div>

      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
      </Suspense>

      <SelectedPlayres></SelectedPlayres>
    </>
  )
}

export default App
