import React from "react";
import VinylList from "./VinylList";
import NewVinylForm from "./NewVinylForm";
import VinylDetail from "./VinylDetail";
import EditVinylForm from "./EditVinyl";

class VinylControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mainVinylList: [],
      formVisibleOnPage: false,
      selectedVinyl: null,
      editing: false
    }
  }

  handleClick = () => {
    if (this.state.selectedVinyl != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedVinyl: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleEditClick = () => {
    this.setState({editing: true});
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

  handleEditingVinylInList = (vinylToEdit) => {
    const editedMainVinylList = this.state.mainVinylList
    .filter(vinyl => vinyl.id !== this.state.selectedVinyl.id)
    .concat(vinylToEdit);
    this.setState({
      mainVinylList: editedMainVinylList,
      editing: false,
      selectedVinyl: null
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing){
      currentlyVisibleState = <EditVinylForm
                                vinyl={this.state.selectedVinyl}
                                onEditTicket={this.handleEditingVinylInList} />
      buttonText= "Return To List";
    } else if (this.state.selectedVinyl != null){
      currentlyVisibleState = <VinylDetail
                                vinyl = {this.state.selectedVinyl} 
                                onClickingEdit = {this.handleEditClick} />
      buttonText= "Return To List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewVinylForm onNewVinylCreation={this.handleAddingNewVinylToList} />
      buttonText = "Return To List"
    } else {
      currentlyVisibleState = <VinylList vinylList={this.state.mainVinylList} onVinylSelection={this.handleChangeSelectedVinyl} />
      buttonText="Add Vinyl";
    }

    return(
    <>
      {currentlyVisibleState}
      <button onClick={this.handleClick}>{buttonText}</button>
    </>
  )
  }
}

export default VinylControl;

