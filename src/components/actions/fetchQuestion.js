import axios from 'axios';

async function fetchQuestion(category, difficulty) {
    try {

        // Fetch trivia question from API
        // If category is null then fetch any category
        // If difficulty is null then fetch any difficulty
        let question = await axios.get("https://opentdb.com/api.php?amount=1" +
            (category === null ? '' : ("&category=" + category)) + 
            (difficulty === null ? '' : ("&difficulty=" + difficulty)));

        // If trivia question could not be fetched
        // Throw error with response code
        if (question.data.response_code !== 0) {
            throw Error ("response_code: " + question.data.response_code);
        }

        // If trivia question has been fetched
        // Parse data and replace 
        question = JSON.stringify(question.data.results[0]);
        question = JSON.parse(question.replace(/&quot;/g,"'").replace(/&#039;/g,"'"));
        return question;
    }

    catch (err) {

        // Log response code and return null
        console.log(err);
        return null;
    }
};

export default fetchQuestion;