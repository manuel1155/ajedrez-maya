import { PiezasService } from '../services/piezas.service'

interface Coordenadas {
    x: number
    y: number
}

export class Pieza {
    public nombre: string
    public color: string
    public id_pza: string
    public id_html: string
    
    public base: string
    public orientacion: string
    public posicion: any
    public coordenadas: Coordenadas = { x: 0, y: 0}

    public opcionesMov: OpcionesMov[] = []

    public imagen: string

    public activa = false;

    constructor(id: string, nombre: string, color: string,imagen?: string) {
        this.nombre = nombre
        this.color = color
        this.id_pza = id
        this.id_html = 'p-'+id.toLowerCase()+'-'+color;

        let pzaService = new PiezasService()

        let infoPosition = pzaService.getPosicionInicial(this.id_pza,color)

        this.base = infoPosition.base
        this.orientacion = infoPosition.orientacion
        this.posicion = infoPosition.posicion

        this.coordenadas.x = infoPosition.x
        this.coordenadas.y = infoPosition.y

        let nombrePieza = this.nombre.toLowerCase()
        if(this.nombre == 'Guardián') nombrePieza = 'guardian'

        this.imagen = './assets/'+nombrePieza+'/'+ this.color+'_'+nombrePieza+'_'+this.base+'_'+this.orientacion+'.png';

        this.opcionesMov=[]
    }


    get _name(): string {
        return this.nombre;
    }

    set _activo(status: boolean) {
        this.activa = status;
    }

    setPosicionPza(casilla:string) {
        return new Promise((resolve, reject) => {
            let posicionOrigen = this.posicion;
            let opcion = this.opcionesMov.filter(o => o.posicion_destino.includes(casilla))[0]
            
            if(opcion) {
                this.posicion = opcion.posicion_destino
                this.base = opcion.base_destino
                this.orientacion = opcion.orientacion_destino
            }

            let pzaService = new PiezasService()
            let infoPosition = pzaService.getInfoPosicion(this.id_pza, this.posicion, this.base, this.orientacion)

            this.coordenadas.x = infoPosition.x
            this.coordenadas.y = infoPosition.y

            let nombrePieza = this.nombre.toLowerCase()
            if(this.nombre == 'Guardián') nombrePieza = 'guardian'

            this.imagen = './assets/'+nombrePieza+'/'+ this.color+'_'+nombrePieza+'_'+this.base+'_'+this.orientacion+'.png'
            this.activa = false
            
            resolve({status: true, data: { casilla: posicionOrigen }});
        })
          
    }

    setOpcionesMov(opciones: []){
        this.opcionesMov = opciones;
    }


}

export default interface OpcionesMov {
    id_pza : string
    id_origen : string
    posicion_origen :string
    base_origen : string
    orientacion_origen : string
    id_destino : string
    posicion_destino : string
    base_destino : string
    orientacion_destino : string
}