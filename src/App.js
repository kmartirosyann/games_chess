import ChessPanel from './components/chessPanel/ChessPanel'
import './App.css';
import {MessagePopUp} from './components/popUp/MessagePopUp';

function App() {
  return (
    <div className="App">
      <MessagePopUp/>
    <ChessPanel/>
    </div>
  );
}

export default App;
