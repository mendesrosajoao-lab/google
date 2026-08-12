// MENU MOBILE

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// FECHAR MENU AO CLICAR EM UM LINK

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// QUIZ

const answers = document.querySelectorAll(".answer");
const result = document.getElementById("quizResult");

answers.forEach(answer => {

    answer.addEventListener("click", () => {

        // Impede novas respostas depois da escolha
        answers.forEach(button => {
            button.disabled = true;
        });

        const correct = answer.dataset.correct === "true";

        if (correct) {
            answer.classList.add("correct");
            result.textContent = "✓ Correto! O uso de drogas pode afetar diversas áreas da vida do adolescente.";
            result.style.color = "#16805f";
        } else {
            answer.classList.add("wrong");
            result.textContent = "✗ Essa não é a resposta. Tente aprender mais sobre os efeitos e riscos.";
            result.style.color = "#c43d3d";

            // Mostra a resposta correta
            answers.forEach(button => {
                if (button.dataset.correct === "true") {
                    button.classList.add("correct");
                }
            });
        }
    });

});


// ANIMAÇÃO DOS CARDS

const animatedElements = document.querySelectorAll(
    ".card, .prevention-item"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);

animatedElements.forEach(element => {
    observer.observe(element);
});
