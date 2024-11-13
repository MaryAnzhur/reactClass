import "./SecThree.scss";

function SecThree() {
  return (
    <div>
      <div className="mainS3">
        <div className="text">
          <p className="mainS3">What can us do for you?</p>
          <p className="text">
            We are ready to work on a project of any complexity, whether it’s
            commercial or residential.
          </p>
        </div>
        <div className="input">
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Reason for Contacting" />
          <input type="text" placeholder="Phone" />
          <div className="textArea">
            <textarea placeholder="Message" className="writtingArea"></textarea>
            <p className="lastText">
              <span>*</span> indicates a required field
            </p>
          </div>
          <div className="forBtn">
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecThree;
