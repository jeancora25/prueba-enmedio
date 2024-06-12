import { useFetch } from './useFetch';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    const { data, loading, error, setUrl } = useFetch("https://pokeapi.co/api/v2/pokemon");

    const handlePrevious = () => {
        if (data?.previous) {
            setUrl(data.previous);
        }
    };

    const handleNext = () => {
        if (data?.next) {
            setUrl(data.next);
        }
    };

    return (
        <div className="App">
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">Pokemones registrados en la Pokedex  {data && ` (${data.count})`}</h3>
                        <ul className="list-group list-group-flush">
                            {error && <h2>Error</h2>}
                            {loading && <h2>Loading...</h2>}
                            {data?.results.map((item) => (
                                <li className="list-group-item" key={item.name}>{item.name}</li>
                            ))}
                        </ul>
                        <div className="pagination-buttons">
                            <button 
                                className="btn btn-primary m-2" 
                                onClick={handlePrevious} 
                                disabled={!data?.previous || loading}
                            >
                                Anterior
                            </button>
                            <button 
                                className="btn btn-primary m-2" 
                                onClick={handleNext} 
                                disabled={!data?.next || loading}
                            >
                                Siguiente
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
