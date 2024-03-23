import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import './index.css'
import { fetchCards } from './store/slices/postsSlice';

function App() {
    const { cards, loading, error } = useSelector(state => state.cards);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCards());
    }, [dispatch]);

    if (error) return <p>Error: {error}</p>;
    if (loading) return <p>Loading...</p>;

    return (
        <>
            <div>
                {cards.map((item) => (
                    <div key={item.id}>
                        <h2>
                            {item.name}
                        </h2>
                        <div>
                            <img src={item.url} alt="#" />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}


export default App;

