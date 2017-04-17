import React ,{Component} from 'react';
import { Router, Route, IndexRoute, useRouterHistory ,browserHistory,Redirect} from 'react-router';
import { createHashHistory ,createBrowserHistory} from 'history'; 

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });
import App from '../containers/App.js';

import '../../css/reset.less';
import '../../css/blog.less';
import "../../css/arctice.less";
import "../../css/project.less"

class Container extends Component{
    
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                {this.props.children}
            </div>
        )   
    }
}

const Blog = (location, cb) => {
  document.title = "Hello World";
  require.ensure([], require => {
    cb(null, require('../containers/Blog.js').default);
  }, 'blog');
};
const Project = (location, cb) => {
  document.title = "Hello World";
  require.ensure([], require => {
    cb(null, require('../containers/Project').default);
  }, 'project');
};
const Resume = (location, cb) => {
  document.title = "Hello World";
  require.ensure([], require => {
    cb(null, require('../containers/Resume').default);
  }, 'resume');
};
const AboutMe = (location, cb) => {
  document.title = "Hello World";
  require.ensure([], require => {
    cb(null, require('../containers/AboutMe').default);
  }, 'about');
};
const CellView=(location, cb) => {
  document.title = "Hello World";
  require.ensure([], require => {
    cb(null, require('../containers/CellView').default);
  }, 'cellView');
};

const post=(location, cb) => {
  document.title = "Hello World";
  require.ensure([], require => {
    cb(null, require('../containers/Post').default);
  }, 'post');
};

const routes = (
  <Route path="/" component={Container}>
    <IndexRoute component={App} />
    <Route path="blog" getComponent={Blog} >
        <IndexRoute getComponent={CellView} />
        <Route path="post/:id" getComponent={post} />
    </Route>
    <Route path="project" getComponent={Project} />
    <Route path="resume" getComponent={Resume} />
    <Route path="about" getComponent={AboutMe} />
    <Redirect from='*' to='/'  />
  </Route>
);

export default class Root extends Component {
  render() {
    return <Router history={appHistory} routes={routes} />
  }
};


