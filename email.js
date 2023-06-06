document.getElementById("emailForm").addEventListener("submit", function(event) {
   event.preventDefault(); // Evitar el comportamiento predeterminado del formulario

   // Obtener valores de los campos
   var to = document.getElementById("to").value;
   var subject = document.getElementById("subject").value;
   var message = document.getElementById("message").value;

   // Llamar a la función de envío de correo electrónico
   sendEmail(to, subject, message);
});

function sendEmail(to, subject, message) {
   // Datos del correo electrónico
   var data = {
      to: to,
      subject: subject,
      message: message
   };

   // Configurar opciones para la solicitud Fetch
   var options = {
      method: "POST",
      headers: {
         "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
   };

   // Enviar solicitud Fetch
   fetch("/ruta-al-servidor-de-correo", options)
      .then(function(response) {
         if (response.ok) {
            alert("El correo electrónico se envió correctamente.");
         } else {
            throw new Error("Error al enviar el correo electrónico.");
         }
      })
      .catch(function(error) {
         console.log(error);
      });
}