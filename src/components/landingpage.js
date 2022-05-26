import React, { Component } from "react";
import { Cell, Grid } from "react-mdl";

class LandingPage extends Component{
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={(12)}>
                        <img 
                        src="https://www.shareicon.net/data/512x512/2015/09/18/103160_man_512x512.png"
                        alt="avatar"
                        className="avatar-img"/>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;