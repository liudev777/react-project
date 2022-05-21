import locationLogo from "../images/marker.png"
import data from "../data.js"


export default function Card(props) {
    return (
        <>
            <div className="card">
                <img src={props.item.imageUrl} className="card--image"/>

                <div className="card--stats">
                    <div className="map--row">
                        <img src={locationLogo} alt="location marker" className="marker--logo"/>
                        <h5 className="location--name">{props.item.location}</h5>
                        <a href={props.item.googleMapsUrl} className="map--url">View on Google Maps</a>
                    </div>

                    <h1 className="card--title">
                        {props.item.title}
                    </h1>

                    <h3 className="card--date">
                        {props.item.startDate} - {props.item.endDate}
                    </h3>
                    
                    <p className="card--description">
                        {props.item.description}
                    </p>
                </div>
            </div>
            {props.item.id < data.length && <hr/>}
        </>
    );
}