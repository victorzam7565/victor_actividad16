function admin(nombre, correo, edad, comentario){
    this.nombre=nombre;
    this.correo=correo;
    this.edad=edad;
    this.comentario=comentario;
}

const admin1 = new admin("Paul","jose@correo.com",22,"Adoro el ciclismo");
const admin2 = new admin("Walter","anna@correo.com",32,"ganare la carrera");
const admin3 = new admin("Julia","alexis@correo.com",30,"le gusta cocinar");

const datos = [admin1, admin2, admin3]

// Dos formas de interpretar el ejercicio. 

// 1. Mostrar todos los datos, imprimiendo el arreglo por consola
console.table(datos)

// 2. Muestra cada dato de cada admin dentro del arreglo.
datos.forEach(dato=>{
    console.log(`********** Datos de admin ${dato.nombre} **********`)
    for(propiedad in dato){
         console.log(dato[propiedad])
    }
})