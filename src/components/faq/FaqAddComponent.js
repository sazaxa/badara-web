import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
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

const FaqAddComponent = ({ close, onSubmit, onChange }) => {
    const classes = useStyles();

    return (
        <>
            <FaqAddWrap onClick={close} />
            <FaqAddPopup>
                <form className={classes.root} noValidate autoComplete="off" onSubmit={onSubmit}>
                    <h2>FAQ</h2>
                    <TextField id="outlined-basic" label="title" variant="outlined" onChange={onChange} name="title" />
                    <TextField
                        id="outlined-multiline-flexible"
                        label="content"
                        multiline
                        rows={4}
                        onChange={onChange}
                        variant="outlined"
                        name="content"
                    />
                    <Button variant="contained" color="primary" type="submit">
                        추가하기
                    </Button>
                </form>
            </FaqAddPopup>
        </>
    );
};
export default FaqAddComponent;
