document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("FormReg").addEventListener('submit', validarFormulario); 
  });

  function validarFormulario(evento) {
    evento.preventDefault();
    let firstName = document.getElementById('firstName').value;
    if(firstName.length == 0) {
      alert('No has escrito nada en el usuario');
      return;
    }
    let lastName = document.getElementById('lastName').value;
    if(lastName.length == 0) {
      alert('No has escrito nada en el usuario');
      return;
    }
    let nickname = document.getElementById('nickname').value;
    if(nickname.length == 0) {
      alert('No has escrito nada en el usuario');
      return;
    }
    let email = document.getElementById('email').value;
    if(email.length == 0) {
      alert('No has escrito nada en el usuario');
      return;
    }
    let confirmEmail = document.getElementById('confirmEmail').value;
    if(confirmEmail.length == 0) {
      alert('No has escrito nada en el usuario');
      return;
    }
    let clave1 = document.getElementById('password').value;
    if (clave1.length < 6) {
      alert('La clave no es válida');
      return;
    }
    let clave2 = document.getElementById('confirmPassword').value;
    if(clave2 != clave1 ) {
      alert('las contraseñas no coinciden');
      return;
    }
    this.submit();
  }