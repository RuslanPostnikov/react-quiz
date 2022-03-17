import React from "react";
import styles from './Layout.module.css'

export default class Layout extends React.Component {
    render() {
        return (
            <div className={styles.Layout}>
                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
}
