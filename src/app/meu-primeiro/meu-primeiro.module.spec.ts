import { MeuPrimeiroModule } from './meu-primeiro.module';

describe('MeuPrimeiroModule', () => {
  let meuPrimeiroModule: MeuPrimeiroModule;

  beforeEach(() => {
    meuPrimeiroModule = new MeuPrimeiroModule();
  });

  it('should create an instance', () => {
    expect(meuPrimeiroModule).toBeTruthy();
  });
});
