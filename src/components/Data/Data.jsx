
import "./Data.css";

const Data = ({comment}) => {

  const delComment=(id)=>{
fetch(`http://localhost:3001/comments/${id}`, {method:'DELETE'})
  }  

  return (
    <div className="data">
      {comment.map((item, index) => {
        return <div key={index} className="comment">
          <p>{item.body}</p>
          <button onClick={()=>delComment(item.id)} className="x">X</button>
        </div>;
      })}
    </div>
  );
};

export default Data;
