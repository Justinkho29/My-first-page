   
        
        function showSurvey(question) {
            const response = prompt(question);
            if (response) {
                alert('Salamat sa iyong sagot: ' + response);
            } else {
                alert('Nag-cancel ka ng survey.');
            }
        }

        document.getElementById('nav-contact').addEventListener('click', function() {
            showSurvey('SURVEY: Ano ang iyong katanungan para sa "Contact Us"?');
        });

        document.getElementById('nav-about').addEventListener('click', function() {
            showSurvey('SURVEY: Ano ang pinaka-gusto mong malaman tungkol sa amin?');
        });

        document.getElementById('nav-email').addEventListener('click', function() {
            showSurvey('SURVEY: Paki-lagay ang iyong email para sa aming newsletter.');
        });

        
