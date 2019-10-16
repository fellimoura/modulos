import { MeuSegundoModule } from './meu-segundo.module';

describe('MeuSegundoModule', () => {
  let meuSegundoModule: MeuSegundoModule;

  beforeEach(() => {
    meuSegundoModule = new MeuSegundoModule();
  });

  it('should create an instance', () => {
    expect(meuSegundoModule).toBeTruthy();
  });
});
