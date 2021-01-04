import { Component } from "react";
import "../../css/grid.css";


export default class Grid extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            id:[1,2,3,4,5,6,7,8,9],
        }
    }
    render()
    {
        return(
            <div style={{textAlign:"center"}}>
                <h1>Grid Basic</h1>
                <div className="grid">
                    {this.state.id.map(e=><Item id={e}/>)}
                </div>
            </div>
        )
    }
}

const Item=(props)=>(
    <div>
        <span>{props.id}</span>
    </div>
)