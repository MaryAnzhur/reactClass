import "./Body.css";

function Body({ data, path }) {
  return (
    <div className="mainBody">
      {data.map((elm, index) => (path === "products" ? <div key={index} className="boxes">
        <img src={elm.image} alt="" />
        <p>{elm.title}</p>
        <p>Price: ${elm.price}</p>
      </div> : null))}
    </div>
  );
}

export default Body;


// {path === "products" ? <div>
//     <p>{elm.title}</p>
//     <p>{elm.price}</p>
// </div>} : path === "users" ? 