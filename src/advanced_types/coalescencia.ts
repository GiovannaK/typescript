type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

// encadeamento opcional ? --> Javascript

// coalescencia checa null e undefined

export const documento: Documento = {
  titulo: 'Title',
  texto: 'Text',
  /* data: new Date(), */
};

console.log(documento.data?.toDateString() ?? 'Sem Data');
console.log('' ?? 'Não existe');
