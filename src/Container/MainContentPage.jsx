import React from "react";
import MainContentPageCards from './MainContentPageCards';

class MainContentPage extends React.Component{
constructor(props){
  super(props)
  this.state= {
    mainContentProducts:this.props.products
  };
}
  
render(){
  console.log(this.state.mainContentProducts)
 
  return(
    <div className='MainConentPage'>
      
     {this.state.mainContentProducts? <MainContentPageCards cards={this.state.mainContentProducts}/>:null}
</div>

  )
}
}
export default MainContentPage;
