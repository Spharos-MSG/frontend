import React from 'react'

function Like(props:any) {

    const w = props.w;
    const h = props.h;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={w} height={h} viewBox="0 0 28 28" fill="none">
            <path d="M13.9998 24.836L4.7458 14.84C3.4298 13.412 2.7998 11.928 2.7998 10.318C2.7998 6.94395 5.4738 4.19995 8.7498 4.19995C11.0178 4.19995 12.9918 5.51595 13.9998 7.44795C15.0078 5.51595 16.9818 4.19995 19.2498 4.19995C22.5258 4.19995 25.1998 6.94395 25.1998 10.318C25.1998 11.928 24.5698 13.398 23.2678 14.826L13.9998 24.836ZM8.7498 5.59995C6.2438 5.59995 4.1998 7.71395 4.1998 10.318C4.1998 11.578 4.7038 12.712 5.7678 13.888L13.9998 22.764L22.2318 13.888C23.2958 12.712 23.7998 11.578 23.7998 10.318C23.7998 7.71395 21.7558 5.59995 19.2498 5.59995C16.7438 5.59995 14.6998 7.71395 14.6998 10.318H13.2998C13.2998 7.71395 11.2558 5.59995 8.7498 5.59995Z" fill="black" />
        </svg>

    )
}

export default Like
