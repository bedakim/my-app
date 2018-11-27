import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import s from './PostForm.module.scss';
import cn from 'classnames';

export default class PostForm extends Component {
  static defaultProps = {
    editing: false,
    // 폼 전송 시 호출되는 함수 title 과 body 를 인수로 받음
    onSubmit: () => {},
  };
  render() {
    const { editing } = this.props;
    const titleClass = cn(s.titleInput, {
      [s.editing]: editing,
    });
    return (
      <div>
        <Form
          onSubmit={e => {
            e.preventDefault();
            const title = e.target.elements.title.value;
            const body = e.target.elements.body.value;
            this.props.onSubmit(title, body);
          }}
        >
          <Form.Input
            className={titleClass}
            type="text"
            name="title"
            defaultValue={this.props.title}
          />
          <Form.Textarea
            name="body"
            cols="30"
            rows="10"
            defaultValue={this.props.body}
          />
          <button>Add</button>
        </Form>
      </div>
    );
  }
}
