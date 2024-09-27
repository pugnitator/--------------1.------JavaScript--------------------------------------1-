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
    }

    const title = document.createElement('h1');
    title.className = 'total-amount'
    title.textContent = 'Итого: $';
    this.$total = document.createElement('span');
    this.$total.textContent = this.state.total;

    title.append(this.$total);
    this.$rootElement.append(title);

    
    const donateForm = new Form();
    this.$rootElement.appendChild(donateForm.$rootElement);



    const donateList = new List();
    this.$rootElement.appendChild(donateList.$rootElement);
  }
  
  onItemCreate(amount) {
    // ...
  }
}
