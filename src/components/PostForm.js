import React from "react";
import {connect} from 'react-redux';
import {createPost} from '../redux/actions'

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
  }

  submitHandler = (evt) => {
    evt.preventDefault();
    const {title} = this.state;

    if (!title.trim()) {
      return
    }

    const newPost = {
      title,
      id: Date.now().toString()
    }
    this.props.createPost(newPost);
    this.setState({
      title: ''
    });
  };

  changeInputHandler = (evt) => {
    evt.persist();
    this.setState(prev => ({...prev, ...{
      [evt.target.name]: evt.target.value
    }}))
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Заголовок поста
          </label>
          <input
            type="text"
            className="form-control mb-3"
            id="title"
            value={this.state.title}
            name="title"
            onChange={this.changeInputHandler}
          />
          <button className="btn btn-success" type="submit">Создать</button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = {
  createPost
}

export default connect(null, mapDispatchToProps)(PostForm);