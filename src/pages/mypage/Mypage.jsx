import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Flex, Img, Span } from "../../elem";
import { useModal } from "../../hooks/useModal";
import { __getMypage } from "../../redux/modules/mypageSlice";
import EditMypage from "./component/EditMypage";

const Mypage = () => {
  const dispatch = useDispatch();
  const myProfile = useSelector((state) => state.mypage.myProfile);
  const { memberName, profileImageUrl } = myProfile;

  // 마이페이지 창 띄우기
  const [modal, openModal] = useModal();

  useEffect(() => {
    dispatch(__getMypage());
  }, [dispatch]);

  return (
    <>
      <StDiv onClick={openModal}>
        <Flex fd="row" ai="center">
          <Span variant="smallBold">{myProfile?.memberName}</Span>
          {profileImageUrl === null ? (
            <Img src="/images/userProfile.jpg" />
          ) : (
            <Img src={profileImageUrl} alt="profileImg" />
          )}
        </Flex>
      </StDiv>
      {modal && <EditMypage myProfile={myProfile} openModal={openModal} />}
    </>
  );
};

export default Mypage;

const StDiv = styled.div`
  display: flex;
  width: auto;
  justify-content: space-between;
  cursor: pointer;
`;
