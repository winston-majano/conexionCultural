document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formcreateNewPassword").addEventListener('submit', validarFormulario); 
  });


  function validarFormulario(evento) {
    evento.preventDefault();
    let clave = document.getElementById('password').value;
    if (clave.length < 6) {
      alert('La clave no es válida');
      return;
    }
    let confirmPassword = document.getElementById('confirmPassword').value;
  if (confirmPassword !== password) {
    alert('Las contraseñas no coinciden');
    return;
  }
    window.location = "./dashboard/main.html";
      

    this.submit();
  }