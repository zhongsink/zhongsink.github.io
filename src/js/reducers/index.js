import objectAssign from 'object-assign';
import { RECEIVE_ITEMS } from "../constants/ActionType.js";

function postIssues(defaultIssuesState, action) {
  switch (action.type) {

    case RECEIVE_ITEMS:
      // 接收文章
      return objectAssign({}, defaultIssuesState, {
        // isFetching: false,
        items: JSON.parse(action.payload.posts)
      });

    default:
      return defaultIssuesState;
  }
}

export default postIssues;