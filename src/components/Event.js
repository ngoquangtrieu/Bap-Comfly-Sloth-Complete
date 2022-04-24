import {Link} from 'react-router-dom';
import '../css/cssComponents/Event.css'

function Event(){
    return(
        <>
            <div className="event">
                <h1>Join our newsletter and get 20% off</h1>
                <div className="eventInfor">
                    <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint unde quaerat ratione soluta veniam provident adipisci cumque eveniet tempore?
                    </span>
                    <form>
                        <input placeholder="Enter Email"/>
                        <Link to='/' className="eventSub">Subscribe</Link>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Event