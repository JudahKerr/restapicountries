function Country(props) {
  return (
    <div id={props.theme} className="countryCard">
      <img src={props.image} alt={props.name}></img>
      <h2>{props.name}</h2>
      <div className="countryData">
        <p>
          Population: <span>{props.population}</span>
        </p>

        <p>
          Region: <span>{props.region}</span>
        </p>

        <p>
          Capital: <span>{props.capital}</span>
        </p>
      </div>
    </div>
  );
}

export default Country;
