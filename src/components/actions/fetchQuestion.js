import axios from 'axios';

async function fetchQuestion(category, difficulty) {

    const question = await axios.get(`https://opentdb.com/api.php?amount=1&category=${category}&difficulty=${difficulty}`);
    return question;
};

export default fetchQuestion;