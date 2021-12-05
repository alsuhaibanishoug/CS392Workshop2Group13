
const FastText = require("./FastTextResult.js")

test("Correct Predicting", () => {
    const Result = FastText("Converting whole to chopped hazelnuts");
    expect(Result).toMatch(/success/i)
});

test("Failed to Predict", () => {
    const Result = FastText();
    expect(Result).toBeNull()
});