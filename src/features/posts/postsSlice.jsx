import { createSlice, nanoid } from '@reduxjs/toolkit';

const postsSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(), // Ensure unique ID for each post
            title,
            content,
            user: userId,
            date: new Date().toISOString() // Ensure each post has a date
          }
        };
      }
    },
    postUpdated(state, action) {
      const { id, title, content } = action.payload;
      const existingPost = state.find(post => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    }
  }
});

export const { postAdded, postUpdated } = postsSlice.actions;
export default postsSlice.reducer;
