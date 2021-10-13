export class NotaClass {
  public id: number;
  public texto: string;
  public completado: boolean;

  constructor(texto: string) {
    // this.id = new Date().getTime();
    this.id = Math.random();
    this.texto = texto;
    this.completado = false;
  }
}
