import React, {Component as ReactComponent} from 'react'

export default(OriginalComponent) => class AccordionDecorator extends ReactComponent {

  constructor(){
    super()

    this.state = {
      openAccordionId: null
    }

    this.lastId = null
  }

  closeSiblingsAccordionses = ( id ) => {
    return ( ) => {

      if (this.lastId !== id) {
        this.lastId = id;
        this.setState({openAccordionId: this.lastId})
      } else {
        this.lastId = null
        this.setState({openAccordionId: null})
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
