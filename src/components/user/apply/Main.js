import React, { useState } from 'react';
// Material ui
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Tos from './tos/Tos';
import Recipient from './recipient/Recipient';
import Products from './product/Products';
import Boxes from './Box/Boxes';

const useStyles = makeStyles(theme => ({
    root: {
        width: '1140px',
        margin: '0 auto',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

//  getSteps
const getSteps = () => {
    return ['이용약관', '수취인', '물품', '박스', '확인'];
};

// getStepContent

const getStepContent = (stepIndex, steps) => {
    switch (stepIndex) {
        case 0:
            return <Tos stepIndex={stepIndex} steps={steps} />;
        case 1:
            return <Recipient stepIndex={stepIndex} steps={steps} />;
        case 2:
            return <Products stepIndex={stepIndex} steps={steps} />;
        case 3:
            return <Boxes stepIndex={stepIndex} steps={steps} />;
        case 4:
            return '마지막 확인';
        default:
            return 'Unknown stepIndex';
    }
};

const ApplyMain = ({ activeStep, handleNext, handleBack, handleReset }) => {
    const classes = useStyles();
    const steps = getSteps();
    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map(label => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>All steps completed</Typography>
                        <Button onClick={handleReset}>Reset</Button>
                    </div>
                ) : (
                    <div>
                        <Typography className={classes.instructions}>{getStepContent(activeStep, steps)}</Typography>
                        <div>
                            {/* <Button disabled={activeStep === 0} onClick={handleBack} className={classes.backButton}>
                                Back
                            </Button>
                            <Button variant="contained" color="primary" onClick={handleNext}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button> */}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ApplyMain;
