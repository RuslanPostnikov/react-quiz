import React from "react";
import styles from './Drawer.module.css';
import Backdrop from "../UI/Backdrop";
import {NavLink} from "react-router-dom";

const links = [
    {to: '/', label: 'List'},
    {to: '/auth', label: 'Authorization'},
    {to: 'quiz-creator', label: 'Create test'},
];

const Drawer = props => {
    const renderLinks = () => {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <NavLink
                        to={link.to}
                        className={({isActive}) => isActive ? styles.active : undefined}
                        onClick={props.onClose}
                    >
                        {link.label}
                    </NavLink>
                </li>
            )
        })
    }

    const cls = [styles.Drawer];
    if(!props.isOpen) {
        cls.push(styles.close)
    }

    return (
        <>
            <nav className={cls.join(' ')}>
                <ul>
                    {renderLinks()}
                </ul>
            </nav>
            {props.isOpen ? <Backdrop onClick={props.onClose}/> : null}
        </>
    );
}

export default Drawer;
