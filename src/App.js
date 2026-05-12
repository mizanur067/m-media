import logo from './logo.svg';
import './App.css';
import {recoilRoot} from 'recoil';
import Allpages from './Pages/Allpages';
function App() {
  return (
    <div >
      <recoilRoot>
        <Allpages />
      </recoilRoot>
    </div>
  );
}

export default App;
