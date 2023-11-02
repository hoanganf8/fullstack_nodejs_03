export const reducer = (state, action) => {
  /*
  action: object chứa thông tin cần dispatch
  - type: Tên action (feature/action)
  - payload: Dữ liệu của action
  */
  switch (action.type) {
    case "counter/increment": {
      return { ...state, count: state.count + action.payload };
    }

    case "counter/decrement": {
      return { ...state, count: state.count - 1 };
    }

    default: {
      return state;
    }
  }
};
