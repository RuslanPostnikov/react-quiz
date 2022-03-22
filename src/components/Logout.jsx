import {connect} from "react-redux";
import {logout} from "../store/actions/auth";
import {useEffect} from "react";
import {Navigate} from 'react-router-dom'

const Logout = props => {
    const { logout } = props;

    useEffect(() => logout(), [logout]);

    return (
        <Navigate to="/" replace />
    )

}

function mapDispatchToProps(dispatch) {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(null, mapDispatchToProps)(Logout);
