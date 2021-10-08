var form_el = document.getElementById("form");

form_el.addEventListener("submit", function(evt) {

    evt.preventDefault();
    
    var sprava = document.getElementById('text');
    var predmet = document.getElementById('predmet');
    var toEmail = document.getElementById('email');

    
  

    const data = {

    
        email: toEmail.value,
        predmet: predmet.value,
        text: sprava.value,

    };


    fetch('http://localhost:3000', {

      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(data),
    
    })

  


    .then(response => response.json())
    
    .then(data => {
      alert('Úspešne poslané')
     // console.log('Úspešne poslané:', data);
    })

    .catch((error) => {
      alert('Nastala chyba')
      //console.error('Error:', error);
    });    
});

