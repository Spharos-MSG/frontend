import React from 'react'

function CartIcon(props:any) {

    const w = props.w;
    const h = props.h;

    return (
        <svg width={w} height={h} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.4 12.4H10V13.6H24.4V12.4Z" fill="black" />
            <path fillRule="evenodd" clipRule="evenodd" d="M10 23.2C10 24.52 11.08 25.6 12.4 25.6C13.72 25.6 14.8 24.52 14.8 23.2C14.8 21.88 13.72 20.8 12.4 20.8C11.08 20.8 10 21.88 10 23.2ZM11.2 23.2C11.2 22.48 11.68 22 12.4 22C13.12 22 13.6 22.48 13.6 23.2C13.6 23.92 13.12 24.4 12.4 24.4C11.68 24.4 11.2 23.92 11.2 23.2Z" fill="black" />
            <path fillRule="evenodd" clipRule="evenodd" d="M19.6 23.2C19.6 24.52 20.68 25.6 22 25.6C23.32 25.6 24.4 24.52 24.4 23.2C24.4 21.88 23.32 20.8 22 20.8C20.68 20.8 19.6 21.88 19.6 23.2ZM20.8001 23.2C20.8001 22.48 21.2801 22 22.0001 22C22.7201 22 23.2001 22.48 23.2001 23.2C23.2001 23.92 22.7201 24.4 22.0001 24.4C21.2801 24.4 20.8001 23.92 20.8001 23.2Z" fill="black" />
            <path d="M23.08 19.6H11.32L8.08001 8.79998H5.20001V7.59998H9.04001L12.28 18.4H22.12L24.4 11.08L25.6 11.32L23.08 19.6Z" fill="black" />
        </svg>
    )
}

export default CartIcon
