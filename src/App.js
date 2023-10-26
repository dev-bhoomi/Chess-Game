import { useReducer } from 'react';
import './App.css';
import Board from './Component/Board';
import AppContext from './Component/Contexts/Context';
import { Reducer } from './Component/Reducer/Reducer';
import { initGameState}  from  './Constant'
import MovesList from './Component/Control/Bits/MovesList';
import TakeBack from './Component/Control/Bits/TakeBack';
import Control from './Component/Control/Control';
 
function App() {

  const [appState,dispatch]=useReducer(Reducer,initGameState)

  const providerState={
    appState,
    dispatch
  }
   return (
     <>
   <AppContext.Provider value={providerState}>
    <div className="App">
      <Board /> 
      <Control>
        <MovesList />
        <TakeBack />
      </Control>
    </div>
    </AppContext.Provider>
    </>
  );
}

export default App;
