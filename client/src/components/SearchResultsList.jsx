import { SearchResults } from "./SearchResults.jsx";
import "./SearchResultsList.css";

export const SearchResultsList = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return <SearchResults result={result.name} key={id} />;
      })}
    </div>
  );
};