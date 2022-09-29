import React, {MutableRefObject} from 'react';
import {List, ListItemButton, ListItemIcon, Typography} from "@mui/material";
import {ArrowDown} from "../../icons";
import {useMainPageStyles} from "../mainPageStyles";
import {IMainMenuArrayForDesktop} from "../Header";


interface IHeaderNav {
    mainMenuArrayForDesktop: IMainMenuArrayForDesktop[];
    openPopover: boolean;
    themeCurrent: "dark" | "light";
    toggleMenuBlock: MutableRefObject<null>;
    handleClick: () => void;
    id: string | undefined;
}

const HeaderNav = ({
                       mainMenuArrayForDesktop,
                       handleClick,
                       openPopover,
                       themeCurrent,
                       toggleMenuBlock,
                       id
                   }: IHeaderNav) => {
    const {classes} = useMainPageStyles();

    return (
        <List dense disablePadding className={classes.headerMainMenu}>
            {mainMenuArrayForDesktop.map(({href, title}, index) => (
                <ListItemButton
                    dense
                    href={href}
                    key={title + index}
                    selected={title === "Тренажер"}
                    classes={{
                        root: classes.headerMainMenuItemText,
                        selected: classes.headerMainMenuItemTextSelected
                    }}
                >
                    <Typography
                    >
                        {title}
                    </Typography>
                </ListItemButton>
            ))}
            <ListItemButton
                className={openPopover ?
                    (themeCurrent === "dark" ? classes.listItemHasOpenPopoverDark : classes.listItemHasOpenPopover)
                    :
                    undefined}
                ref={toggleMenuBlock}
                aria-describedby={id}
                onClick={handleClick}
                dense
                classes={{
                    root: classes.headerMainMenuItemText,
                    selected: classes.headerMainMenuItemTextSelected
                }}
            >
                <Typography>Більше</Typography>
                <ListItemIcon className={classes.hamburgerButton}>
                    <ArrowDown/>
                </ListItemIcon>
            </ListItemButton>
        </List>

    );
};

export default HeaderNav;
