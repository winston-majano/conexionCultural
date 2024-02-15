document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("FormReg").addEventListener('submit', validarFormulario);
});

function validarFormulario(evento) {
  evento.preventDefault();

  let firstName = document.getElementById('firstName').value;
  if (firstName.length === 0) {
    alert('No has escrito nada en el campo Nombre');
    return;
  }

  let lastName = document.getElementById('lastName').value;
  if (lastName.length === 0) {
    alert('No has escrito nada en el campo Apellido');
    return;
  }

  let password = document.getElementById('password').value;
  if (password.length < 6) {
    alert('La contraseña debe tener al menos 6 caracteres');
    return;
  }

  let confirmPassword = document.getElementById('confirmPassword').value;
  if (confirmPassword !== password) {
    alert('Las contraseñas no coinciden');
    return;
  }

  //document.getElementById("FormReg").submit();
  this.submit();
}
