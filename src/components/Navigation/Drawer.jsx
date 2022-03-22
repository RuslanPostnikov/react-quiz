import React from "react";
import styles from './Drawer.module.css';
import Backdrop from "../UI/Backdrop";
import {NavLink} from "react-router-dom";



const Drawer = props => {
    const renderLinks = (links) => {
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

    const links = [
        {to: '/', label: 'List'},
    ];

    if(props.isAuthenticated) {
        links.push({to: 'quiz-creator', label: 'Create test'});
        links.push({to: 'logout', label: 'Exit'});
    } else {
        links.push({to: '/auth', label: 'Authorization'});
    }

    const cls = [styles.Drawer];
    if(!props.isOpen) {
        cls.push(styles.close)
    }

    return (
        <>
            <nav className={cls.join(' ')}>
                <ul>
                    {renderLinks(links)}
                </ul>
            </nav>
            {props.isOpen ? <Backdrop onClick={props.onClose}/> : null}
        </>
    );
}

export default Drawer;
