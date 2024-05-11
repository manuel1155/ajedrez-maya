export class Jugador {
    public id: number
    public nombre: string
    public color: string
    public activo: boolean
    public turno: number
    public casillasGanar: string []
    public movimientosTurno: Jugada [] = []
    public img: string

    constructor(id: number, nombre: string, color: string, activo: boolean, turno: number, casillasGanar: string[],img: string) {
        this.id = id
        this.nombre = nombre
        this.color = color
        this.activo = activo
        this.turno = turno
        this.casillasGanar = casillasGanar
        this.img = img
    }

    public setTurno(turno: number) {
        this.turno = turno
    }

    public setActivo(activo: boolean) {
        this.activo = activo
    }

    public resetMovimientosTurno() {
        this.movimientosTurno = []
    }

    public AgregarMovimientoTurno(pzaId: string, casilla: string) {
        this.movimientosTurno.push({ pzaId: pzaId, posicion: casilla})
    }

    public getMovimientosTurno(){
        return this.movimientosTurno;
    }

    public getUltimoMovimiento() : Jugada{
        if (this.movimientosTurno.length > 0) return this.movimientosTurno[ this.movimientosTurno.length - 1 ];
        else return {pzaId: '', posicion: ''}
    }

}

export default interface Jugada {
    pzaId: string;
    posicion: string;
  }