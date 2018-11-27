import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import classNames from 'classnames';
import './PostList.scss';
import withLoading from '../hoc/withLoading';

class PostList extends Component {
  render() {
    const { posts, onPostDetailPage, onNewPostFormPage, loading } = this.props;
    const titleClass = classNames('PostList__title', {
      'PostList__title--loading': loading,
    });
    return (
      <React.Fragment>
        <div className="PostList">
          <button onClick={() => onNewPostFormPage()}>새 글 쓰기</button>
          <Helmet>
            <h1 className={titleClass}>게시물 목록</h1>
          </Helmet>
          <ul className="PostList__list">
            {posts.map(post => (
              <li
                className="PostList__item"
                key={post.id}
                onClick={() => onPostDetailPage(post.id)}
              >
                {post.title}
              </li>
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default withLoading(PostList);
