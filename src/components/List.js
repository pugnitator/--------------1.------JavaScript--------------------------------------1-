import { Component } from '../core/Component';
import { ListItem } from './ListItem';

export class List extends Component {
  constructor(props){
    super(props);
    this.donateList = [];
  }

  setup() {
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donates-container';

    this.$listContainer = document.createElement('div');
    this.$listContainer.className = 'donates-container__donates';

    const title = document.createElement('h2');
    title.className = 'donates-container__title';
    title.textContent = 'Список донатов';

    this.$rootElement.append(title);
    this.$rootElement.append(this.$listContainer);
  }

  addItem(item) {
    this.$listContainer.append(item);
  }
}