import react, { useState } from "react";


function SearchForm() {

  const {searchTerm, setSearchTerm} = useState("");
  


 function handleChange(e) {
        
        setSearchTerm(e.target.value);
        console.log(searchTerm);

    }

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };
  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Search any Country</label>
          <input
            type="text"
            id="name"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Search"
          ></input>
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
