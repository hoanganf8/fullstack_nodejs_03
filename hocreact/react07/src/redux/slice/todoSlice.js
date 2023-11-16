import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  todoList: [],
  posts: [],
  status: "idle",
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    //--> name/function
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    // updatePosts: (state, action) => {
    //   state.posts = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.status = "success";
      })
      .addCase(fetchPosts.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.status = "error";
      });
  },
});

//Redux Thunk
export const fetchPosts = createAsyncThunk("fetchPosts", async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await response.json();
  return data;
});
// console.log(fetchPosts.pending());
// export const fetchPosts = () => {
//   return async (dispatch) => {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//     const data = await response.json();
//     dispatch(todoSlice.actions.updatePosts(data));
//   };
// };
