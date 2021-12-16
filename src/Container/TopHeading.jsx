import React from "react";
import Logo from "../Logo";
class TopHeading extends React.Component{
  constructor(props){
    super(props)
  this.state={
    x:props.heading.map((item)=> {return <li class="topMenuListItem  col-md-2">{item}</li>})
  }

  }

 
   
  render(){
    return(
      
      <div className='topheading'> 
        <div className='containertop'>
          <div className='gridLogo'><Logo/></div>
              <ul className="sidemenulist topMenulist row">
              {this.state.x}
              </ul>
            </div>
      </div>
      
      
      
      
    
    )
  }
}
export default TopHeading;