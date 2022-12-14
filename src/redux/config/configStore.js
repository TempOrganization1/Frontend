import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import members from "../modules/membersSlice";
import schedule from "../modules/scheduleSlice";
import group from "../modules/groupSlice";
import album from "../modules/albumSlice";
import mypage from "../modules/mypageSlice";
import notice from "../modules/noticeSlice";
import invite from "../modules/inviteSlice";
import chat from "../modules/chatSlice";

export const store = configureStore({
  reducer: {
    members,
    schedule,
    group,
    album,
    mypage,
    notice,
    invite,
    chat,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
//
