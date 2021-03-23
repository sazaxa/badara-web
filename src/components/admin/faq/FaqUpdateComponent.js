import React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';
import { FaqAddWrap, FaqAddPopup } from 'styles/FaqStyles';

const useStyles = makeStyles(theme => ({
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

const FaqUpdateComponent = ({ close, onSubmit, onChange, FaqInfo }) => {
    const classes = useStyles();

    return (
        <>
            <FaqAddWrap onClick={close} />
            <FaqAddPopup>
                <form className={classes.root} noValidate autoComplete="off" onSubmit={onSubmit}>
                    <h2>FAQ 수정하기</h2>
                    <TextField
                        id="outlined-basic"
                        label="title"
                        variant="outlined"
                        onChange={e => onChange(e)}
                        name="title"
                        defaultValue={FaqInfo.title}
                    />
                    <TextField
                        id="outlined-multiline-flexible"
                        label="content"
                        multiline
                        rows={4}
                        onChange={e => onChange(e)}
                        variant="outlined"
                        name="content"
                        defaultValue={FaqInfo.content}
                    />
                    <Button variant="contained" color="primary" type="submit">
                        수정하기
                    </Button>
                </form>
            </FaqAddPopup>
        </>
    );
};
export default FaqUpdateComponent;
