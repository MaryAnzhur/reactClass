import {groupNum1} from '../../constants/groups';
import Title from '../../components/Title/Title';

import "./Group1.css";

export function Group1() {
  return (
    <div className='mainG1'>
        <Title />
      {groupNum1.map((elm) => {
        return (
          <div className="box" key={elm.id}>
            <img src={elm.image} alt="worker" />
            <p>{elm.name}</p>
            <p>{elm.surname}</p>
            <p>{elm.age}</p>
            <p>{elm.gender}</p>
            <p>{elm.profession}</p>
          </div>
        )
      })}
    </div>
  );
}
