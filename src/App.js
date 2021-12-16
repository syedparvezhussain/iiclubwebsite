import './App.css';
import React from 'react';
import MainContentPage from './Container/MainContentPage';
import SideMenuBar from './Container/SideMenuBar';
import TopHeading from './Container/TopHeading';
import FooterMenu from './Container/FooterMenu';

import configData from './config.json';

class App extends React.Component {
constructor(props){
  super(props);
  this.state={
appConfigData:configData
  }
}
componentDidMount(){

}



  render() {
    console.log()
    return (
      <div className='maincontainer'>
       {this.state.appConfigData.topMenuItems?<TopHeading heading={this.state.appConfigData.topMenuItems}/>:null}
       {/* //trernary operator example */}
    
        {this.state.appConfigData.SideMenuItem? <SideMenuBar 
        
        sideMenuList={this.state.appConfigData.SideMenuItem}
       
        />:null}
           {this.state.appConfigData.mainContentPageProjectCards? <MainContentPage products={this.state.appConfigData.mainContentPageProjectCards} />:null}
            <FooterMenu/>
            
            
  
  
     
     </div>
    )}
 
  
}



export default App;
