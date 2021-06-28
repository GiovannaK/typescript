// coalescência nula checa null ou undefined

type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'usjhf',
  texto: 'text',
};

console.log(documento.data?.toDateString() ?? 'No data');
