import React from 'react'
import {ProgressBar, progress, Grid, Cell} from 'react-mdl'
function Skills(props) {
    return (
        <div>
        <Grid>
            <Cell col={2}   className='skl' >
            <div>
                {props.lan}
                </div>
                
            </Cell>
            <Cell col={10}>
            <ProgressBar progress={props.bno}
            style={{width:'80%', margin:'auto'}} />
            </Cell>
        </Grid>
            
        </div>
    )
}

export default Skills
