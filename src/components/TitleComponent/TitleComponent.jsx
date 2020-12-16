import React from 'react';

import './TitleComponent.scss'

export default function TitleComponent(props) {
    return (
        <div className='Title'>
            {props.children}
        </div>
    );
}