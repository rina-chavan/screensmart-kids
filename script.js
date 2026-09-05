function checkHabits() {

    let screenTime = document.querySelector(
        'input[name="screenTime"]:checked'
    );

    let purpose = document.querySelector(
        'input[name="purpose"]:checked'
    );

    let outdoor = document.querySelector(
        'input[name="outdoor"]:checked'
    );

    let meals = document.querySelector(
        'input[name="meals"]:checked'
    );

    let sleep = document.querySelector(
        'input[name="sleep"]:checked'
    );


    // Check whether all questions are answered

    if (!screenTime || !purpose || !outdoor || !meals || !sleep) {

        document.getElementById("result").innerHTML =
            "⚠️ Please answer all 5 questions first.";

        return;
    }


    // Calculate awareness score

    let score = 0;

    score += Number(screenTime.value);

    if (outdoor.value === "1") {
        score += 1;
    }

    if (meals.value === "1") {
        score += 1;
    }

    if (sleep.value === "1") {
        score += 1;
    }


    // Display result

    let result = document.getElementById("result");


    if (score <= 4) {

        result.innerHTML =
            "🟢 Good Balance<br><br>" +
            "Your answers show several positive screen habits. " +
            "Continue balancing screen activities with offline activities.";

    }

    else if (score <= 6) {

        result.innerHTML =
            "🟡 Needs Improvement<br><br>" +
            "Consider creating more screen-free periods and " +
            "encouraging outdoor activities, hobbies and family time.";

    }

    else {

        result.innerHTML =
            "🔴 Needs More Attention<br><br>" +
            "Consider creating a structured routine and " +
            "balancing screen activities with offline activities.";

    }
}
function calculateQuiz() {

    let score = 0;

    let q1 = document.querySelector('input[name="q1"]:checked');
    let q2 = document.querySelector('input[name="q2"]:checked');
    let q3 = document.querySelector('input[name="q3"]:checked');
    let q4 = document.querySelector('input[name="q4"]:checked');
    let q5 = document.querySelector('input[name="q5"]:checked');


    // Check whether all questions are answered

    if (!q1 || !q2 || !q3 || !q4 || !q5) {

        document.getElementById("quizResult").innerHTML =
            "⚠️ Please answer all 5 questions.";

        return;
    }


    score =
        Number(q1.value) +
        Number(q2.value) +
        Number(q3.value) +
        Number(q4.value) +
        Number(q5.value);


    let result = document.getElementById("quizResult");
if (score === 5) {

    result.innerHTML =
        "🎉 Excellent!<br><br>" +
        "<strong>Your Score: " + score + " / 5</strong><br><br>" +
        "You have a very good understanding of healthy screen habits.";

}

else if (score >= 3) {

    result.innerHTML =
        "👍 Good Job!<br><br>" +
        "<strong>Your Score: " + score + " / 5</strong><br><br>" +
        "You understand many healthy screen habits. Keep learning!";

}

else {

    result.innerHTML =
        "📚 Keep Learning!<br><br>" +
        "<strong>Your Score: " + score + " / 5</strong><br><br>" +
        "Learn more about balanced screen habits and try the quiz again.";

}
}
function submitFeedback() {

    let useful = document.querySelector(
        'input[name="useful"]:checked'
    );

    let learned = document.querySelector(
        'input[name="learned"]:checked'
    );

    let experience = document.querySelector(
        'input[name="experience"]:checked'
    );

    if (!useful || !learned || !experience) {

        document.getElementById("feedbackResult").innerHTML =
            "⚠️ Please answer Questions 1, 2 and 3.";

        return;
    }

    // Open Google Feedback Form
    window.open(
        " https://docs.google.com/forms/d/e/1FAIpQLSdBD_FW7C5OTT-_3tP40wVDrCsU3mSBORfHRjTan4QQ1XSDZw/viewform?usp=sharing&ouid=104695514139912237646",
        "_blank"
    );

}