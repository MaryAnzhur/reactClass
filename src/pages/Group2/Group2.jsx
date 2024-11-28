import {groupNum2} from '../../constants/groups';
import Title from '../../components/Title/Title';
import { useState } from "react";

import './Group2.css'

 export function Group2 () {
  const [sort, setSort] = useState(groupNum2);
  const [status, setStatus] = useState({
    name: false,
    surename: false,
    age: false,
  });

  function sortName(item) {
    if (!status[item]) {
      let sortedAZ = sort.toSorted((a, b) => a[item].localeCompare(b[item]));
      setSort(sortedAZ);
      setStatus({...status, [item]: true});
    } else if (status[item]) {
      let sortedZA = sort.toSorted((a, b) => b[item].localeCompare(a[item]));
      setSort(sortedZA);
      setStatus({...status, [item]: false});
    }
  }

  function sortNum(item) {
    if (!status[item]) {
      let sortedAZ = sort.toSorted((a, b) => a[item]-b[item]);
      setSort(sortedAZ);
      setStatus({...status, [item]: true});
    } else if (status[item]) {
      let sortedZA = sort.toSorted((a, b) => b[item]-a[item]);
      setSort(sortedZA);
      setStatus({...status, [item]: false});
    }
  }
    return (
        <div className='mainG2'>
            <Title sortName={sortName} sortNum = {sortNum} status={status}/>
          {sort.map((elm) => {
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

