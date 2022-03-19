import React from "react";
import styles from './Drawer.module.css';
import Backdrop from "../UI/Backdrop";
import {NavLink} from "react-router-dom";

const links = [
    {to: '/', label: 'List'},
    {to: '/auth', label: 'Authorization'},
    {to: 'quiz-creator', label: 'Create test'},
];

export default class Drawer extends React.Component {
    renderLinks() {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <NavLink
                        to={link.to}
                        className={({isActive}) => isActive ? styles.active : undefined}
                        onClick={this.props.onClose}
                    >
                        {link.label}
                    </NavLink>
                </li>
            )
        })
    }

    render() {
        const cls = [styles.Drawer];
        if(!this.props.isOpen) {
            cls.push(styles.close)
        }

        return (
            <>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks()}
                    </ul>
                </nav>
                {this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> : null}
            </>
        );
    }
}
