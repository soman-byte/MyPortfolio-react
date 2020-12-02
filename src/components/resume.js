import React, { Component } from 'react'
import { Cell, Grid } from 'react-mdl'
import image from '../components/imgg.jpg'
import Education from './Education'
import Skills from './Skills'

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                    <div className='ltside'>
                        <img src={image} style={{height:'250px',borderRadius:'5px'}}/>
                        <h3>Soman Shrestha</h3>
                        <h5>ReactJS Developer</h5>
                        <p>A diligent and
                            organized individual
                            seeking a position in
                            the field of Software
                            Development.
                            Innovative, creative,
                            and willing to
                            contribute ideas and
                            learn new things.</p>
                        <hr />
                        <h3>Address</h3>
                        <p>Brookefield, Bangalore-560087</p>
                        <hr />
                        <h3>Phone</h3>
                        <p>997 265 3186</p>
                        <hr />
                        <h3>Email</h3>
                        <p>shresthasoman8@gmail.com</p>
                        <hr />
                        <h3>Github</h3>
                        <p>github.com/soman-byte</p>
                    </div>
                    </Cell>
                    <Cell col={8} className='rtside'>
                        <h3>Education</h3>
                        <hr style={{width:'200px', margin:'auto'}}/>
                        <Education styr='2016' endyr='2020' 
                        sub='B.E/ COMPUTER SCIENCE & ENGINEERING'
                        clz='Bangalore Technological Institute, Bangalore-35'
                        gpa='CGPA: 8.16/10' />
                        <Education styr='2014' endyr='2016' 
                        sub='PUC [12th]/ SCIENCE'
                        clz='REHDON College, Kathmandu, Nepal'
                        gpa='CGPA: 7.23/10' />
                        <Education styr='2014' endyr='2014' 
                        sub='SLC [10th]'
                        clz='Laxmipur ESS, Kathmandu, Nepal'
                        gpa='CGPA: 8.28/10' />

                        <h3>Skills</h3>
                        <hr style={{width:'200px', margin:'auto'}}/>
                        <Skills lan='HTML' bno='65' />
                        <Skills lan='CSS' bno='65' />
                        <Skills lan='JavaScript' bno='65' />
                        <Skills lan='ReactJS' bno='60' />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume
