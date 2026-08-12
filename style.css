// MENU MOBILE

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});


// FECHAR MENU AO CLICAR

const links = document.querySelectorAll("#navLinks a");

links.forEach(function (link) {

    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });

});


// QUIZ

const answers = document.querySelectorAll(".answer");
const result = document.getElementById("quizResult");

answers.forEach(function (answer) {

    answer.addEventListener("click", function () {

        answers.forEach(function (button) {
            button.disabled = true;
        });

        const correct =
            answer.getAttribute("data-correct") === "true";

        if (correct) {

            answer.classList.add("correct");

            result.textContent =
                "✓ Muito bem! Essa é a resposta correta.";

            result.style.color = "#16805f";

        } else {

            answer.classList.add("wrong");

            result.textContent =
                "✗ Resposta incorreta. A alternativa correta está destacada.";

            result.style.color = "#c43d3d";

            answers.forEach(function (button) {

                if (
                    button.getAttribute("data-correct") === "true"
                ) {
                    button.classList.add("correct");
                }

            });
        }

    });

});
