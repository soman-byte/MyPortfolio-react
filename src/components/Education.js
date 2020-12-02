import React, { Component } from 'react'
import {Grid, Cell} from 'react-mdl'
export class Education extends Component {
    render() {
        return (
            <div>
                <Grid>
                            <Cell col={3}>
                                <h5>{this.props.styr} - {this.props.endyr}</h5>
                            </Cell>
                            <Cell col={9}>
                                <h4>{this.props.sub}</h4>
                                <h5>{this.props.clz}</h5>
                                <h6>{this.props.gpa} </h6>
                            </Cell>
                        </Grid>
            </div>
        )
    }
}

export default Education
