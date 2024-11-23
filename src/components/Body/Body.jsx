import "./Body.css";

function Body({ inputData, deleteBox, doneBox, seenBox }) {
  return (
    <div className="mainBody">
      <div className="heading">
        <p className="headingP"></p>
        <p className="headingP">Name</p>
        <p className="headingP">Surname</p>
        <p className="headingP">Login</p>
        <p className="headingP">Password</p>
        <p className="headingP">Delete</p>
      </div>
      <div className="boxes">
        {inputData.map((elm) => {
          return (
            <div className={elm.done ? "red" : "box"} key={elm.id}>
              <input
                className="boxItems"
                type="checkbox"
                onClick={() => doneBox(elm.id)}
              />
              <p className="boxItems">{elm.name}</p>
              <p className="boxItems">{elm.sname}</p>
              <p className="boxItems">{elm.login}</p>
              {elm.seen ? (
                <p className="boxItems" onClick={() => seenBox(elm.id)}>
                  {" "}
                  {elm.password}{" "}
                </p>
              ) : (
                <p className="boxItems" onClick={() => seenBox(elm.id)}>
                  ********
                </p>
              )}

              {/* </p>
              <p className="boxItems" onClick={() => seenBox(elm.id)}>
                {elm.seen ? {elm.password}}
              </p> */}
              <button className="boxBtn" onClick={() => deleteBox(elm.id)}>
                &#10006;
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Body;
