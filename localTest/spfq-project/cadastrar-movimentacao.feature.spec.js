/// <reference types="cypress"/>

import Base from "../../util/ComponentsMethod/Base";
import Constants from "../../util/constants/Constants";

const base = new Base();
const constant = new Constants();

describe("CADASTRAR ESTOQUE - 1 - validar trava no campo motivo", () => {
  it("Dado que esteja na tela de cadastro de movimentação de estoque", () => {
    base.loginSucess();
    cy.visit("/estoque/consulta-saldo/novo");
  });
  it("Quando preencher o campo com mais de 60 caracteres", () => {
    base.preencher('[data-test="motivo"]', constant.caracteres_60);
  });
  it("Então o sistema tem trava para 60 caracteres", () => {
    base.validarQuantidadeCaracteres('[data-test="motivo"]', 60);
  });
});

describe(`CADASTRO MOVIMENTAÇÃO - 2 - Validar quantidade de caracteres no campo quantidade`, () => {
  it("Dado que esteja no cadastro nova movimentacao", () => {
    cy.reload();
  });
  it("Quando preencher o campo quantidade", () => {
    base.preencher('[data-test="quantidade"]', constant.CARACTERES_NUMERO_19);
  });

  it("Então o sistema tem de travar em 19 caracteres", () => {
    base.validarQuantidadeCaracteres('[data-test="quantidade"]', 19);
  });
});

describe(`CADASTRO MOVIMENTAÇÃO - 3 - Validar quantidade de caracteres no campo custo unitario`, () => {
    it("Dado que esteja no cadastro nova movimentacao", () => {
      cy.reload();
    });
    it("Quando preencher o campo custo unitario", () => {
      base.preencher('[data-test="custounitario"]', base.geradorStringNumerica(20));
    });
  
    it("Então o sistema tem de travar em 16 caracteres", () => {
      base.validarQuantidadeCaracteres('[data-test="custounitario"]', 16);
    });
  });

  describe(`CADASTRO MOVIMENTAÇÃO - 4 - Validar se campo de produto é um autocomplete`, () => {
    it("Dado que esteja no cadastro nova movimentacao", () => {
      cy.reload();
    });
    it("Quando preencher o campo produto", () => {
      base.preencher('[data-test="input-select-produto"]', base.retornaParteString('1A BEBIDA BANANAZINHA'));
      base.clicarElemento('[data-test="select-option-1abebidabananazinha"]')
    });
  
    it("Então o sistema tem de travar em 19 caracteres", () => {
      base.validarTextoNoCampo('[data-test="input-select-produto"]', '1A BEBIDA BANANAZINHA')
    });
  });