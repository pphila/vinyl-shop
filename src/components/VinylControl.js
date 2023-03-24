import React from "react";
import VinylList from "./VinylList";
import NewVinylForm from "./NewVinylForm";
import VinylDetail from "./VinylDetail";

class VinylControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mainVinylList: [],
      formVisibleOnPage: false,
      selectedVinyl: null
    }
  }

  handleClick = () => {
    if (this.state.selectedVinyl != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedVinyl: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewVinylToList = (newVinyl) => {
    const newMainVinylList = this.state.mainVinylList.concat(newVinyl);
    this.setState({
      mainVinylList: newMainVinylList,
      formVisibleOnPage: false
    });
  }

  handleChangeSelectedVinyl = (id) => {
    const selectedVinyl = this.state.mainVinylList.filter(vinyl => vinyl.id === id)[0];
    this.setState ({selectedVinyl: selectedVinyl});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    let button = null;

    if (this.state.selectedVinyl != null){
      currentlyVisibleState = <VinylDetail
                                vinyl = {this.state.selectedVinyl} />
      buttonText= "Return To List";
      button = <button onClick={this.handleClick}>{buttonText}</button>
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewVinylForm onNewVinylCreation={this.handleAddingNewVinylToList} />
      buttonText = "Return To List"
    } else {
      currentlyVisibleState = <VinylList vinylList={this.state.mainVinylList} onVinylSelection={this.handleChangeSelectedVinyl} />
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

