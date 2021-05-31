export class Database {
  private static database: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(
      `Database connected: ${this.user}, ${this.host}, ${this.password}`,
    );
  }

  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.database) {
      console.log('Instância já criada');
      return Database.database;
    }
    console.log('Criando nova instância');
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

const database = Database.getDatabase('localhost:3000', 'root', '12345');
database.connect();

const database2 = Database.getDatabase('localhost:2000', 'root', '12345');
database2.connect();
