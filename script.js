const form = document.getElementById('cita-form');
const lista = document.getElementById('lista-citas');

function cargarCitas() {
  const citas = JSON.parse(localStorage.getItem('citas')) || [];
  lista.innerHTML = '';

  citas.forEach((cita, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${cita.nombre} - ${cita.fecha} a las ${cita.hora}
      <button onclick="eliminarCita(${index})">❌</button>
    `;
    lista.appendChild(li);
  });
}

function guardarCita(e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const fecha = document.getElementById('fecha').value;
  const hora = document.getElementById('hora').value;

  const nuevaCita = { nombre, fecha, hora };

  const citas = JSON.parse(localStorage.getItem('citas')) || [];
  citas.push(nuevaCita);
  localStorage.setItem('citas', JSON.stringify(citas));

  form.reset();
  cargarCitas();
}

function eliminarCita(index) {
  const citas = JSON.parse(localStorage.getItem('citas'));
  citas.splice(index, 1);
  localStorage.setItem('citas', JSON.stringify(citas));
  cargarCitas();
}

form.addEventListener('submit', guardarCita);
document.addEventListener('DOMContentLoaded', cargarCitas);