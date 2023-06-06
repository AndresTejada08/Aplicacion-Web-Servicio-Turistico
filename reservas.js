// Objeto que representa un paquete turístico
class PaqueteTuristico {
      constructor(nombre, destino, precio) {
      this.nombre = nombre;
      this.destino = destino;
      this.precio = precio;
      }
   }

   // Función para realizar una reserva de paquete turístico
   function reservarPaquete(paquete, fechaInicio, fechaFin, cantidadPersonas) {
      // Aquí puedes agregar la lógica de reserva, como validar disponibilidad, realizar pagos, etc.
      console.log(`Reserva realizada para el paquete "${paquete.nombre}"`);
      console.log(`Destino: ${paquete.destino}`);
      console.log(`Fechas: ${fechaInicio} - ${fechaFin}`);
      console.log(`Cantidad de personas: ${cantidadPersonas}`);
      console.log(`Precio total: ${paquete.precio * cantidadPersonas}`);
   }

   // Ejemplo de uso
   const paquete1 = new PaqueteTuristico('Paquete A', 'Playa del Carmen', 500);
   const fechaInicio = '2023-07-01';
   const fechaFin = '2023-07-07';
   const cantidadPersonas = 2;

   reservarPaquete(paquete1, fechaInicio, fechaFin, cantidadPersonas);