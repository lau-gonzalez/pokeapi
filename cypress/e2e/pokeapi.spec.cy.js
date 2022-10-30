describe("pokeapi", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("frontpage can be opened", () => {
    cy.contains("an index of Pokemon.");
  });

  it("search for a pokemon", () => {
    cy.get("#search-input").type("pikachu");
    cy.get("h4").should("have.text", "pikachu");
  });
});
