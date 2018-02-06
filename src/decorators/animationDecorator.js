import React, {Component as ReactComponent} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './transition-animate.css'

export default function AnimationWrapp(component) {

    return (
        <ReactCSSTransitionGroup
            transitionName="article"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
        >
        {component}
        </ReactCSSTransitionGroup>
    )
}