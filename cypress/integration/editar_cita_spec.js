/// <reference types="cypress"/>
describe("update new Appointment", () => {
  it("create new appointment", () => {
    cy.visit("/index.html");
    cy.get("[data-cy=mascota-input]").type("Hook");
    cy.get("[data-cy=propietario-input]").type("Kevin");
    cy.get("[data-cy=telefono-input]").type("87892400");
    cy.get("[data-cy=fecha-input]").type("2020-04-02");
    cy.get("[data-cy=time-input]").type("20:30");
    cy.get("[data-cy=sintomas-input]").type("Saludable");

    cy.get("[data-cy=submit-cita]").click();

    cy.get('[data-cy="citas-heading"]')
      .invoke("text")
      .should("equal", "Administra tus Citas");

    cy.get('[data-cy="alert"]')
      .invoke("text")
      .should("equal", "Se agregó correctamente.");
    cy.get('[data-cy="alert"]').should("have.class", "alert-success");
  });

  it("update appointmet", () => {
    cy.get('[data-cy="btn-edit"]').click();
    cy.get("[data-cy=mascota-input]").clear().type("Kiara");
    cy.get("[data-cy=submit-cita]").click();

    cy.get('[data-cy="alert"]')
      .invoke("text")
      .should("equal", "Guardado correctamente.");
    cy.get('[data-cy="alert"]').should("have.class", "alert-success");
  });
});
