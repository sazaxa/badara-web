import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, writeFaq } from '../../modules/Faq';
import { changeLoginPopup } from '../../modules/Popup';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      width: '100%',
      marginBottom: '20px',
    },
    '& >#outlined-multiline-flexible': {
      height: '50px',
    },
  },
}));

const FaqAddWrap = styled.section`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
  position: fixed;
  z-index: 1;
`;
const FaqAddPopup = styled.article`
  width: 500px;
  height: 360px;
  background: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  box-shadow: 0px 11px 15px -7px rgb(0 0 0 / 20%),
    0px 24px 38px 3px rgb(0 0 0 / 14%), 0px 9px 46px 8px rgb(0 0 0 / 12%);
  z-index: 2;
  padding: 30px;
  box-sizing: border-box;
  button {
    width: 100%;
    background-color: #1976d2;
    font-size: 16px;
    font-weight: 600;
    opacity: 0.8;
    margin-bottom: 10px;
  }
  button:hover {
    background-color: #1976d2;
    opacity: 1;
  }
`;

const FaqAddComponent = ({ close, onSubmit, onChange, update }) => {
  const classes = useStyles();
  const { faq } = useSelector((state) => state.faqs);
  if (!faq) {
    return null;
  }
  return (
    <>
      <FaqAddWrap onClick={close} />
      <FaqAddPopup>
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={update ? null : onSubmit}
        >
          <h2>FAQ</h2>
          <TextField
            id="outlined-basic"
            label="title"
            variant="outlined"
            onChange={onChange}
            name="title"
            defaultValue={update ? faq.title : null}
          />
          <TextField
            id="outlined-multiline-flexible"
            label="content"
            multiline
            rows={4}
            onChange={onChange}
            variant="outlined"
            name="content"
            defaultValue={update ? faq.content : null}
          />
          <Button variant="contained" color="primary" type="submit">
            {update ? '수정하기' : '추가하기'}
          </Button>
        </form>
      </FaqAddPopup>
    </>
  );
};
export default FaqAddComponent;
