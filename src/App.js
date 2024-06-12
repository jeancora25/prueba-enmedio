import { useFetch } from './useFetch';
import './App.css';

function App() {
const { data } = useFetch("https://pokeapi.co/api/v2/pokemon?limit=50");

  return (
    <div className="App">
      <div className="card">
        <ul>
          {data?.results.map((item) => (
            <li key={item.name}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
