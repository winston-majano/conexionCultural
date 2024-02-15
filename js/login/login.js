document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formLogin").addEventListener('submit', validarFormulario); 
  });


  function validarFormulario(evento) {
    //este evento evita que la pagina sea recargada al ejecutar el boton submit
    evento.preventDefault();
    var usuario = document.getElementById('username').value;
    if(usuario.length == 0) {
      alert('No has escrito nada en el usuario');
      return;
    }
    var clave = document.getElementById('password').value;
    if (clave.length < 6) {
      alert('La clave no es válida');
      return;
    }
    this.submit();
  }