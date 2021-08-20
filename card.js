function Card(props){
    return(
    <div  className="card">
        <div  className="card-img">
        <img src={props.image} className="card-image"/>
        </div>
        <h1  className="card-title">{props.title}</h1>
        <h3 className="card-subtitle">{props.subtitle}</h3>
        <p className="card-des">{props.des}</p>
        <p  className="btn-parent">
            <button className="card-btn">READ MORE</button>
        </p>
    </div>
    )
}

export default Card;