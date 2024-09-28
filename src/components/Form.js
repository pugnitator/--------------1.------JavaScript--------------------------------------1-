import dayjs from "dayjs";
import { Component } from "../core/Component";
import { Donate } from "./Donate";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.donate = new Donate()
  }

  setup(props) {
    const form = this.createForm();

    form.addEventListener("change", (event) => {
      this.handleInput(event);
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      this.handleSubmit(props);
    });
  }

  createForm() {
    this.$rootElement = document.createElement("form");
    this.$rootElement.className = "donate-form";

    const label = document.createElement("label");
    label.className = "donate-form__input-label";
    label.textContent = "Введите сумму в $";

    this.input = document.createElement("input");
    this.input.className = "donate-form__donate-input";
    this.input.name = "amount";
    this.input.type = "number";
    this.input.max = "100";
    this.input.min = "1";
    this.input.required = true;

    const button = document.createElement("button");
    button.className = "donate-form__submit-button";
    button.type = "submit";
    button.textContent = "Задонатить";

    label.append(this.input);
    this.$rootElement.append(label);
    this.$rootElement.append(button);

    return this.$rootElement;
  }

  handleInput(event) {
    this.donate.value = event.target.value;
    this.input.value = event.target.value;
    console.log(this.donate);
    console.log(this.input);
  }

  handleSubmit(props) {
    const currentDate= dayjs();
    this.donate.date = currentDate.format('DD/MM/YYYY, HH:mm:ss');
    console.log(this.donate);
    props.onSubmit(this.donate);
    this.input.value = '';
  }
}
