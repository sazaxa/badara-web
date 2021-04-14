import React from 'react';
// Material ui
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import Tos from './tos/Tos';
import Recipient from './recipient/Recipient';
import Products from './product/Products';
import Boxes from './Box/Boxes';
import Confirm from './confirm/Confirm';

const useStyles = makeStyles(theme => ({
    root: {
        width: '1140px',
        margin: '0 auto',
        '@media (max-width:1140px)': {
            width: '100%',
        },
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
    return ['수취인', '물품', '박스', '확인'];
};

// getStepContent

const getStepContent = (stepIndex, steps) => {
    switch (stepIndex) {
        // case 0:
        //     return <Tos stepIndex={stepIndex} steps={steps} />;
        case 0:
            return <Recipient stepIndex={stepIndex} steps={steps} />;
        case 1:
            return <Products stepIndex={stepIndex} steps={steps} />;
        case 2:
            return <Boxes stepIndex={stepIndex} steps={steps} />;
        case 3:
            return <Confirm stepIndex={stepIndex} steps={steps} />;
        default:
            return 'Unknown stepIndex';
    }
};

const ApplyMain = ({ activeStep }) => {
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
                <div>
                    <Typography className={classes.instructions}>{getStepContent(activeStep, steps)}</Typography>
                </div>
            </div>
        </div>
    );
};

export default ApplyMain;
