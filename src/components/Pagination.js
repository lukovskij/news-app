import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';

class Pagination extends Component {

    renderItems = () => {

        let arr = [];
        for(let i = 1; i <= this.props.count; i++){
            arr[i] = <Link to={`/comments/${i}`}>{i}</Link>
        }

        return arr
    }

    render() {

        let arr = this.renderItems()
        return (
            <div>
                {

                    arr.map((item, index) => {
                        return <div key={index}>{item}</div>
                    })


                }
            </div>
        );
    }
}

Pagination.propTypes = {};

export default Pagination;
