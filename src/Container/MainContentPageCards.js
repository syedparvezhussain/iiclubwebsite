import React from "react";
import background from "../images/carouselImages/1.png";

class MainContentPageCards extends React.Component{
  constructor(props){
    super(props)
    this.state= {
      cardTitleData:this.props.cards,
      listOfCards:[]
    };
  }
  componentDidMount(){
   
    this.setState({
      listOfCards:this.state.cardTitleData.map(e=> {
     return  <div className="img1 col-md-4">{e}</div>
      })
    })
  }
  render(){
    
        return(

      <div>
        <div className="mainCardsHeader">Projects</div>
        <div className='mainContentPageCards row'>
        {this.state.listOfCards}
        </div>
      </div>
    )

    }
  


}
export default MainContentPageCards;