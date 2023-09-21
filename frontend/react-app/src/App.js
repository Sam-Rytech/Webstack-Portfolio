import './App.css';
import { useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

function App() {
  useEffect(() => {
    // set the page title when the component mounts
    document.title = 'Home - Beedo';
  }, []);
  return (
    <div className="App">
    </div>
  );
}

export default App;
