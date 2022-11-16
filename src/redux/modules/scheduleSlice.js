import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addScheduleApi,
  getScheduleApi,
  getScheduleDetailApi,
  delScheduleApi,
  getGroupScheduleApi,
  putScheduleEditApi,
} from "./API/scheduleAPI";

const initialState = {
  schedule: [],
  scheduleDetail: {},
  groupSchedule: [],
  isLoading: false,
  error: null,
};

//일정 추가하기
export const __addSchedule = createAsyncThunk(
  "post/addSchedule",
  async (payload, thunkAPI) => {
    try {
      const response = await addScheduleApi(payload);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (err) {
      console.log("error");
      return thunkAPI.rejectWithValue(err);
    }
  }
);

//그룹의 전체 일정 불러오기
export const __getSchedule = createAsyncThunk(
  "get/getSchedule",
  async (payload, thunkAPI) => {
    try {
      const res = await getScheduleApi(payload);
      return thunkAPI.fulfillWithValue(res.data);
    } catch (err) {
      console.log("error", err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

//그룹의 일정 상세 조회
export const __getScheduleDetail = createAsyncThunk(
  "get/getScheduleDetail",
  async (payload, thunkAPI) => {
    try {
      const res = await getScheduleDetailApi(payload);
      return thunkAPI.fulfillWithValue(res.data);
    } catch (err) {
      console.log("error", err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

//가입된 그룹의 일정 전체 조회(메인)
export const __getGroupSchedule = createAsyncThunk(
  "get/getGroupSchedule",
  async (payload, thunkAPI) => {
    try {
      const res = await getGroupScheduleApi();
      // console.log("axios??", res);
      return thunkAPI.fulfillWithValue(res);
    } catch (err) {
      console.log("error", err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const __delSchedule = createAsyncThunk(
  "delete/delSchedule",
  async (payload, thunkAPI) => {
    console.log("async=>", payload);
    try {
      await delScheduleApi(payload);
      console.log("???????=>", payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (err) {
      console.log("error ::::::", err.response);
      return thunkAPI.rejectWithValue("<<", err);
    }
  }
);

export const __editSchedules = createAsyncThunk(
  "put/editSchedules",
  async (payload, thunkAPI) => {
    try {
      await putScheduleEditApi(payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (err) {
      console.log("error ::::::", err.response);
      return thunkAPI.rejectWithValue("<<", err);
    }
  }
);

export const scheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {},
  extraReducers: {
    // create
    [__addSchedule.pending]: (state) => {
      state.isLoading = true;
    },
    [__addSchedule.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.schedule?.push(action.payload);
    },
    [__addSchedule.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // 그룹의 일정 전체 조회

    [__getSchedule.pending]: (state) => {
      state.isLoading = true;
    },
    [__getSchedule.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.schedule = action.payload;
    },
    [__getSchedule.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // 가입된 그룹의 일정 전체 조회

    [__getGroupSchedule.pending]: (state) => {
      state.isLoading = true;
    },
    [__getGroupSchedule.fulfilled]: (state, action) => {
      state.isLoading = false;
      // console.log("그룹 일정 전체조회===>", action);
      state.groupSchedule = action.payload;
    },
    [__getGroupSchedule.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    //상세조회

    [__getScheduleDetail.pending]: (state) => {
      state.isLoading = true;
    },
    [__getScheduleDetail.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.scheduleDetail = action.payload;
    },
    [__getScheduleDetail.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    //삭제
    [__delSchedule.pending]: (state) => {
      state.isLoading = true;
    },
    [__delSchedule.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.scheduieDetail.data = state.scheduieDetail.data.filter(
        (item) => item.scheduleId !== action.payload
      );
    },
    [__delSchedule.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    //수정
    [__editSchedules.pending]: (state) => {
      state.isLoading = true;
    },
    [__editSchedules.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log("슬라이스 액션=>", action);
      state.scheduleDetail = action.payload.editSchedule;
    },
    [__editSchedules.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { schedule } = scheduleSlice.actions;
export default scheduleSlice.reducer;