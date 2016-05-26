import React from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';

class SampleSelect extends React.Component {
  constructor() {
    super();
    this.state = { selectedValue: null, start: false };
  }

  handleOpen() {
    this.setState({ start: true });
    this.props.onOpen();
  }

  handleChange(val) {
    this.setState({ selectedValue: val });
  }

  render() {
    const isLoading = !this.props.fetched && this.state.start;
    return(
      <Select
        value={this.state.selectedValue}
        options={this.props.options}
        onOpen={this.handleOpen.bind(this)}
        onChange={this.handleChange.bind(this)}
        isLoading={isLoading}
      />
    );
  }
}

class Container extends React.Component {
  constructor() {
    super();
    this.state = { options: [], fetched: false };
  }

  handleOpen() {
    setTimeout(() => {
      this.setState({
        options: [
          { value: 'One', label: 'One' },
          { value: 'Two', label: 'Two' },
          { value: 'Three', label: 'Three' }
        ],
        fetched: true
      });
    }, 1000);
  }

  render() {
    return(
      <SampleSelect
        onOpen={this.handleOpen.bind(this)}
        options={this.state.options}
        fetched={this.state.fetched}
      />
    );
  }
}


ReactDOM.render(<Container />, document.getElementById('content'));
