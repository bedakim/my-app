import React from 'react';
import { withUser } from '../contexts/UserContext';

class LoginForm extends React.Component {
  static defaultProps = {
    // 사용자가 로그인 폼을 전송했을때 호출되는 함수
    //username 과 password 인수를 받음
    login: (username, password) => {},
    //회원가입 버튼을 눌렀을때 호출되는 함수
    //함수를 반드시 넘겨 줘야함
    onRegister: null,
  };
  constructor(props) {
    super(props);

    this.usernameRef = React.createRef();
    this.passwordRef = React.createRef();
  }

  handleSubmit(e) {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    this.props.login(username, password);
  }

  render() {
    const { onRegister } = this.props;
    return (
      <React.Fragment>
        <form onSubmit={e => this.handleSubmit(e)}>
          <h1>로그인</h1>
          <input ref={this.usernameRef} type="text" name="username" />
          <input ref={this.passwordRef} type="password" name="password" />

          <button>로그인</button>
        </form>
        <button onClick={() => onRegister()}>회원 가입</button>
      </React.Fragment>
    );
  }
}

export default withUser(LoginForm);
