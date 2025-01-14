import "./Nav.css";

function Nav({value, setTemp}) {
 
const selectTemp=(e)=>{
  setTemp(e.target.id)
}

  return (
    <div className="mainNav">
      <form className="form" onSubmit={value}>
        <input type="text" className="text" id="city" placeholder="City" />
        <input type="submit" value="Search City" className="search" />
        <div className="radio">
          <input type="radio" id="C" name="temperature" onClick={selectTemp} defaultChecked/>
          <label htmlFor="C" className="c">°C</label>
          <input type="radio" id="F" name="temperature" onClick={selectTemp}/>
          <label htmlFor="F" >
            °F
          </label>
        </div>
      </form>
    </div>
  );
}

export default Nav;
