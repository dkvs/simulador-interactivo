let mensaje= prompt("Ingresa el producto que deseas calcular. EJ: celular. Si deseas salir, escribe SALIR")

if (mensaje!="SALIR") {
    class Producto {
        constructor(precio, cuota,total){
            this.precio = Number(precio);
            this.cuota = Number(cuota);
            this.total = Number(total);
        }
        calcularCuotas(){
     
                    return this.total= Math.trunc(this.precio/this.cuota); // como es una función le pedimos que retorne.
                }
    }
    
    const prod1 = new Producto(prompt("Ingrese el precio"), prompt("Ingrese la cantidad de cuotas"));
    
    
    
    for(const products in prod1) {
    //no entiendo si acá puede quedar vacío o tiene que incluir algo. El código me funcionó teniendolo vacío.
    }
    
    
    document.write("El producto es: " + mensaje + "<br>" +
    "El precio del producto es de: $" + prod1.precio + "<br>" +
    "La cantidad de cuotas seleccionada es de: " + prod1.cuota + "<br>" +
    "El precio a abonar por cada cuota es de: $" + prod1.calcularCuotas() + "<br>"
    );
    
    
} else {

   alert("Ha salido del calculador. Presiona F5 si deseas volver.");
    
}
