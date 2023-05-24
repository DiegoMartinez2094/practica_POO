
/**
 * * la palabra reservada lapiz es la clase de mi plantilla 
 */
class lapiz{ /**para poner un atributo privado se usa el # ejemplo = #color
no es necesario declarar las caracteristicas antes, ya que si no existe se la crea, 
no se necesita declarar(color, tamaño,#material,#mina) */   

    color 
    tamaño
    #material
    #mina
    
  
/**
 * 
 * @param {color} *propiedad base de la plantilla  
 * @param {tamaño} *propiedad base de la plantilla
 * @param {material} *propiedad base de la plantilla
 * @param {mina} *propiedad base de la plantilla
 */
    constructor({color="amarillo", tamaño="9cm", material="madera", mina="carbon"}){/** se ponen valores si quiero que construya por defecto con unas caracteristicas
     * el constructor es para inicializar un objeto y asignarle valores en este caso le asignamos fue variables, se pone entre {} para que 
     */
       
     this.color=color;
     this.tamaño=tamaño;
     this.#material=material;
     this.#mina=mina

     /**this se utiliza para adjudicar al atributo la variable del constructor */
    }
    get getMina(){/** el get optiene el valor */
        return this.#mina;
    }
    set setMina(p1){/**el set modifica */
        this.#mina=p1;
    }
    static afilar(p1){/**static se refiere a un metodo que no pertenese a la clase en si pero es necesaria del objeto*/
      
    return `la mina de ${p1} ha sido afilada`;
    }
}
class boligrafo extends lapiz{/**se usa extends para heredar  */
constructor({mina="metalica"}){
    super({mina});/**para acceder al constructor de la clase padre */
}
static afilar(p1){/**static se refiere a un metodo que no pertenese a la clase en si pero es necesaria del objeto*/
      
return `la mina de ${p1} no se puede afilar`; /**polimorfismo de lapiz */
}
}
let obj = new boligrafo({});/**creamos una instancia que herede de la clase lapiz */
obj.setMina="aluminio" /**set para modificar */
console.log(obj.getMina); /**get para obtener */
console.log(boligrafo.afilar(obj.getMina))


/**
 * instansia: es la copia de la plantilla para crear un objeto con sus caracteristicas definidas
 */
let lapiz1= new lapiz({material:"diamante", mina:"grafito"});/**si envio undefined es para dejar el poarametro por defecto */
/**cuando ponemos los parentesis hacemos referencia al contructo, el contructor, la clase, y los parametros van de la mano */
lapiz.lapiz1.setMina="Tinta"
console.log(lapiz.afilar(lapiz1.getMina))
