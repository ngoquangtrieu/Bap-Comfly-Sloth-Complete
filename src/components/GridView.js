import { context } from "../context/Context"
import { useContext } from "react"
import { Link } from "react-router-dom"
import "../css/cssComponents/GridView.css"

function GridView(){
    const {state} = useContext(context)
    const {products,isLoading} = state
    return (
        <>
            <ul className="gridViewList">
                {products.map((product) => (
                    <li key={product.id} className="gridViewIteam">
                        <div className="gridViewImg">
                            <img className={`black ${isLoading ? "black" : null}`} src={product.image}/>
                            <Link to={`/products/${product.id}`} className="gridViewSearch" title={product.id}>
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </Link>
                        </div>
                        <div className="gridViewText">
                            <span className="gridViewName">{product.name}</span>
                            <span className="gridViewPrice">{"$"}{product.price/100}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default GridView