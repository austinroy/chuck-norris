import React, { Component } from 'react';
import './App.css';
import { Menu, Image } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div className='app grid-container' style={{ display : 'grid'}}>
        <div style={{ gridArea : 'menu'}}> 
        <Menu vertical secondary color='blue' >
          <Menu.Item >
            <a href="/"  >
              <Image avatar style={{ height : '80px', width: '80px' }} circular src="https://mediadc.brightspotcdn.com/dims4/default/4f87e48/2147483647/strip/true/crop/808x808+0+0/resize/808x808!/quality/90/?url=https%3A%2F%2Fmediadc.brightspotcdn.com%2F72%2Fd9%2F46a05bb16dc6255d60ff6a685472%2F998bdb362952772bbecfc953f6a03a35.jpg"/>
              <span style={{ fontSize : '20px' }}>Chuck</span>
            </a>
          </Menu.Item>
          <Menu.Item />
        </Menu>
        </div>
        <br />
        <div style={{ marginLeft : '2em', gridArea : 'main'}}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
