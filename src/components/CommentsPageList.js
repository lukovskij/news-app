import React, {Component} from 'react';
import CommentElement from './CommentElement'
import Loader from './Loader'
import PropTypes from 'prop-types';
import Pagination from './Pagination'
import {mapToArr} from "../helpers";
import {loadAllComments} from "../AC";
import {connect} from "react-redux";
import comments from "../reducer/comments";

const onPage = 5

class CommentsPageList extends Component {

    componentDidMount() {
       const { loaded, loading, loadAllComments, match} = this.props
        const elemOnPage = onPage * match.params.page;

        if(!loading && !loaded)
            loadAllComments(5, elemOnPage)
    }

    componentWillReceiveProps(nextProps){

        console.log(nextProps.match.params.page, this.props.match.params.page)
       if(nextProps.match.params.page !== this.props.match.params.page) {

           const {loadAllComments} = this.props
           const elemOnPage = onPage * nextProps.match.params.page;

               loadAllComments(5, elemOnPage)
       }

    }

    render() {
        const { loading, comments, totalElements} = this.props

        const count = parseInt(totalElements / onPage);

        if(loading)
            return <Loader></Loader>

        return (
            <div>
                <ul>
                    {
                        comments.map(item => {
                            return (<li key={item.id}>
                                <CommentElement comment={item}/>
                            </li>)
                        })
                    }
                </ul>
                <Pagination count={count}/>
            </div>
        );
    }
}

CommentsPageList.propTypes = {};

export default connect(state => {
    return {
        comments : mapToArr(state.comments.entities),
        loaded : state.comments.loadedAllComments,
        loading : state.comments.loadingAllComments,
        totalElements: state.comments.totalElements
    }
}, {loadAllComments})(CommentsPageList);
