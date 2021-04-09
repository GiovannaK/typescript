/* const objetoA = {
  chaveA: 'A',
  chaveB: 'B',
}; */
// unknown mais abrangente que any
/* const objetoA: Record<string, unknown> = {
  chaveA: 'A',
  chaveB: 'B',
}; */
// index signature
const objetoA: {
  readonly chaveA: string; // não permite alterar objeto
  chaveB: string;
  chaveC?: string;
  [Key: string]: unknown;
} = {
  chaveA: 'A',
  chaveB: 'B',
};
objetoA.chaveC = 'Nova';
