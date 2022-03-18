import React from "react";
import styles from './Layout.module.css';
import MenuToggle from "../components/Navigation/MenuToggle";

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: false
        }
    }


    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        });
    }

    render() {
        return (
            <div className={styles.Layout}>
                <MenuToggle
                    onToggle={this.toggleMenuHandler}
                    isOpen={this.state.menu}
                />

                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
}
