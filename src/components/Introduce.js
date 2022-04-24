import img1 from'../assets/img/introduce.jpeg'
import img2 from'../assets/img/introduce-2.jpeg'
import {Link} from 'react-router-dom';
import '../css/cssComponents/Introduce.css'

function Introduce(){
    return(
        <>
            <div className="intro">
                <div className="intro-text">
                    <h1>Design Your</h1>
                    <h1>Comfort Zone</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias?</p>
                    <Link to='/products'>SHOP NOW</Link>
                </div>
                <div className="intro-img">
                    <img src={img1}/>
                    <img src={img2}/>
                </div>
            </div>
        </>
    )
}

export default Introduce