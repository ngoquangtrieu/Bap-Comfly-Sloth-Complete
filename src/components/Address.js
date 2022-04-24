import { Link } from "react-router-dom";
import '../css/cssComponents/Address.css'

function Address(props){
    return(
        <>
            <div className="address">
                <Link to='/'>Home</Link>
                <span>/ {props.title}</span>
            </div> 
        </>
    )
}

export default Address