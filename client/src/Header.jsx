import { Link } from 'react-router-dom';
import { SearchBar } from './components/SearchBar';
import { SearchResultsList } from "./components/SearchResultsList";
import { useState } from 'react';

export default function Header(){

    const [results, setResults] = useState([]);

    return(
        <>
        <header>  
        <a href="/" class="logo"><img src="https://images.squarespace-cdn.com/content/v1/612dabc42132625e4c2932c5/4d60e94c-dfa6-4c2e-a153-35d9ec01319b/fotor_2023-1-3_21_18_12.png?format=1500w" class="center"/></a>
        
        <div className="search-bar-container">
                <SearchBar setResults = {setResults} />
                {results && results.length > 0 && <SearchResultsList results={results} />}
        </div>

        </header>
        </>
    )
}