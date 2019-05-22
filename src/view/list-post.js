import React from 'react'
import {connect} from 'react-redux'
import { withRouter } from "react-router-dom";
import {getPostsAction} from '../redux/actions/post-action'

import CardPost from './card-post'

class ListPost extends React.Component{

    componentDidMount(){
        this.props.getPosts();
    }

    render(){
        const {list} = this.props;
        return (
            <div>
                {
                    list.map((post, index) => {
                        return <CardPost post={post} key={index}/>
                    })
                }
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    const {isLoading, list} = state.postState;
    return {isLoading, list};
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        getPosts: () => {
            return dispatch(getPostsAction())
        }
    }
  }
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListPost))