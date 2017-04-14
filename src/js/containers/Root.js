import React ,{Component} from 'react';
import { Router, Route, IndexRoute, useRouterHistory ,browserHistory} from 'react-router';
import { createHashHistory } from 'history'; 

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });
import App from '../containers/App.js';

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

var Blog = (location, cb) => {
  document.title = "Hello World";
  require.ensure([], require => {
    cb(null, require('../containers/Blog.js').default);
  }, 'blog');
};

const routes = (
  <Route path="/" component={Container}>
    <IndexRoute component={App} />
    <Route path="blog" getComponent={Blog} />
  </Route>
);

export default class Root extends Component {
  render() {
    return <Router history={appHistory} routes={routes} />
  }
};


