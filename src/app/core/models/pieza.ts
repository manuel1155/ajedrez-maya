export class pieza {
    public nombre: string
    public color: string
    public posicion: string

    constructor(nombre:string,color: string,posicion: string){
        this.nombre = nombre
        this.color = color
        this.posicion = posicion
    }

    getName(): string {
        return this.nombre;
      }
}