import React, { Component } from 'react'
import { Cell, Grid } from 'react-mdl'
import CardForProject from './CardForProject'

class Project extends Component {
    render() {
        return (
            <div>
                <Grid>
                <Cell col={4}>
                
                
                    <CardForProject pname='Real Advice' 
                        about='Fetches data from the advice slip API and give real time advices.'
                        git='https://github.com/soman-byte/Real-advice-app-react' 
                        demo='https://boring-heyrovsky-41608f.netlify.app/' />
                    </Cell>
                    <Cell col={4}>
                    <CardForProject pname='To-do-list' about='Add, Delete or Edit the task.'
                        git='https://github.com/soman-byte/To-do-list-app-react'
                        demo='https://amazing-einstein-d2cc9f.netlify.app/' />
                        </Cell>
                        <Cell col={4}>
                    <CardForProject pname='My portfolio' about='Created my own portfolio.' 
                        git='' demo=''/>
                        </Cell>
                </Grid>
            </div>                                                                                      
        )
    }
}

export default Project
