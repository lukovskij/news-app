import React, {Component} from 'react';
import {loadAllComments} from '../../AC'
import {connect} from 'react-redux'
import {mapToArr} from '../../helpers'
import { Route } from 'react-router-dom'
import CommentsPageList from '../CommentsPageList'
import PropTypes from 'prop-types';


class CommentsPage extends Component {

    render() {
        return (
            <div>
                <Route path={`/comments/:page`} component = {CommentsPageList}/>
            </div>
        );
    }
}

CommentsPage.propTypes = {};

export default connect(state => {
    return {
        comments : mapToArr(state.comments.entities),
        loaded : state.comments.loadedAllComments,
        loading : state.comments.loadingAllComments,
        totalElements: state.comments.totalElements
    }
}, {loadAllComments})(CommentsPage);


/*<ul>*/
/*{*/
/*comments.map(item => <li key={item.id}><CommentsPage comment={item}/></li>)*/
/*}*/
/*</ul>*/