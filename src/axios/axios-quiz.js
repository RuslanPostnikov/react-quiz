import axios from "axios";

export default axios.create({
    baseURL: 'https://react-quiz-fc068-default-rtdb.europe-west1.firebasedatabase.app/'
})
