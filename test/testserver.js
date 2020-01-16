const chai = require("chai");
const fetch = require("node-fetch");
const assert = chai.as;
const expect = chai.expect;
//below code will test to see if the data return successfuly from the
//third party API, the limit on a search return is 50, if the length
//of the response is 50 then the data has returned succesfully.
describe("fetch third party API data", () => {
  it("itunes search data", async () => {
    await fetch("https://itunes.apple.com/search?term=jimmy+swaggart&media=music&country=ZA")
      .then(res => {
        return res.json();
      })
      .then(res => {
        expect(res.results.length).to.equal(50)
      });
  });
});
