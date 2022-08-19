import {Alert, Snackbar, SnackbarOrigin} from "@mui/material";
import React, {ReactElement} from "react";

type TSnackbarMessageProps = {
    handleSnackbarClose: () => void;
    message: string;
};

interface ISnackBar {
    errorChar: number,
    correctChar: number,
}

interface SnackBarStateExtended extends SnackBarState {
    autoHideDuration: number;
}


interface SnackBarState extends SnackbarOrigin {
    open: boolean;
    message: number | string | null;
}


const SnackBarCustom = ({correctChar, errorChar}: ISnackBar) => {

    const [snackBarChildren, setSnackBarChildren] = React.useState<ReactElement<any, any> | undefined>(undefined);

    const [snackBarState, setSnackBarState] = React.useState<SnackBarStateExtended>({
        open: false,
        vertical: 'bottom',
        horizontal: 'right',
        message: '',
        autoHideDuration: 5000
    });


    React.useEffect(() => {
        if (errorChar) {
            setSnackBarChildren(<SnackBarApiError handleSnackbarClose={handleSnackbarClose} message={"Помиляйтесь," +
            " але їдіть вперед!"}/>);
            setSnackBarState({...snackBarState, open: true, autoHideDuration: 5000});
        }
    }, [errorChar]);

    React.useEffect(() => {
        if (correctChar) {
            setSnackBarChildren(
                <SnackBarSuccessMessage handleSnackbarClose={handleSnackbarClose} message={"Ви чудові"}/>
            );
            setSnackBarState({...snackBarState, open: true, autoHideDuration: 5000});
        }
    }, [correctChar]);


    const handleSnackbarClose = () => {
        setSnackBarState({...snackBarState, open: false, autoHideDuration: 5000});
    };


    return (
        <Snackbar
            anchorOrigin={{
                vertical: snackBarState.vertical,
                horizontal: snackBarState.horizontal
            }}
            open={snackBarState.open}
            onClose={handleSnackbarClose}
            autoHideDuration={snackBarState.autoHideDuration}
        >
            {snackBarChildren}
        </Snackbar>

    )

}

const SnackBarSuccessMessage = React.forwardRef(function SnackbarFunction(
    {handleSnackbarClose, message}: TSnackbarMessageProps,
    ref: any
) {
    return (
        <Alert ref={ref} elevation={6} variant='filled' severity='success' onClose={handleSnackbarClose}>
            {message}
        </Alert>
    );
});

const SnackBarApiError = React.forwardRef(function SnackbarFunction(
    {handleSnackbarClose, message}: TSnackbarMessageProps,
    ref: any
) {
    return (
        <Alert ref={ref} elevation={6} variant='filled' severity='error' onClose={handleSnackbarClose}>

        </Alert>
    );
});


export default SnackBarCustom;
