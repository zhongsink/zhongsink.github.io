import objectAssign from 'object-assign';
import { RECEIVE_ITEMS, RECEIVE_PROJECTITEMS,SIGNIN_SUCCESS } from "../constants/ActionType.js";

function postIssues(defaultIssuesState, action) {
  switch (action.type) {

    case RECEIVE_ITEMS:
      // 接收文章
      return objectAssign({}, defaultIssuesState, {
        items: JSON.parse(action.payload.posts).reverse()
      });
    case RECEIVE_PROJECTITEMS:
      return objectAssign({}, defaultIssuesState, {
        projectitems: JSON.parse(action.payload.posts).reverse()
      });
    case SIGNIN_SUCCESS:
      return objectAssign({}, defaultIssuesState, {
        login: true
      });
    default:
      return defaultIssuesState;
  }
}

export default postIssues;