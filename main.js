function showSurvey(question) {
    const response = prompt(question);

    if (response) {
        alert('Salamat sa iyong sagot: ' + response);
    } else {
        alert('Nag-cancel ka ng survey.');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const contactBtn = document.getElementById('nav-contact');
    if (contactBtn) {
        contactBtn.addEventListener('click', function() {
            showSurvey('SURVEY: Ano ang iyong katanungan para sa "Contact Us"?');
        });
    }

    const aboutBtn = document.getElementById('nav-about');
    if (aboutBtn) {
        aboutBtn.addEventListener('click', function() {
            showSurvey('SURVEY: Ano ang pinaka-gusto mong malaman tungkol sa amin?');
        });
    }

    const emailBtn = document.getElementById('nav-email');
    if (emailBtn) {
        emailBtn.addEventListener('click', function() {
            showSurvey('SURVEY: Paki-lagay ang iyong email para sa aming newsletter.');
        });
    }

    const homeBtn = document.getElementById('nav-home');
    if (homeBtn) {
        homeBtn.addEventListener('click', function() {
            alert('Nasa Home page ka na.');
        });
    }
});
