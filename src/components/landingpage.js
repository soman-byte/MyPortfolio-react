import React, { Component } from 'react'
import { Cell, Grid } from 'react-mdl'
import image from '../components/imgg.jpg'
class Landing extends Component {
    render() {
        return (
            <div style={{width:'100%', margin:'auto'}}>
            <Grid className='ldggrid'>
                <Cell col={12}>
                    <img 
                        src={image}
                        alt='avatar'
                    />

                    <div className='headline'>
                        <h1>ReactJS Developer</h1>
                        <hr></hr>
                        <p>
                            HTML | CSS | JavaScript | React | Github
                        </p>
                    </div>
                </Cell>
            </Grid>

            </div>
        )
    }
}

export default Landing
