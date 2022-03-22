import React from "react";
import styles from './Layout.module.css';
import MenuToggle from "../components/Navigation/MenuToggle";
import Drawer from "../components/Navigation/Drawer";
import {connect} from "react-redux";

class Layout extends React.Component {
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

    MenuCloseHandler = () => this.setState({menu: false});

    render() {
        return (
            <div className={styles.Layout}>

                <Drawer
                    onClose={this.MenuCloseHandler}
                    isOpen={this.state.menu}
                    isAuthenticated={this.props.isAuthenticated}
                />

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

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.auth.token
    }
}

export default connect(mapStateToProps)(Layout);
