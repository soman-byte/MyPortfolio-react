import React, { Component } from 'react'
import { Cell, Grid } from 'react-mdl'
import image from '../components/imgg.jpg'
import {List, ListItem, ListItemContent} from 'react-mdl'

class Contact extends Component {
    render() {
        return (
            <div className='full'>
                <Grid className='portion'>
                    <Cell col={6}>
                        <img src={image} style={{height: '300px', marginTop: '20px'}} />
                        <h1>Soman Shrestha</h1>                        
                    </Cell>
                    <Cell col={6}>
                            <p>A diligent and
                            organized individual
                            seeking a position in
                            the field of Software
                            Development.
                            Innovative, creative,
                            and willing to
                            contribute ideas and
                            learn new things.
                        </p>
                        <List className='second'>
                            <ListItem>
                                <ListItemContent icon="phone"><span>997 265 3186</span></ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent icon="mail"><span>shresthasoman8@gmail.com</span></ListItemContent>
                            </ListItem>
                        </List>
                        
                        
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact
