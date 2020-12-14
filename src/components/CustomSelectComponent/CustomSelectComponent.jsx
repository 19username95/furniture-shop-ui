import React, { useState } from "react";
import './CustomSelectComponent.scss'
import arrow from "../../assets/icons/ic_arrow.svg"
import checkmark from "../../assets/icons/ic_checkmark.svg"

export default function CustomSelectComponent({options, onChange}) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
        onChange(option.value)
    };

    return (
            <div className='Dropdown Dropdown-Container'>
                <div className='Dropdown-Header'
                     onClick={toggling}>
                    {selectedOption.title || options[0].title}
                    <img className='Dropdown-Arrow' alt='' src={arrow}/>
                </div>
                {isOpen && (
                    <div className='Dropdown-ListContainer'>
                        <ul className='Dropdown-List'>
                            {options.map((option) => (
                                <li className='Dropdown-ListItem'
                                    onClick={() => onOptionClicked(option)}
                                    key={option.value}>
                                    {option.title}
                                    {option.value === selectedOption.value ?
                                        <img alt='' src={checkmark}/>
                                        : null}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
    );
}
