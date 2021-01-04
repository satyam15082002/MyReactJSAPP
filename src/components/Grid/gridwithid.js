import { Component } from "react";





export default class GridwithId extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            id:props.match.params.id,
        }
    }
    render()
    {
        return(
            <div style={{textAlign:"center"}}>
                <h1>Grid Basic{this.state.id}</h1>
            </div>
        )
    }
}

