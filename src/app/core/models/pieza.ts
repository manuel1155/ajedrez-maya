import * as coordenadas_lider from './../../../assets/lib/coordenadas-lider-casilla.json'

export class Pieza {
    public nombre: string
    public color: string
    public posicion: any
    public imagen: string
    public id: string
    private coordenadas: any[] = []
    private orientacionPza: string = '';
    public activa = false;

    constructor(id: string, nombre: string, color: string,imagen?: string) {
        this.nombre = nombre
        this.color = color
        this.id = id

        this.posicion = [-100, -100]

        if (id == 'p-l-b' || id == 'p-l-w') this.coordenadas = coordenadas_lider.coordenadas_leader

        this.posicion = this.getInitialPosition();
        this.imagen = imagen != null ? imagen:'';

        console.log(this)
    }

    getInitialPosition() {
        let infoPosition = this.coordenadas.filter(c => c.inicial == this.id)[0]
        return infoPosition
    }

    getImagen() {
        /* let imagenName = ''
        console.log(this.orientacionPza);
        if (this.orientacionPza == '') imagenName = coordenadas_lider.imagenes.filter(img => img.id == '' + this.posicion.pieza + '-' + this.posicion.orientacion)[0].img
        else imagenName = coordenadas_lider.imagenes.filter(img => img.id == '' + this.posicion.pieza + '-' + this.posicion.orientacion+'-'+this.orientacionPza)[0].img
        return imagenName */
    }

    get _name(): string {
        return this.nombre;
    }

    set _activo(status: boolean) {
        this.activa = status;
    }

    setPosicionPza(casilla:string) {
        this.posicion = this.coordenadas.filter(c => c.casilla == casilla)[0]
    }
}