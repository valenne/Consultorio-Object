class Consultorio {
  constructor(nombre, paciente) {
    this._nombre = nombre;
    this._paciente = paciente;
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(valor) {
    this._nombre = valor;
  }
  get paciente() {
    return this._paciente;
  }
  set paciente(valor) {
    this._paciente = valor;
  }
}

class Paciente {
  constructor(nombre, edad, rut, diagnostico) {
    this._nombre = nombre;
    this._edad = edad;
    this._rut = rut;
    this._diagnostico = diagnostico;
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(valor) {
    this._nombre = valor;
  }
  get edad() {
    return this._edad;
  }
  set edad(valor) {
    this._edad = valor;
  }
  get rut() {
    return this._rut;
  }
  set rut(valor) {
    this._rut = valor;
  }
  get diagnostico() {
    return this._diagnostico;
  }
  set diagnostico(valor) {
    this._diagnostico = valor;
  }
}

// clase para agrupar totalidad de pacientes
class Pacientes {
  constructor() {
    this.pacientes = [];
  }

  nuevoPaciente(nombre, edad, rut, diagnostico) {
    let p = new Paciente(nombre, edad, rut, diagnostico);
    this.pacientes.push(p);
    return p;
  }
  get allPacientes() {
    return this.pacientes;
  }
  get cantidadPacientes() {
    return this.pacientes.length;
  }
}

// metodo para buscar informacion por el nombre
Paciente.prototype.datos = function (nombre) {
  if (nombre == this._nombre) {
    console.log(
      `Paciente\nNombre: ${this._nombre}\nEdad: ${this._edad}\nRUT: ${this._rut}\nDiagnostico: ${this._diagnostico}`
    );
  } else {
    console.log(`${nombre} no se encuentra en la base de datos`);
  }
};

// instanciado de objeto pacientes totales
let pacientesTotales = new Pacientes();
pacientesTotales.nuevoPaciente("Nelson Venegas", 33, "17.042.187-6", "Checkeo");
pacientesTotales.nuevoPaciente(
  "Miguel litman",
  31,
  "17.346.745-9",
  "Dolor Lumbar"
);
pacientesTotales.nuevoPaciente("Lebrons James", 36, "14.346.745-9", "Fractura");

console.log(pacientesTotales.allPacientes);
console.log(pacientesTotales.cantidadPacientes);

// instanciado de objeto paciente
let p1 = new Paciente("Nelson Venegas", 33, "17.042.187-6", "Checkeo");
// llama al metodo prototype, y este devuelve informacion si el usuario existe
p1.datos("Nelson Venegas");

// instanciado de class consultorio
let higueras = new Consultorio("Hospital las higueras", p1);
