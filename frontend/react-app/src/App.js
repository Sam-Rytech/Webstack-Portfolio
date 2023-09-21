import { useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Home from "./Components/Home.js"

function App() {
  useEffect(() => {
    // set the page title when the component mounts
    document.title = 'Home - Beedo';
  }, []);
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
