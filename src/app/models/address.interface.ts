export interface Address {
    logradouro: string;
    bairro: string;
    localidade: string;
    uf: string;
    cep: string;
    complemento?: string; // O complemento pode ser opcional
  }
  