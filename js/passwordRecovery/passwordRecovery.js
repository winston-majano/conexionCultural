document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formPasswordRecovery").addEventListener('submit', validarFormulario); 
  });


  function validarFormulario(evento) {
    evento.preventDefault();
    let email = document.getElementById('email').value;
    if(email.length == 0) {
      alert('No has escrito nada en el usuario');
      return;
    }
    window.location = "./dashboard/main.html";
      

    this.submit();
  }