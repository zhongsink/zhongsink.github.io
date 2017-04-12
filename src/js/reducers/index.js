
function postIssues(defaultIssuesState, action) {
  switch (action.type) {
    case FETCH_ISSUES:
      // 获取issues
      return objectAssign({}, defaultIssuesState, {
        isFetching: true
      });

    case RECEIVE_ISSUES:
      // 接收issues
      return objectAssign({}, defaultIssuesState, {
        isFetching: false,
        items: action.posts
      });

    default:
      return defaultIssuesState;
  }
}

export default postIssues;