import init from "./pkg/wasm_meets_rust.js";

const runWasm = async () => {
  const calculator = await init("./pkg/wasm_meets_rust_bg.wasm");
  const calculate = (a, b, operation) => {
    switch (operation) {
      case "add":
        return calculator.add(a, b);
      case "subtract":
        return calculator.subtract(a, b);
      case "multiply":
        return calculator.multiply(a, b);
      case "divide":
        return calculator.divide(a, b);
      default:
        return 0;
    }
  };

  const updateResult = () => {
    const num1 = parseInt(document.getElementById("num1").value, 10);
    const num2 = parseInt(document.getElementById("num2").value, 10);
    const operation = document.getElementById("operation").value;
    const result = calculate(num1, num2, operation);
    document.getElementById("result").textContent = `Result: ${result}`;
  };

  document.querySelector("button").addEventListener("click", updateResult);
};

runWasm();
