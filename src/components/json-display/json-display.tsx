import { Component, Prop, State } from '@stencil/core';



@Component({
  tag: 'json-display',
  styleUrl: 'json-display.css'
})
export class JSONDisplay {

  @Prop() endpoint: string;
  @State() output: string = "loading";

  async getData() {
    this.output = await fetch(this.endpoint).then((response) => {
      var temp = response.json();
      return temp;
    }).then( (json) => {
    return json['body'];
    });
  }

  componentDidLoad() {
    this.getData();
  }

  render() {
    return (
      <div>
        <p>
          {this.output}
        </p>
      </div>
    );
  }
}
