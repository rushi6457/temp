
import './App.css';
import Navbar from './Components/Navbar';
import AllRoutes from './Routes/AllRoutes';
import ErrorBoundaries from "./Components/ErrorBoundaries"
function App() {
  return (
    <div className="App">
      <ErrorBoundaries>
      <Navbar/>
      <AllRoutes/>
      </ErrorBoundaries>
    </div>
  );
}

export default App;
