import { Component } from '../core/Component';
import { Form } from './Form';
import { List } from './List';
import { ListItem } from './ListItem';
import { Donate } from './Donate'

export class App extends Component {
  setup(props) {
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'app';
    this.state = {
      total: 0,
      donates: [],
    };

    this.displayTotal();
    const donateForm = new Form({onSubmit: this.onItemCreate.bind(this)});
    this.$rootElement.appendChild(donateForm.$rootElement);

    this.donateList = new List();
    this.$rootElement.appendChild(this.donateList.$rootElement);
  }

  displayTotal() {
    const title = document.createElement('h1');
    title.className = 'total-amount'
    title.textContent = 'Итого: $';
    this.$total = document.createElement('span');
    this.$total.textContent = this.state.total;

    title.append(this.$total);
    this.$rootElement.append(title);
  }
  
  onItemCreate(element) {
    const listItem = new ListItem(element);
    console.log(element.value);
    this.state.total+=Number(element.value);
    this.state.donates.push(listItem);
    this.donateList.$rootElement.append(listItem.$rootElement);
    this.$total.textContent = this.state.total;
  }
}
