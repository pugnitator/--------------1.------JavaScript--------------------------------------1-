import { Component } from '../core/Component';

export class ListItem extends Component {
  setup(props) {
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donate-item';

    const donate = document.createElement('b');
    donate.textContent = props.donate

    this.$rootElement.textContent = `${props.date}, ${props.time} - ${props.donate.bold()}`;
  }
}

// В пропсе ожидаем объект, в который поместим инфу с датой и временем клика на донат + суммой доната 
