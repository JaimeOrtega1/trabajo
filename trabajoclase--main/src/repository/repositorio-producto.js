class RepositorioProducto{
    constructor(){
        this.productos = []

    }

    buscar(producto){
        
    }

    crear(producto){

        if (!this.exists(producto.codigo)){
            this.productos.push(producto)
        }


    }
    editar(producto){
        

    }
    eliminar(producto){
        
    }

    exists(codigo){
        for(const p of this.productos){
            if(p.codigo == codigo){
                return true
            }
        }
        return false
    
    }



    existsFilter(codigo){
        const p = this.productos.filter((p) => p.codigo == codigo)
        if (producto){
            return true
        }   
        return false
    }
}