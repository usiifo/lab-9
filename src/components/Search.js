import { useState } from "react";
import './Search.css';
import RescipesResults from './RescipesResults'
const Search = () => {


    const [searchQuery, setSearchQuery] = useState(null);
    const [searchResults, setSearchResults] = useState(null);
    const handleClick = async () => {
        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch`+ 
            `?apiKey=d703ca3e28d94f3980da381e9baea433&query=${searchQuery}`)
        const reponseJSON = await response.json();
        setSearchResults(reponseJSON.results)

    }
    return(<>
    <div className="search-wrapper">
        <input type="text"
            placeholder="Sarch by ingredients..."
            onChange={(e) => setSearchQuery(e.target.value)}/>
        <button onClick={handleClick}>Search</button>
    </div>
    {searchResults && <RescipesResults recipes={searchResults} />}
    </>

    )
}

export default Search;