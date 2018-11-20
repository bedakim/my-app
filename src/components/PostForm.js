import React, { Component } from 'react'

export default class PostForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={e => this.props.onSubmit(e)}> 
        <input type="text" name="title" defaultValue={this.props.title} />
        <textarea name="body" id="" cols="30" rows="10" defaultValue={this.props.body}></textarea>
        <button>Add</button>
        </form>
      </div>
    )
  }
}
