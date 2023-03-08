class Categoria{
    constructor(codigo,nombre,impuesto){
        this.codigo = codigo
        this.nombre = nombre
        this.impuesto = impuesto
    }


}

class Proveedor{
    constructor(codigo,nombre){
        this.codigo = codigo
        this.nombre = nombre

    }
}

class Producto{

    constructor(codigo,tipo,stockDisponible,stockMinimo,precio,proveedor) {
        this.codigo = codigo
        this.tipo = tipo
        this.precio = precio
        this.stockDisponible = stockDisponible
        this.stockMinimo = stockMinimo
        this.proveedor = proveedor
    }
}

export{
    Categoria,
    Proveedor,
    Producto
}