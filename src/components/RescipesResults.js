import { Link } from 'react-router-dom';

const RescipesResults = ({ recipes }) => {
    return (
        recipes && (
            <div className="recipe-container">
                {recipes.map((item) => (
                    <div className="recipe-card" key={item.id}>
                        <Link to={`/recipe-details/${item.id}`}>
                            <img src={item.image} alt={item.title} />
                            <h2>{item.title}</h2>
                        </Link>
                    </div>
                ))}
            </div>
        )
    )
}
export default RescipesResults;