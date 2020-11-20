/// <reference types="cypress" />
describe("Load main page", () => {
  it("load main page", () => {
    cy.visit("/index.html");
    cy.contains(
      '[data-cy="titulo-proyecto"]',
      "Administrador de Pacientes de Veterinaria"
    );
    cy.get('[data-cy="titulo-proyecto"]').should("exist");

    cy.get('[data-cy="titulo-proyecto"]')
      .invoke("text")
      .should(
        "equal",
        "\n      Administrador de Pacientes de Veterinaria\n    "
      );
    cy.get('[data-cy="citas-heading"]')
      .invoke("text")
      .should("equal", "No hay Citas, comienza creando una");

    cy.get('[data-cy="citas-heading"]')
      .invoke("text")
      .should("not.equal", " Citas, comienza creando una");
  });
});
