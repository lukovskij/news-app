import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropsTypes from 'prop-types'
import {filterItems} from '../../AC'

import Select from 'react-select'
import 'react-select/dist/react-select.css'

class SelectFilter extends Component {

    static propTypes = {
        articles : PropsTypes.array.isRequired
    }

    state = {
        selectChange : ''
    }

    handleSelectChange = (selectOption) => {
        this.setState({
            selectChange : selectOption
        }, () => {
            this.props.filterItem(this.state.selectChange.value)
        })


    }

    render(){
        const {articles} = this.props

        const options = articles.map(item => {
            return {
                value : item.id,
                label : item.title
            }
        })

        return(
            <section>
                <div style={{marginBottom : '20px'}}>
                   Select filter
                </div>
                <Select
                    name="articles-select"
                    value = {this.state.selectChange}
                    onChange = {this.handleSelectChange}
                    options = {options}

                />
            </section>
        )
    }

}

function mapStateToProps(state) {
    return {
        articles : state.articles
    }
}
function mapDispatchToProps(dispatch) {
    return {
        filterItem : id => {
            dispatch(filterItems(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SelectFilter)