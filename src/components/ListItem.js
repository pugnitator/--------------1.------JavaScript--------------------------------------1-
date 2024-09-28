import { Component } from '../core/Component';

export class ListItem extends Component {
  setup(props) {
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donate-item';
    this.$rootElement.textContent = `${props.date} - `;

    const donate = document.createElement('b');
    donate.textContent = `$${props.value}`

    this.$rootElement.append(donate);
    return this.$rootElement;
  }
}

// В пропсе ожидаем объект, в который поместим инфу с датой и временем клика на донат + суммой доната 
