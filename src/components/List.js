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



    return this.$rootElement
  }

  addItem(donate) {
    const item = new ListItem();
    console.log(item);

    // this.$rootElement.append(item.setup());
  }
}