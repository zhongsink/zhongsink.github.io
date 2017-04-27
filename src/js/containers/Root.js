import React ,{Component} from 'react';
import { Router, Route, IndexRoute, useRouterHistory ,browserHistory,Redirect} from 'react-router';
import { createHashHistory ,createBrowserHistory} from 'history'; 
import NProgress from 'nprogress';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });
import App from '../containers/App.js';

import '../../css/reset.less';
import '../../css/blog.less';
import "../../css/arctice.less";
import "../../css/project.less";
import "../../css/nprogress.less"

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
  NProgress.start();
  require.ensure([], require => {
    cb(null, require('../containers/Project').default);
  }, 'project');
};
const Resume = (location, cb) => {
  document.title = "Hello World";
  NProgress.start();
  require.ensure([], require => {
    cb(null, require('../containers/Resume').default);
  }, 'resume');
};
const AboutMe = (location, cb) => {
  document.title = "Hello World";
  NProgress.start();
  require.ensure([], require => {
    cb(null, require('../containers/AboutMe').default);
  }, 'about');
};
const CellView=(location, cb) => {
  document.title = "Hello World";
  NProgress.start();
  require.ensure([], require => {
    cb(null, require('../containers/CellView').default);
  }, 'cellView');
};

const post=(location, cb) => {
  document.title = "Hello World";
  NProgress.start();
  require.ensure([], require => {
    cb(null, require('../containers/Post').default);
  }, 'post');
};
const Admin=(location, cb) => {
  document.title = "Hello World";
  require.ensure([], require => {
    cb(null, require('../containers/Admin').default);
  }, 'admin');
};
const Notfound=(location, cb) => {
  document.title = "Hello World";
  NProgress.start();
  require.ensure([], require => {
    cb(null, require('../containers/NotFound').default);
  }, 'notfound');
};

const routes = (
  <Route path="/" component={Container}>
    <IndexRoute component={App} />
    <Route path="blog" getComponent={Blog} >
        <IndexRoute getComponent={CellView} />
        <Route path="post/:id" getComponent={post} />
    </Route>
    <Route path="project" getComponent={Project} />
    <Route path="admin" getComponent={Admin} />
    <Route path="resume" getComponent={Resume} />
    <Route path="about" getComponent={AboutMe} />
    <Route path="404" getComponent={Notfound} />
    <Redirect from='*' to='/404'  />
  </Route>
);

export default class Root extends Component {
  render() {
    return <Router history={appHistory} routes={routes} />
  }
};


