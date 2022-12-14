import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { albumApis, addAlbumApi } from "./API/albumAPI";
import { commentApis } from "./API/commentAPI";

const initialState = {
  album: [],
  albumItem: [],
  isLoading: false,
  error: null,
};

// 앨범
export const __getAlbumList = createAsyncThunk(
  "get/getAlbumList",
  async (payload, thunkAPI) => {
    try {
      // console.log(payload);
      const data = await albumApis.getAlbumList(payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (err) {
      return console.log(err);
    }
  }
);

export const __getAlbumItem = createAsyncThunk(
  "get/getAlbumItem",
  async (payload, thunkAPI) => {
    try {
      const data = await albumApis.getAlbumDetail(payload);
      // console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (err) {
      return console.log(err);
    }
  }
);

export const __addAlbumItem = createAsyncThunk(
  "post/addAlbumItem",
  async (payload, thunkAPI) => {
    try {
      // console.log(payload);
      const data = await addAlbumApi(payload);
      // console.log(data);
      const albumInfo = { id: data.albumId, imageUrl: data.imageUrl };
      alert("앨범이 등록되었습니다");
      return thunkAPI.fulfillWithValue(albumInfo);
    } catch (err) {
      alert("앨범 등록 실패");
      return console.log(err);
    }
  }
);

export const __delAlbumItem = createAsyncThunk(
  "delete/delAlbumItem",
  async (payload, thunkAPI) => {
    try {
      await albumApis.delAlbum(payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (err) {
      return console.log(err);
    }
  }
);

export const __updateAlbumItem = createAsyncThunk(
  "patch/updateAlbumItem",
  async (payload, thunkAPI) => {
    try {
      const data = await albumApis.updateAlbum(payload);
      if (data.status === 200) {
        alert(`${data.data}`);
      }
      // console.log(data);
      return thunkAPI.fulfillWithValue(payload);
    } catch (err) {
      return console.log(err);
    }
  }
);

// 댓글

export const __addComment = createAsyncThunk(
  "post/addCommnet",
  async ({ id, comment }, thunkAPI) => {
    try {
      const data = await commentApis.addComment({ id, comment });
      if (data.status === 200) {
        alert("댓글이 등록되었습니다.");
      }
      return thunkAPI.fulfillWithValue(data.data);
    } catch (err) {
      return console.log(err);
    }
  }
);

export const __delComment = createAsyncThunk(
  "delete/delComment",
  async (payload, thunkAPI) => {
    try {
      await commentApis.delComment(payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (err) {
      return console.log(err);
    }
  }
);

export const __updateComment = createAsyncThunk(
  "patch/updateComment",
  async (payload, thunkAPI) => {
    try {
      const data = await commentApis.updateComment(payload);
      if (data.status === 200) {
        alert(`${data.data}`);
      }
      // console.log(data);
      return thunkAPI.fulfillWithValue(payload);
    } catch (err) {
      return console.log(err);
    }
  }
);

export const albumSlice = createSlice({
  name: "album",
  initialState,
  reducers: {
    initAlbum: (state, action) => {
      state.album = initialState.album;
      state.albumItem = initialState.albumItem;
    },
  },
  extraReducers: {
    /// Album
    // Get List
    [__getAlbumList.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__getAlbumList.fulfilled]: (state, action) => {
      state.album = action.payload;
      state.isLoading = false;
    },
    // Get Item
    [__getAlbumItem.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__getAlbumItem.fulfilled]: (state, action) => {
      state.albumItem = action.payload;
      state.isLoading = false;
    },
    // Add
    [__addAlbumItem.fulfilled]: (state, action) => {
      state.album.unshift(action.payload);
    },
    // Delete
    [__delAlbumItem.fulfilled]: (state, action) => {
      state.album = state.album.filter(
        (item) => item.id !== Number(action.payload)
      );
    },
    // Update
    [__updateAlbumItem.fulfilled]: (state, action) => {
      const editContent = action.payload.editContent;
      state.albumItem = { ...state.albumItem, content: editContent };
      state.album = state.album.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, content: editContent };
        }
        return item;
      });
    },
    // Comments
    //Add
    [__addComment.fulfilled]: (state, action) => {
      state.albumItem.commentList.unshift(action.payload);
    },
    //Delete
    [__delComment.fulfilled]: (state, action) => {
      state.albumItem.commentList = state.albumItem.commentList.filter(
        (comment) => comment.id !== action.payload
      );
    },
    [__updateComment.fulfilled]: (state, action) => {
      const editContent = action.payload.content;
      state.albumItem.commentList = state.albumItem.commentList.map(
        (comment) => {
          if (comment.id === action.payload.id) {
            return { ...comment, content: editContent };
          }
          return comment;
        }
      );
    },
  },
});
//
export const { initAlbum } = albumSlice.actions;
export default albumSlice.reducer;
