import "./Body.css";

function Body({ data, path }) {
  return (
    <div className="mainBody">
      {data.map((elm, index) => (path === "products" ? <div key={index} className="boxes">
        <img src={elm.image} alt="" />
        <p>{elm.title}</p>
        <p>Price: ${elm.price}</p>
      </div> : path === "users" ? <div key={index} className="boxes">
        <img src={elm.image} alt="" />
        <p>{elm.firstName}</p>
        <p>Age: {elm.age}</p>
      </div> : path === "comments" ? <div key={index} className="boxes">
        <p>{elm.body}</p>
        <p>{elm.postId}</p>
        <p>Like: {elm.likes}</p>
      </div> :path === "todos" ? <div key={index} className="boxes">
        <p>{elm.id}</p>
        <p>{elm.userId}</p>
        <p>{elm.title}</p>
      </div>: null))}
    </div>
  );
}

export default Body;


// {path === "products" ? <div>
//     <p>{elm.title}</p>
//     <p>{elm.price}</p>
// </div>} : path === "users" ? 