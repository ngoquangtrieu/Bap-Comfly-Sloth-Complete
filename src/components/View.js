import ListView from "./ListView";
import GridView from "./GridView";
import { useContext } from "react";
import { context } from "../context/Context";


function View(props){
    const {state} = useContext(context)
    const {found} = state
    if(found == 0){
        return <h4>Sorry, no products matched your search.</h4>
    }
    if (props.gridView == false) {
        return <ListView />
    }
    else {
        return <GridView />
    }
}

export default View