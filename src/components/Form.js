import { Component } from '../core/Component';

export class Form extends Component {
  setup(props) {
    this.$rootElement = document.createElement('form');
    this.$rootElement.className = 'donate-form';

    const label = document.createElement('label');
    label.className = 'donate-form__input-label';
    label.textContent = 'Введите сумму в $';

    const input = document.createElement('input');
    input.className = 'donate-form__donate-input';
    input.name = 'amount';
    input.type = 'number';
    input.max = '100';
    input.min = '1';
    input.required = true;

    const button = document.createElement('button');
    button.className = 'donate-form__submit-button';
    button.type = 'submit';
    button.textContent = 'Задонатить';

    label.append(input);
    this.$rootElement.append(label);
    this.$rootElement.append(button);

  }

  handleInput(event) {
    // ...
  }

  handleSubmit(event) {
    // ...
  }
}
