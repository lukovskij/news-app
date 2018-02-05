import React, { Component as ReactComponent } from 'react'

export default ( OrigianlComponent ) => class WrappedComponent extends ReactComponent {

  state = {
    isOpen : false
  }

  handleToggle = () => {
    this.setState({
      isOpen : !this.state.isOpen
    })
  }

  render () {
    return <OrigianlComponent {...this.props} handleToggle={this.handleToggle} isOpen={this.state.isOpen}></OrigianlComponent>
  }

}
