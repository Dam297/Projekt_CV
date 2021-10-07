var form_el = document.getElementById("form");

form_el.addEventListener("submit", function(evt) {

    evt.preventDefault();
    
    var sprava = document.getElementById('text');
    var toEmail = document.getElementById('email');
    
    
    var spravka = sprava.value;
    var emailik = toEmail.value;


    const data = {

    
        email: emailik,
     text: spravka,

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
      console.log('Úspešne poslané:', data);
    })

    .catch((error) => {
      console.error('Error:', error);
    });    
});

