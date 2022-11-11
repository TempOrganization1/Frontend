import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import members from "../modules/membersSlice";
import schedule from "../modules/scheduleSlice";
import group from "../modules/groupSlice";
import album from "../modules/albumSlice";

export const store = configureStore({
  reducer: {
    members,
    schedule,
    group,
    album,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
//
