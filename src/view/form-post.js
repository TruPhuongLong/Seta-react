import React from 'react'
import {connect} from 'react-redux'

import {createPostAction} from '../redux/actions/post-action'

class FormPost extends React.Component {

    state = {
        title: "",
        body: "",
    }

    onSubmit = (event) => {
        event.preventDefault();
        const {title, body} = this.state;
        this.props.createPost({title, body})
    }

    _onChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    render() {
        const {title, body} = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="title" 
                        placeholder="Enter title" 
                        name="title" 
                        value={title}
                        onChange={this._onChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="body">Body:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="body" 
                        placeholder="Enter body" 
                        name="body" 
                        value={body}
                        onChange={this._onChange}
                    />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createPost: (model) => {
            console.log(model)
            return dispatch(createPostAction(model))
        }
    }
}

export default connect(null, mapDispatchToProps)(FormPost)