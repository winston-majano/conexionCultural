document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("FormReg").addEventListener('submit', validarFormulario); 
  });

  function validarFormulario(evento) {
    evento.preventDefault();
    let usuario = document.getElementById('firstName').value;
    if(usuario.length == 0) {
      alert('No has escrito nada en el usuario');
      return;
    }
    let usuario = document.getElementById('lastName').value;
    if(usuario.length == 0) {
      alert('No has escrito nada en el usuario');
      return;
    }
    let usuario = document.getElementById('nickname').value;
    if(usuario.length == 0) {
      alert('No has escrito nada en el usuario');
      return;
    }
    let usuario = document.getElementById('email').value;
    if(usuario.length == 0) {
      alert('No has escrito nada en el usuario');
      return;
    }
    let usuario = document.getElementById('confirmEmail').value;
    if(usuario.length == 0) {
      alert('No has escrito nada en el usuario');
      return;
    }
    let clave = document.getElementById('password').value;
    if (clave.length < 6) {
      alert('La clave no es válida');
      return;
    }
    let clave = document.getElementById('confirmPassword').value;
    if(usuario. == 0) {
      alert('las contraseñas no coinciden');
      return;
    }
    this.submit();
  }