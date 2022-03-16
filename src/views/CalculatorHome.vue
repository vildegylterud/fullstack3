<template>
  <div class="container">
    <div class="calculator">
      <div class="display">{{ current }}</div>

      <div class="buttons">
        <button
            @click="clear()" class="operator"
        >
          <span class="front operatorFront">C</span>
        </button>

        <button
            @click="del()" class="operator double"
        >
          <span class="front operatorFront">del</span>

        </button>

        <button @click="percent()" class="operator">
          <span class="front operatorFront">%</span>
        </button>

        <button
          @click="setOperator('divide')"
          class="operator"
          id="divide"
          v-bind:class="{ active: operator == 'divide' }"
        >
          <span class="shadow"></span>
          <span class="edge"></span>
          <span class="front operatorFront">÷</span>
        </button>

        <button @click="addValue(7)" class="tall">
          <span class="front">7</span>
        </button>

        <button @click="addValue(8)" class="tall">
          <span class="front">8</span>
        </button>

        <button @click="addValue(9)" class="tall">
          <span class="front">9</span>
        </button>

        <button
          @click="setOperator('multiply')"
          class="operator"
          id="multiply"
          v-bind:class="{ active: operator == 'multiply' }"
        >
          <span class="front operatorFront">×</span>
        </button>

        <button @click="addValue(4)" class="tall">
          <span class="front">4</span>
        </button>

        <button @click="addValue(5)" class="tall">
          <span class="front">5</span>
        </button>

        <button @click="addValue(6)" class="tall">
          <span class="front">6</span>
        </button>

        <button
          @click="setOperator('minus')"
          class="operator"
          id="minus"
          v-bind:class="{ active: operator == 'minus' }"
        >
          <span class="front operatorFront">-</span>
        </button>

        <button @click="addValue(1)" class="tall">
          <span class="front">1</span>
        </button>

        <button @click="addValue(2)" class="tall">
          <span class="front">2</span>
        </button>

        <button @click="addValue(3)" class="tall">
          <span class="front">3</span>
        </button>

        <button
          @click="setOperator('plus')"
          class="operator"
          id="plus"
          v-bind:class="{ active: operator == 'plus' }"
        >
          <span class="front operatorFront">+</span>
        </button>

        <button @click="addValue(0)" class="tall">
          <span class="front">0</span>
        </button>

        <button class="tall">
          <span class="front"> </span>
        </button>

        <button @click="addComma()" class="tall">
          <span class="front">.</span>
        </button>

        <button @click="calculate()" class="operator double">
          <span class="front operatorFront">=</span>
        </button>
      </div>
    </div>

    <box class="log">
      <label id="calculatorStatusLabel">{{ calculatorStatus }}</label>
      <h1>Calculations</h1>
      <ul id="list">
        <li v-for="calculation in calculations" v-bind:key="calculation">
          {{ calculation }}
        </li>
      </ul>
    </box>
    <button id="prevAnswer" @click="getPreviousAnswers()">previous answers</button>
  </div>
</template>

<script>

import axios from "axios";

export default {
  data() {
    return {
      current: "0",
      previous: "",
      operator: null,
      hasComma: false,
      calculations: [],
      calculatorStatus: "",
    };
  },
  methods: {
    del() {
      this.current = this.current.substring(0, this.current.length - 1);
      if (this.current.length < 1) {
        this.current = "0";
      }
    },
    clear() {
      this.current = "0";
      this.previous = null;
      this.operator = null;
      this.hasComma = false;
    },

    percent() {
      if (this.current == "0") {
        this.current = "ERROR";
      }
      this.current = this.current / 100 + "%";
    },

    addValue(value) {
      if (this.current == "0") {
        this.current = value;
      } else {
        this.current = `${this.current}${value}`;
      }
    },
    addComma() {
      if (this.hasComma == false) {
        this.current = `${this.current}${"."}`;
        this.hasComma = true;
      }
    },
    setOperator(operator) {
      this.operator = operator;
      this.previous = this.current;
      this.current = "0";
    },

    async getPreviousAnswers() {
      let response = await axios.get(
          `http://localhost:8085/calculator/calculate`
      );
      for (let i = 0; i < response.data.length; i++) {
        this.calculations.push(response.data.map((x) => x.calculatorStatus)[i]);
      }
      console.log(response.data);
    },

    async calculate() {
      const calculatorRequest = {firstNumber: this.previous, secondNumber: this.current, operator: this.operator};
      const calculatorResponse = await axios.post("http://localhost:8085/calculator/calculate", calculatorRequest);
      console.log(calculatorResponse);
      alert(calculatorResponse.data.calculatorStatus);

      this.calculations.push(calculatorResponse.data.calculatorStatus)
      return calculatorResponse;

    },



      /**
      let a = parseFloat(this.previous);
      let b = parseFloat(this.current);
      var operatorSign = null;
      if (this.operator != null) {
        switch (this.operator) {
          case "plus":
            this.current = a + b;
            operatorSign = "+";
            break;
          case "minus":
            this.current = a - b;
            operatorSign = "-";
            break;
          case "divide":
            this.current = a / b;
            operatorSign = "÷";
            break;
          case "multiply":
            this.current = a * b;
            operatorSign = "×";
            break;
        }
        this.calculations.push(
            a + " " + operatorSign + " " + b + " = " + this.current
        ); */

      }
      /**
      this.previous = null;
      this.operator = null;
      this.hasComma = false; */

};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  color: #faf9f7;
  background-color: white;
  padding: 5px;
  margin: auto;
  max-width: 1000px;
  max-height: 500px;
  display: grid;
  grid-template-areas:
    "title title"
    "calculator log";
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 5fr;
}

.container {
  padding: 10px;
  margin: auto;
  display: grid;
  gap: 30px;
}

@media (max-width: 500px) {
  .container {
    max-width: 300px;
    max-height: 1000px;
    grid-template-areas:
      "title "
      "calculator "
      "log";
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 4fr 4fr;
  }
}
@media (min-width: 501px) {
  .container {
    max-width: 1000px;
    max-height: 500px;
    grid-template-areas:
      "title title"
      "calculator log";
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 5fr;
  }
}

.log {
  background-color: #423d33;
  grid-area: log;
  margin-bottom: 10px;
  text-align: center;
  vertical-align: middle;
  border-radius: 10px;
  font-size: 100%;
}
ul {
  overflow: auto;
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
}

ul li {
  margin: 5px;
  font-size: 200%;
  margin: 0;
  padding: 0;
  text-align: center;
}

.calculator {
  grid-area: calculator;
}

.display {
  background-color: #423d33;
  margin-bottom: 10px;
  text-align: right;
  vertical-align: middle;
  border-radius: 10px;
  font-size: 200%;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background-color: #423d33;
  color: #857f72;
  gap: 20px;
  padding: 20px;
  border-radius: 10px;
  margin: auto;
  border: none;
}

.button {
  background-color: #857f72;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  border-radius: 30px;
  border: none;
  padding: 0;
  outline-offset: 4px;
}

.front {
  display: block;
  border-radius: 10px;
  font-size: 1.5rem;
  background: #857f72;
  will-change: transform;
  transition: transform 150ms;
  border: none;
}

.operator {
  background: #423d33;
  display: block;
  border-radius: 10px;
  font-size: 1.5rem;
  will-change: transform;
  transition: transform 150ms;
}

.operatorFront {
  background: #423d33;
  border: none;
}

.tall {
  background-color: #857f72;
  display: block;
  border-radius: 10px;
  font-size: 1.5rem;
  will-change: transform;
  transition: transform 150ms;
  border: none;
}

#prevAnswer {
  background-color: #857f72;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  border-radius: 30px;
  border: none;
  padding: 0;
  outline-offset: 4px;

}
</style>
