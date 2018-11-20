import React, { Component } from 'react'
import PostForm from './PostForm'
import api from '../api';

export default class EditPostForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      title: '',
      body: ''
    }
  }

  async componentDidMount() {
    const {data: {title, body}} = await api.get(`/posts/${this.props.postId}`)
    this.setState({
      title,
      body
    })
  }
  
  async handleSubmit(e) {
    e.preventDefault()
    const title = e.target.elements.title.value
    const body = e.target.elements.body.value
    await api.patch(`/posts/${this.props.postId}`, {
      title,
      body
    })
    // FIXME: 자기가 작성한 글만 수정 가능하도록 고쳐야 함
    this.props.onPostDetailPage(this.props.postId)
  }

  render() {
    const {title, body} = this.state
    if (!title) {
      return 'loading...'
    }
    return (
      <PostForm onSubmit={e => this.handleSubmit(e)} title={title} body={body} />
    )
  }
}