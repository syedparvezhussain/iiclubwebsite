import React from "react";  
import Logo from "../Logo";
class FooterMenu extends React.Component{
  render(){
    return(
<div  className='footerMenu'> 
<div style={{float:'right'}}>
  <Logo />
</div>

</div>

    )
  }
}
export default FooterMenu;