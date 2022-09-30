const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Retorna a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Retorna um array com a relação dos nomes de todos os elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Retorna a média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('Retorna a localização dos elefantes dentro do zoológico', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('Retorna a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('Retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('Retorna Parâmetro inválido, caso digite um valor sem ser string', () => {
    expect(handlerElephants(0)).toEqual('Parâmetro inválido, é necessário uma string');
  });
  it('Retorna undefined caso não seja colocado nenhum parâmetro', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Retorna null caso seja informado valor vazio', () => {
    expect(handlerElephants('')).toBeNull();
  });
});
