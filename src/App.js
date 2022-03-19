import Layout from "./hoc/Layout";
import {Route, Routes} from "react-router-dom";
import Quiz from "./containers/Quiz";
import QuizList from "./containers/QuizList";
import QuizCreator from "./containers/QuizCreator";
import Auth from "./containers/Auth";

function App() {
  return (
    <Layout>
        <Routes>
            <Route path='/' element={<Quiz />}/>
            <Route path='auth' element={<Auth />}/>
            <Route path='quiz-creator' element={<QuizCreator />}/>
            <Route path='quiz/:id' element={<QuizList />}/>
        </Routes>
    </Layout>
  );
}

export default App;
