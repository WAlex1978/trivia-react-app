import axios from 'axios';

async function fetchQuestion(category, difficulty) {
    try {
        // Fetch trivia question from API
        const question = await axios.get(`https://opentdb.com/api.php?amount=1&category=${category}&difficulty=${difficulty}`);

        // If trivia question could not be fetched
        // Throw error with response code
        if (question.data.response_code !== 0) {
            throw Error ("response_code: " + question.data.response_code);
        }

        // If trivia question has been fetched
        return question;
    }

    catch (err) {

        // Log response code and return null
        console.log(err);
        return null;
    }
};

export default fetchQuestion;