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

  handleDeleteVinyl = (id) => {
    const newMainVinylList = this.state.mainVinylList.filter(vinyl => vinyl.id !== id);
    this.setState({
      mainVinylList: newMainVinylList,
      selectedVinyl: null
    })
  }

  handleVinylSale = (id) => {
    const selectedVinyl = this.state.mainVinylList.filter(vinyl => vinyl.id === id)[0];
    if (selectedVinyl.quantity >= 1) {
      const soldVinyl = { ...selectedVinyl, quantity: selectedVinyl.quantity -1};
      const newMainVinylList = this.state.mainVinylList.filter(vinyl => vinyl.id !== id).concat(soldVinyl);
      this.setState({
        mainVinylList: newMainVinylList
      });
    }
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
                                onClickingEdit = {this.handleEditClick} 
                                onClickingDelete = {this.handleDeleteVinyl} />
      buttonText= "Return To List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewVinylForm onNewVinylCreation={this.handleAddingNewVinylToList} />
      buttonText = "Return To List"
    } else {
      currentlyVisibleState = <VinylList 
                                vinylList={this.state.mainVinylList} 
                                onVinylSelection={this.handleChangeSelectedVinyl} 
                                onSellVinylClicked={this.handleVinylSale} />
      buttonText="Add Vinyl";
    }

    return(
    <>
      {currentlyVisibleState}
      <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-2 border border-gray-400 rounded shadow" onClick={this.handleClick}>{buttonText}</button>
    </>
  )
  }
}

export default VinylControl;

