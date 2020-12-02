import './App.css';
import React, { Component } from 'react';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <div className="demo-big-content">
         <Layout>
          <Header className='hdrclr' title="MyPortfolio" scroll>
              <Navigation>
                  <Link to='/resume'>Resume</Link>
                  <Link to='/project'>Projects</Link>
                  <Link to='/contact'>Contact</Link>
              </Navigation>
          </Header>
          <Drawer title="MyPortfolio">
              <Navigation>
                   <Link to='/resume'>Resume</Link>
                  <Link to='/project'>Projects</Link>
                  <Link to='/contact'>Contact</Link>
              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content" />
              <Main />
          </Content>
         </Layout>
        </div>
    )
  }
}

export default App
