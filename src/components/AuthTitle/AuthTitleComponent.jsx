import React from 'react';

import './AuthTitleComponent.scss'

export default function AuthTitleComponent(props) {
    return (
        <div className='AuthTitle'>
            {props.children}
        </div>
    );
}