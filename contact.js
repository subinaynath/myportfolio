const scriptURL = 'https://script.google.com/macros/s/AKfycbx93Sp5STz-R9fb6dCdcuHLcXSS9-_KawBj6W1njFypQCsRBELeE1wpBJiN0hTAHICA/exec'
  const form = document.forms['submit-to-google-sheet']

  const mssg=document.getElementById("success");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{
        mssg.innerHTML="Message sent successfully!"
        setTimeout(()=>{
          mssg.innerHTML="";
        },5000)
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })