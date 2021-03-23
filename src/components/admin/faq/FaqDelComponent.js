import React from 'react';
import { Fullscreen, AskModalBlock, StyledButton } from 'styles/FaqStyles';

const FaqDelComponent = ({ close, onRemove }) => {
    return (
        <Fullscreen>
            <AskModalBlock>
                <h2>FAQ 삭제</h2>
                <p>정말로 삭제하겠습니까?</p>
                <div className="buttons">
                    <StyledButton onClick={() => close()}>취소</StyledButton>
                    <StyledButton onClick={() => onRemove()}>확인</StyledButton>
                </div>
            </AskModalBlock>
        </Fullscreen>
    );
};

export default FaqDelComponent;
