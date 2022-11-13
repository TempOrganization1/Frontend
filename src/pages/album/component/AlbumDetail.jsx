import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useInput } from "../../../hooks/useInput";
import {
  __changed,
  __delAlbumItem,
  __getAlbumItem,
  __updateAlbumItem,
} from "../../../redux/modules/albumSlice";

const AlbumDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const partyId = useParams().partyid;
  const id = useParams().id;

  // 앨범 정보
  const albumItem = useSelector((state) => state.album.albumItem);
  const { writer, place, profileImageUrl, imageUrl, beforeTime, content } =
    albumItem;

  //수정시 state
  const [updateMode, setUpdateMode] = useState(false);
  const [contentInput, onChange, reset, setContentInput] = useInput(content);

  useEffect(() => {
    dispatch(__getAlbumItem(id));
    setContentInput(content);
  }, [dispatch, navigate]);

  const updateClick = () => {
    console.log(id, contentInput);
    if (!contentInput) {
      return alert("내용을 입력해주세요");
    }
    dispatch(__updateAlbumItem({ id, contentInput }));
    reset();
    setContentInput(content);
    setUpdateMode(false);
  };

  return (
    <div>
      <h1>AlbumDetail임</h1>
      <img src={profileImageUrl} alt="profileImg" />
      <span>{writer}</span>
      <br />
      <Stimg src={imageUrl} alt="img" />
      <p>{place}</p>
      {updateMode ? (
        <input value={contentInput} onChange={onChange} />
      ) : (
        <p>{content}</p>
      )}
      <p>{beforeTime}</p>
      {updateMode ? (
        <button onClick={updateClick}>수정완료</button>
      ) : (
        <>
          <button
            onClick={() => {
              setUpdateMode(true);
              setContentInput(content);
            }}
          >
            수정
          </button>
          <button
            onClick={() => {
              if (window.confirm("정말 삭제하시겠습니까?")) {
                dispatch(__delAlbumItem(id));
                alert("삭제가 완료되었습니다.");
                navigate(`/${partyId}/album`);
              }
            }}
          >
            삭제
          </button>
          <button
            onClick={() => {
              navigate(`/${partyId}/album`);
            }}
          >
            닫기
          </button>
        </>
      )}
    </div>
  );
};

export default AlbumDetail;

const Stimg = styled.img`
  width: 200px;
  height: 200px;
  margin: 5px;
  background-color: silver;
`;
