import React from 'react';
// Material components
import {SvgIcon, SvgIconProps} from '@mui/material';
import {useMainPageStyles} from "../../components/mainPageStyles";


interface ILogoBird extends SvgIconProps{
    animation?:boolean
    animationBirdError?:boolean
}

export default function LogoBird({animation=false,animationBirdError=false,...rest}:ILogoBird) {


        const {classes} = useMainPageStyles();


    return (
        <SvgIcon className={classes.albaIcon + " " + (animationBirdError ? "typeError" : undefined)} aria-label={'LogoBird'} {...rest} width="88" height="88" viewBox="0 0 88 88" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_11_26)">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M32.8691 20.1249H57.1939C56.0944 14.4102 51.0671 10.0931 45.0315 10.0931C38.9959 10.0931 33.9686 14.4102 32.8691 20.1249Z"
                      fill="#2268BA"/>
                <path
                    d="M30.4739 67.0845L33.7996 75.7799C33.9581 76.1943 33.4138 76.5111 33.1318 76.1686C32.5619 75.4766 31.5406 75.3609 30.823 75.8981C30.4763 76.1577 29.9742 76.033 29.7955 75.6384L29.6809 75.3853C29.2648 74.4664 28.2884 73.9364 27.2912 74.0879L27.141 74.1108C26.6044 74.1923 26.1388 73.7379 26.2072 73.1995L26.9302 67.5098C27.0878 66.2691 28.4108 65.5438 29.5416 66.0783C29.9705 66.281 30.3044 66.6414 30.4739 67.0845Z"
                    fill="#D76423"/>
                <path
                    d="M39.0227 67.2118L42.3485 75.9073C42.507 76.3217 41.9627 76.6385 41.6806 76.296C41.1107 75.604 40.0895 75.4883 39.3718 76.0255C39.0251 76.2851 38.523 76.1604 38.3443 75.7658L38.2297 75.5127C37.8136 74.5938 36.8372 74.0638 35.84 74.2153L35.6898 74.2381C35.1533 74.3197 34.6877 73.8653 34.7561 73.3269L35.479 67.6372C35.6367 66.3965 36.9597 65.6712 38.0904 66.2057C38.5193 66.4084 38.8533 66.7688 39.0227 67.2118Z"
                    fill="#D76423"/>
                <path
                    d="M3.22753 43.259L21.0169 29.8659L38.4707 57.3167C38.0371 56.6481 26.0728 60.4077 17.8502 57.8986C10.2766 55.5875 5.18914 46.0532 3.22753 43.259Z"
                    fill="#2268BA"/>
                <path
                    className={`body ${animation ? "bodyAnimation" : undefined}`}
                    d="M59.9563 48.1305C58.9473 60.6176 47.8509 69.9099 35.1717 68.8854C22.4925 67.8609 13.0319 56.9077 14.0408 44.4206C15.0498 31.9335 26.1462 22.6412 38.8254 23.6656C45.093 24.1721 48.5368 29.1634 52.3556 33.5081C56.2621 37.9526 60.4665 41.8161 59.9563 48.1305Z"
                    fill="#3375C4" />
                <path
                    d="M38.5737 18.2984L38.562 28.0453L84.5674 28.0453C80.8736 24.5932 71.5784 20.7693 62.4027 20.0697L38.5737 18.2984Z"
                    fill="#FFB463" className={`upperJaw ${(animation ? "upperJawAnimation" : undefined)}`}/>
                <path
                    d="M84.7109 32.8309L84.7802 30.9347L46.02 27.6177L52.7493 62.6868C69.8036 63.2255 84.0879 49.8824 84.7109 32.8309Z"
                    fill="#FFB463" className={`bottomJaw  ${(animation ? "bottomJawAnimation" : undefined)}`}/>
                <rect x="25.1558" y="9.71526" width="20.9883" height="32.8097" rx="10.4941"
                      transform="rotate(0.09 25.1558 9.71526)" fill="#3375C4"/>
                <circle cx="35.1918" cy="20.2588" r="6.03964"
                        transform="rotate(0.038969 35.1918 20.2588)" fill="white"/>
                <circle cx="36.5388" cy="20.3482" r="3.66339"
                        transform="rotate(0.038969 36.5388 20.3482)" fill="black"/>
            </g>
            <defs>
                <clipPath id="clip0_11_26">
                    <rect width="88" height="88" fill="white" transform="matrix(-1 0 0 1 88 0)"/>
                </clipPath>
            </defs>

        </SvgIcon>
    );
}

