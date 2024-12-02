import { Link } from 'react-router-dom'

import './Cards.css'
import ROUTES from '../../Routes'

function Cards ({ image, title, price, category, id}) {
    return(
        <div className='box'>
            <img src={image} alt="" />
            <h3 className='title'>{title}</h3>
            <h4 className='price'>${price}</h4>
            <Link to={`/${ROUTES.PRODUCTS}/${category}/${id}`} className='detail'>details</Link>
        </div>
    )
}

export default Cards