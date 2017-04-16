/**
 *  props: {
 *          title,
 *          created_at,
 *          body
 *      }
 */
import React, { Component } from 'react';
import marked from 'marked';
import hljs from 'highlight.js';

export default class Article extends Component {
  componentWillMount() {
    window.scrollTo(0, 0);

    // 代码高亮
    marked.setOptions({
      highlight: function (code) {
        return hljs.highlightAuto(code).value;
      }
    });
  }

  render() {
    return (
      <div>
        <div className="article">
          <h1 className="article-title">{this.props.title}</h1>
          <p className="article-time">{this.props.created_at.substr(0, 10)}</p>
          <div className="article-desc article-content"
               dangerouslySetInnerHTML={{__html: marked(this.props.body)}}>
          </div>
        </div>
        <div className="article">
          //评论组件
        </div>
      </div>
    );
  }
};