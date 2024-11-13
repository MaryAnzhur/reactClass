import './BoxService.scss'

function BoxService ({icon, row, text}) {
    return(
        <div className="boxs2">
            <img src={icon} alt="icon" />
            <img src={row} alt="row" />
            <p>{text}</p>
          </div>
    )
}

export default BoxService