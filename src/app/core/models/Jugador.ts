export class Jugador {
    public id: number
    public nombre: string
    public color: string
    public activo: boolean
    public turno: number
    public casillasGanar: string []
    public casillasTurno: string []=[]
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

    public setCasillasTurno(casilla: string) {
        this.casillasTurno.push(casilla)
    }

    public resetCasillasTurno() {
        this.casillasTurno = []
    }

}