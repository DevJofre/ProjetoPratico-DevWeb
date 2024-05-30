function sendEmail() {
  var emailInput = document.getElementById("email");
  var messageDiv = document.getElementById("message");

  if (emailInput.value) {
    var email = emailInput.value;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");

    if (atpos > 0 && dotpos > atpos + 1 && dotpos < email.length - 1) {
      messageDiv.style.display = "block";
      emailInput.value = "";
      setTimeout(function () {
        messageDiv.style.display = "none";
      }, 3000); // Esconder a mensagem após 3 segundos
    } else {
      alert("Por favor, insira um e-mail válido.");
    }
  } else {
    alert("Por favor, insira um e-mail válido.");
  }
}
