// 작성 페이지

import { useState } from "react";
import { useDispatch } from "react-redux";
import { __addSchedule } from "../../../redux/modules/scheduleSlice";
import LandingPage from "./Landing";

const ScheduleCreate = () => {
  const dispatch = useDispatch();

  const [schedule, setSchedule] = useState({
    title: "",
    content: "",
    meetTime: "",
    date: "",
    place: "",
  });

  console.log("스케쥴 안에 무엇이 담겨있나요? =>", schedule);

  const onAddScheduleHandler = (e) => {
    e.preventDefault();
    dispatch(__addSchedule(schedule));
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setSchedule({ ...schedule, [name]: value });
  };

  return (
    <div>
      <form onSubmit={onAddScheduleHandler}>
        <input
          type="text"
          placeholder="제목"
          name="title"
          onChange={onChangeHandler}
        />
        <input
          type="text"
          placeholder="내용"
          name="content"
          onChange={onChangeHandler}
        />
        <input type="time" name="meetTime" onChange={onChangeHandler} />
        <input type="date" name="date" onChange={onChangeHandler} />
        <input type="text" name="place" onChange={onChangeHandler} />
        <button type="submit">작성</button>
      </form>
      <LandingPage />
    </div>
  );
};

export default ScheduleCreate;
