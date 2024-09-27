import dayjs from "dayjs";
import { Component } from "../core/Component";
import { Donate } from "./Donate";

export class Form extends Component {
  constructor(props = {}) {
    super(props);
    this.donate = new Donate()
  }

  setup(props) {
    const form = this.createForm();

    form.addEventListener("change", (event) => {
      this.handleInput(event);
    });

    form.addEventListener("submit", () => {
      this.handleSubmit();
    });
  }

  createForm() {
    this.$rootElement = document.createElement("form");
    this.$rootElement.className = "donate-form";

    const label = document.createElement("label");
    label.className = "donate-form__input-label";
    label.textContent = "Введите сумму в $";

    const input = document.createElement("input");
    input.className = "donate-form__donate-input";
    input.name = "amount";
    input.type = "number";
    input.max = "100";
    input.min = "1";
    input.required = true;

    const button = document.createElement("button");
    button.className = "donate-form__submit-button";
    button.type = "submit";
    button.textContent = "Задонатить";

    label.append(input);
    this.$rootElement.append(label);
    this.$rootElement.append(button);

    return this.$rootElement;
  }

  handleInput(event) {
    this.donate.value = event.target.value;
    console.log(this.donate);
  }

  handleSubmit() {
    const currentDate= dayjs();
    this.donate.date = currentDate.format('DD/MM/YYYY, HH:mm:ss');
    console.log(this.donate);
  }
}
