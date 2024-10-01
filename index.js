function openMenu(){
    document.body.classList += " menu--open"
}

function closeMenu(){
    document.body.classList.remove('menu--open')
}

document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        const questionBar = question.querySelector('.question-bar');

        questionBar.addEventListener('click', () => {
            const isActive = question.classList.contains('active');

            // Close all other questions
            faqQuestions.forEach(q => {
                if (q !== question) {
                    q.classList.remove('active');
                }
            });

            // Toggle the clicked question
            question.classList.toggle('active');
        });
    });
});


