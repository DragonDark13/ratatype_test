import {Alert, Snackbar, SnackbarOrigin} from "@mui/material";
import React, {ReactElement, useEffect} from "react";

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

    const [openSnackBar, setOpenSnackBar] = React.useState<boolean>(false);


    const handleSnackbarClose = () => {
        setOpenSnackBar(false);
    };

    useEffect(() => {
        if (correctChar) {
            setSnackBarChildren(
                <SnackBarSuccessMessage
                    handleSnackbarClose={handleSnackbarClose}
                    message={"Ви чудові"}
                />
            );
            setOpenSnackBar(true);
            setSnackBarState(prevState => ({...prevState, open: true, autoHideDuration: 5000}));

        }
    }, [correctChar]);


    // React.useEffect(() => {
    //     const handleSnackbarClose = () => {
    //         setSnackBarState({...snackBarState, open: false, autoHideDuration: 5000});
    //     };
    //
    //     if (errorChar) {
    //         setSnackBarChildren(<SnackBarError handleSnackbarClose={handleSnackbarClose}
    //                                            message={"Помиляйтесь, але їдіть вперед!"}/>);
    //         setSnackBarState(prevState => ({...prevState, open: true, autoHideDuration: 5000}));
    //     }
    // }, [errorChar, setSnackBarState, snackBarState]);

    useEffect(() => {
        if (correctChar) {
            setSnackBarChildren(
                <SnackBarError

                    handleSnackbarClose={handleSnackbarClose}
                    message={"Помиляйтесь, але їдіть вперед!"}
                />
            );
            setOpenSnackBar(true);
            setSnackBarState(prevState => ({...prevState, open: true, autoHideDuration: 5000}));
        }
    }, [errorChar]);

    return (
        <>
            {openSnackBar && (
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
            )}
        </>

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

const SnackBarError = React.forwardRef(function SnackbarFunction(
    {handleSnackbarClose, message}: TSnackbarMessageProps,
    ref: any
) {
    return (
        <Alert ref={ref} elevation={6} variant='filled' severity='error' onClose={handleSnackbarClose}>
            {message}
        </Alert>
    );
});


export default SnackBarCustom;
