import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const Fullscreen = styled.div`
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AskModalBlock = styled.div`
  width: 320px;
  background: #fff;
  padding: 1.5rem;
  border-radius: 4px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.125);
  h2 {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 3rem;
  }
  .buttons {
    display: flex;
    justify-content: flex-end;
  }
`;
const StyledButton = styled(Button)`
  height: 2rem;
  & + & {
    margin-left: 0.75rem;
  }
  .cancel {
    background: #f50057;
  }
  .comfirm {
    background: #3f51b5;
  }
`;
const FaqDelComponent = ({ visible, close, onRemove }) => {
  if (!visible) return null;
  return (
    <Fullscreen>
      <AskModalBlock>
        <h2>FAQ 삭제</h2>
        <p>정말로 삭제하겠습니까?</p>
        <div className="buttons">
          <StyledButton onClick={close}>취소</StyledButton>
          <StyledButton onClick={onRemove}>확인</StyledButton>
        </div>
      </AskModalBlock>
    </Fullscreen>
  );
};

export default FaqDelComponent;
