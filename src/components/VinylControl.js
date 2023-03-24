import React from "react";
import VinylList from "./VinylList";
import NewVinylForm from "./NewVinylForm";

class VinylControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mainVinylList: [],
      formVisibleOnPage: false
    }
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddingNewVinylToList = (newVinyl) => {
    const newMainVinylList = this.state.mainVinylList.concat(newVinyl);
    this.setState({mainVinylList: newMainVinylList,
                  formVisibleOnPage: false});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    let button = null;

    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewVinylForm onNewVinylCreation={this.handleAddingNewVinylToList} />
      buttonText = "Return To List"
    } else {
      currentlyVisibleState = <VinylList vinylList={this.state.mainVinylList} />
      buttonText="Add Vinyl";
      button = <button onClick={this.handleClick}>{buttonText}</button>
    }

    return(
    <>
      {currentlyVisibleState}
      {button}
    </>
  )
  }
}

export default VinylControl;

