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


    handleSelectChange = (selectOption) => {
        this.props.filterItems(selectOption.value)
    }

    render(){
        const {articles, selected} = this.props

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
                    value = {selected}
                    onChange = {this.handleSelectChange}
                    options = {options}

                />
            </section>
        )
    }

}

function mapStateToProps(state) {
    return {
        articles : state.articles,
        selected : state.filters.selected
    }
}
// function mapDispatchToProps(dispatch) {
//     return {
//         filterItem : id => {
//             dispatch(filterItems(id))
//         }
//     }
// }
export default connect(mapStateToProps, {filterItems})(SelectFilter)