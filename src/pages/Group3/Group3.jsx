import {groupNum3} from '../../constants/groups';
import Title from '../../components/Title/Title';

import './Group3.css'

 export function Group3 () {
    return (
        <div className='mainG3'>
            <Title />
          {groupNum3.map((elm) => {
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

