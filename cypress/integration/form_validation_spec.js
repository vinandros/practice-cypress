/// <reference types="cypress"/>

describe("Validation form", () => {
  it("Submit form and show alert error, inputs should not be empty", () => {
    cy.visit("/index.html");

    cy.get('[data-cy="form"]').submit();
    cy.get('[data-cy="alert"]')
      .invoke("text")
      .should("equal", "Todos los campos son Obligatorios");

    cy.get('[data-cy="alert"]').should("have.class", "alert-danger");
  });
});
