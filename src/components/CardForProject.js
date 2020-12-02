import React from 'react';
import {Card, CardTitle, CardText, CardActions,Button} from 'react-mdl' 

function CardForProject(props) {
    return (
        <div className='cd'>
         <Card shadow={0} style={{minHeight:'300px', marginLeft: '50px', marginTop:'40px'}}>
            <CardTitle style={{color: '#fff', height: '176px',
             background: 'url(https://d1m75rqqgidzqn.cloudfront.net/wp-data/2020/06/25134227/React_Native_Logo.png) center / cover'}}>
             {props.pname}
             </CardTitle>
            <CardText >
                {props.about}
            </CardText>
            <CardActions border >
                <a href={props.git} target='_blank'><Button colored style={{width:'50%'}}>Github</Button></a>
                <a href={props.demo} target='_blank'><Button colored style={{width:'50%'}}>Live Demo</Button></a>
            </CardActions>
         </Card>
        </div>
    )
}

export default CardForProject
