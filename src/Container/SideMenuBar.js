import React from "react";


class SideMenuBar extends React.Component{
          constructor(props){
            super(props);

        this.state = { 
          SideMenuListItems:this.props.sideMenuList,
          listItems:[]
        };

          }
          componentDidMount(){
            
            this.setState({
              listItems:this.state.SideMenuListItems.map(e=><div className="subsidemenyList row-md-2" >{e}</div>)
            })
            
          }
 render()
  {
    console.log("list items ",this.state.listItems )
    return(
      <div  className="sidemenu">
        <ul className="sidemenulist column">
         {this.state.listItems}
        </ul>

      </div>
    )
  }
}
export default SideMenuBar;