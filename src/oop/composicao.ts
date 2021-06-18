// instancia a classe dentro de outra, não pode ser usada fora da classe na qual esta dentro

export class Carro {
  private readonly motor: Motor = new Motor();

  ligar(): void {
    this.motor.ligar();
  }

  acelerar(): void {
    this.motor.acelerar();
  }

  parar(): void {
    this.motor.parar();
  }

  desligar(): void {
    this.motor.desligar();
  }
}

export class Motor {
  ligar(): void {
    console.log('Ligando...');
  }

  acelerar(): void {
    console.log('acelerando...');
  }

  parar(): void {
    console.log('parando...');
  }

  desligar(): void {
    console.log('Desligando...');
  }
}

const carro = new Carro();
carro.ligar();
