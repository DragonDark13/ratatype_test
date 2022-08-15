import React from 'react';
// Material components
import {SvgIcon} from '@mui/material';

export default function ArrowDown(props: any) {

    return (
        <SvgIcon aria-label={'ArrowDown'} {...props} width="16" height="16" viewBox="0 0 16 16" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.64">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M2.16496 5.561C2.40741 5.28391 2.82859 5.25583 3.10568 5.49828L8.00001 9.78082L12.8943 5.49828C13.1714 5.25583 13.5926 5.28391 13.8351 5.561C14.0775 5.83809 14.0494 6.25926 13.7723 6.50172L8.43901 11.1684C8.18766 11.3883 7.81236 11.3883 7.56101 11.1684L2.22767 6.50172C1.95058 6.25926 1.9225 5.83809 2.16496 5.561Z"
                      fill="inherit"/>
            </g>
        </SvgIcon>
    );
}
