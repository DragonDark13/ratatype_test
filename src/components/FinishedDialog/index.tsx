import React from 'react';
import {
    Button,
    Dialog, DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    List,
    ListItem,
    ListItemText,
    Typography, useTheme
} from "@mui/material";
import {useMainPageStyles} from "../mainPageStyles";

interface IFinishedDialog {
    openModal: boolean
    handleCloseModal: () => void,
    totalTimeTypeWritting: number,
    correctChar: number,
    phase: number,
    errorChar: number,
    textLength: number

}

const FinishedDialog = ({
                            totalTimeTypeWritting,
                            handleCloseModal,
                            openModal,
                            correctChar,
                            errorChar,
                            phase,
                            textLength
                        }: IFinishedDialog) => {
    const theme = useTheme();

    const {classes} = useMainPageStyles();

    const totalListArray = [
        {title: "Правильні символи", value: correctChar, color: theme.palette.success.main},
        {title: "Помилкові символи", value: errorChar, color: theme.palette.error.main},
        {title: "Усього символів", value: textLength},
        {title: "Усього фраз:", value: phase},
        {title: "Загальний час", value: `${totalTimeTypeWritting} секунд`}
    ]

    return (
        <Dialog
            open={openModal}
            onClose={handleCloseModal}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                <Typography variant={"h4"}>Ви пройшли вправу!</Typography>
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <Typography variant={"h5"}>Ваша статистика:</Typography>
                    <List>
                        {totalListArray.map(({title, value, color}) => (
                            <ListItem key={title + value} disableGutters disablePadding>
                                <ListItemText classes={{secondary: classes.statisticListItemSecondaryProps}}
                                              className={classes.statisticListItemText} secondaryTypographyProps={{
                                    variant: "h6",
                                    color: color ? color : "inherit"
                                }} primary={title} secondary={value}/>
                            </ListItem>
                        ))}
                    </List>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCloseModal} autoFocus>
                    Почати знову
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default FinishedDialog;
