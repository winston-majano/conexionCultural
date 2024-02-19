document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formcreateNewPassword").addEventListener('submit', validarFormulario); 
  });


  function validarFormulario(evento) {
    evento.preventDefault();
    let newPassword = document.getElementById('newPassword').value;
    if (newPassword.length < 6) {
      alert('La clave no es válida, tiene que contener almenos 6 caracteres');
      return;
    }
    let repeatPassword = document.getElementById('repeatPassword').value;
  if (repeatPassword !== newPassword) {
    alert('Las contraseñas no coinciden');
    return;
  }
    window.location = "./dashboard/main.html";
      

    this.submit();
  }