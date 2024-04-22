function getAnswer() {
    const questionInput = document.getElementById('questionInput');
    const question = questionInput.value.toLowerCase();
    const answerDisplay = document.getElementById('answer');

    if (question.includes("how are you")) {
        answerDisplay.innerText = "I'm good, thanks for asking!";
    } else if (question.includes("what is your name")) {
        answerDisplay.innerText = "I'm a simple Q&A bot.";
    } else {
        answerDisplay.innerText = "Sorry, I don't understand the question.";
    }
}