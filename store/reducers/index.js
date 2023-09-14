// import { createSlice, configureStore } from "@reduxjs/toolkit";

// const userSlice = createSlice({
//   name: "users",
//   initialState: { name: "", password: "" },
//   reducers: {
//     addUser(state, action) {},
//   },
//   removeUser(state, action) {
//     console.log("user deleted");
//   },
// });

// const moviesSlice = createSlice({
//   name: "movie",
//   initialState: [],
//   reducers: {
//     addMovie(state, action) {
//       state.push(action.payload);
//     },
//     removeMovie(state, action) {
//       const i = state.indexOf(action.payload);
//       state.splice(i, 1);
//     },
//     reset(state, action) {
//       return [];
//     },
//   },
// });

// const songsSlice = createSlice({
//   name: "song",
//   initialState: [],
//   reducers: {
//     addSong(state, action) {
//       state.push(action.payload);
//     },
//     removeSong(state, action) {
//       const i = state.indexOf(action.payload);
//       state.splice(i, 1);
//     },
//   },
//   extraReducers(builder) {
//     builder.addCase("movie/reset", (state, action) => {
//       return [];
//     });
//   },
// });

// const store = configureStore({
//   reducer: {
//     songs: songsSlice.reducer,
//     movies: moviesSlice.reducer,
//   },
// });

// export { store };

// export const { addSong, removeSong } = songsSlice.actions;
// export const { addMovie, removeMovie, reset } = moviesSlice.actions;
