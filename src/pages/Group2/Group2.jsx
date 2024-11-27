import {groupNum2} from '../../constants/groups';
import Title from '../../components/Title/Title';

import './Group2.css'

 export function Group2 () {
    return (
        <div className='mainG2'>
            <Title />
          {groupNum2.map((elm) => {
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

