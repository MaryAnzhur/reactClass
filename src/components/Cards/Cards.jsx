import { Link } from 'react-router-dom'

import './Cards.css'

function Cards ({ image, title, price}) {
    return(
        <div className='box'>
            <img src={image} alt="" />
            <h3 className='title'>{title}</h3>
            <h4 className='price'>${price}</h4>
            <Link to=''>details</Link>
        </div>
    )
}

export default Cards