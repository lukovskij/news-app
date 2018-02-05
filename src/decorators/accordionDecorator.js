import React, {Component as ReactComponent} from 'react'

export default(OriginalComponent) => class AccordionDecorator extends ReactComponent {

  constructor(){
    super()

    this.state = {
      openAccordionId: null
    }

  }

  closeSiblingsAccordionses = ( id ) => {
    return ( ) => {
      if(this.state.openAccordionId === id){
        this.setState({
          openAccordionId : null
        })
      }else{
        this.setState({
          openAccordionId : id
        })
      }
    }
  }

  checkOpen = (itemId) => {
    if (this.state.openAccordionId === itemId)
      return true

    return false
  }

  render() {
    return <OriginalComponent {...this.props} closeSiblingsAccordionses={this.closeSiblingsAccordionses} isOpen={this.checkOpen}/>
  }
}
