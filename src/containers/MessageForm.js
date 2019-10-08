import React, { Component } from "react";
import { connect } from "react-redux";
import { postNewMessage } from "../store/actions/messages";

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
    this.handleNewMessage = this.handleNewMessage.bind(this);
    this.handleChange = this.handleChange.bind(this);
    console.log(this.state);
  }

  async handleNewMessage(e) {
    e.preventDefault();
    const response = await this.props.postNewMessage(this.state.message);

    if (response === true) {
      this.props.history.push("/");
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const { message } = this.state;
    const { errors } = this.props;
    return (
      <form onSubmit={this.handleNewMessage}>
        {errors.message && (
          <div className="alert alert-danger">{errors.message}</div>
        )}
        <input
          type="text"
          className="form-control"
          value={message}
          name="message"
          onChange={this.handleChange}
        />
        <button type="submit" className="btn btn-success">
          Add my message!
        </button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    errors: state.errorReducer
  };
}
export default connect(
  mapStateToProps,
  { postNewMessage }
)(MessageForm);
