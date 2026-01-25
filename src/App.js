import Main from './Components/Main.js'
import './App.css';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div >
      <BrowserRouter>
      <Main/>
      </BrowserRouter>
    </div>
  );
}

export default App;
