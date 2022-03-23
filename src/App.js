import Layout from "./hoc/Layout";
import {Route, Routes, Navigate} from "react-router-dom";
import Quiz from "./containers/Quiz";
import QuizList from "./containers/QuizList";
import QuizCreator from "./containers/QuizCreator";
import Auth from "./containers/Auth";
import {connect} from "react-redux";
import Logout from "./components/Logout";
import {useEffect} from "react";
import {autoLogin} from "./store/actions/auth";

const App = props => {
    const {autoLogin} = props;

    useEffect(() => autoLogin(), [autoLogin])

    return (
    <Layout>
        <Routes>
            <Route index element={<QuizList />}/>
            <Route path='quiz-creator' element={<QuizCreator />}/>
            <Route path='quiz/:id' element={<Quiz />}/>
            {!props.isAuthenticated ? <Route path='auth' element={<Auth />}/> : <Route path='logout' element={<Logout/>}/>}
            <Route path='*' element={<Navigate to='/' />}/>
        </Routes>
    </Layout>
  );
}

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.auth.token
    }
}

function mapDispatchToProps(dispatch) {
    return {
        autoLogin: () => dispatch(autoLogin)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
