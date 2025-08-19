import './App.css';
import { ChildA } from './components/context/ContextChildren';
import ContextParent from './components/context/ContextParent';

function App() {
  return (
    <div className="App">
      <ContextParent>
        <ChildA/>
      </ContextParent>
    </div>
  );
}

export default App;
