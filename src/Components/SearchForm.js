import react, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSolid,
  faMagnifyingGlassLocation,
} from "@fortawesome/free-solid-svg-icons";

function SearchForm(props) {
  const [searchTerm, setSearchTerm] = useState("A");
  const url = "https://restcountries.com/v3.1/name/";
  function handleChange(e) {
    setSearchTerm(e.target.value);
    console.log(searchTerm);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (searchTerm.length > 0) {
      fetchCountries();
    }
  }, [searchTerm]);

  const fetchCountries = async () => {
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
        
      }
      props.pullData(data);
      props.error(false);
    } catch (error) {
      console.log(error);
      props.error(true);
      
    }
  };

  return (
    <form id={props.theme} className="search-form" onSubmit={handleSubmit} autoComplete="off">
      <div className="form-control">
        <input
          type="text"
          id="name"
          
          onChange={handleChange}
          placeholder="Search for a country..."
        ></input>
      </div>
    </form>
  );
}

export default SearchForm;
