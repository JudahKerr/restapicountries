import { useState } from "react";

import Navbar from "./Components/Navbar";
import SearchForm from "./Components/SearchForm";
import Country from "./Components/Country";
import Error from "./Components/Error";
function App() {
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [error, setError] = useState(false);
  const [theme, setTheme] = useState("light");

  function pullData(data) {
    setSelectedCountries(data);
    console.log(selectedCountries);
  }

  function handleError(error) {
    if (error === true) {
      setError(true);
      console.log("ERROR");
    } else {
      setError(false);
    }
  }

  function themeChange() {
    if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <div id={theme}>
      <div id="text background">
        <Navbar themeSwitch={themeChange} theme={theme} />
        <SearchForm theme={theme} pullData={pullData} error={handleError} />
        <div className="body-div">
          {error ? (
            <Error />
          ) : (
            selectedCountries.map((country) => {
              return (
                <Country
                  name={country.name.common}
                  population={country.population}
                  region={country.subregion}
                  capital={country.capital}
                  image={country.flags.png}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
