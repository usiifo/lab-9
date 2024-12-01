import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const RecipeDetails = () => {
    const params = useParams();
    const id = params.id;
    const [recipeDetails, setRecipeDetails] = useState(null);
    useEffect(() => {
        const fetchRecipe = async () => {
            const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=d703ca3e28d94f3980da381e9baea433`)
            const responseJSON = await response.json();
            setRecipeDetails(responseJSON)
        }
        fetchRecipe();
    }, { id });

    return (
        recipeDetails && (
            <div className="recipe-details">
                <h1>{recipeDetails.title}</h1>
                <img src={recipeDetails.image} alt={recipeDetails.title} />
                <div dangerouslySetInnerHTML={{ __html: recipeDetails.summary }} />
                <h2>Ingredients</h2>
                <ul>
                    {recipeDetails.extendedIngredients.map((ingredient) => (
                        <li key={ingredient.id}>{ingredient.original}</li>
                    ))}
                </ul>
                <h2>Instructions</h2>
                <ol>
                    {recipeDetails.analyzedInstructions[0].steps.map((step) => (
                        <li key={step.number}>{step.step}</li>
                    ))}
                </ol>
            </div>
        )
    )
}

export default RecipeDetails;