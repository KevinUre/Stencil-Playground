import { Component, Prop, State, Event, EventEmitter } from '@stencil/core';


@Component({
  tag: 'stencil-textbox',
  styleUrl: 'stencil-textbox.css'
})
export class StencilTextBox {

  @Prop() name: string;
  @State() internalName: string;
  @Event() valueChanged: EventEmitter;

  eventHandler(newText: string) {
    console.log("emitting");
    this.valueChanged.emit(newText);
  }

  handleChange(event) {
    this.internalName = event.target.value;
    this.eventHandler(event.target.value);
  }

  componentWillLoad() {
    this.internalName = this.name;
  }

  render() {
    return (
      <div>
        <p>
          This is a Stencil Text Box containing: {this.internalName}
        </p>
          <input type="text" value={this.internalName} onChange={(event: UIEvent) => this.handleChange(event)} />
      </div>
    );
  }
}
