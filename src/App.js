
import './App.css';

import SearchBar from './components/SearchBar';
import Header from './components/Header';
import Map from './components/Map';
import Results from './components/Results';

function App() {
  return (
    <div className="container-bg">
      <Header />
      <SearchBar />
      <Results />
      <Map />
    </div>
  );
}

export default App;
