import React, { Component } from 'react';

import api from '../api';

export default class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //현재 입력 필드에  입력된 사용자 이름/암호
      username: '',
      password: '',
    };
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { username, password } = this.state;
    //FIXME: 사용자 이름 중복 체크 해야함
    const { data: users } = await api.get('/users', {
      params: {
        username,
      },
    });
    if (users.length > 0) {
      alert('이미있어');
      return;
    }
    const res = await api.post('/users/register', {
      username,
      password,
    });
    localStorage.setItem('token', res.data.token);
    // TODO: 게시글 목록 보여주기
  }

  //onchange 입력 가능
  // handleUserNameChange(e){
  //   this.setState({
  //     username: e.target.value
  //   })
  // }

  // handlePassWordChange(e){
  //   this.setState({
  //     password: e.target.value
  //   })
  // }

  handleFieldChange(e, name) {
    this.setState({
      [name]: e.target.value,
    });
  }

  render() {
    const { username, password } = this.state;
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <h1>sign up</h1>
        <input
          type="text"
          name="username"
          value={username}
          onChange={e => this.handleFieldChange(e, 'username')}
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={e => this.handleFieldChange(e, 'password')}
        />
        <button>go!</button>
      </form>
    );
  }
}
