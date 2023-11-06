export const initialState = {
  message: "Hello F8",
  todo: ["Item 1", "Item 2", "Item 3"],
};
export const rootReducer = (state, action) => {
  switch (action.type) {
    case "todo/add": {
      return { ...state, todo: [...state.todo, action.payload] };
    }

    default: {
      return state;
    }
  }
};
