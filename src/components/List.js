import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import IntlMessages from './IntlMessages'

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = { business: [] };
  }
  componentDidMount() {
    axios.get('http://localhost:4000/business')
      .then(response => {
        this.setState({ business: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  tabRow() {
    return this.state.business.map(function (object, i) {
      return <TableRow obj={object} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <h3 align="center"><IntlMessages id="business-list" /></h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th><IntlMessages id="person" /></th>
              <th><IntlMessages id="business" /></th>
              <th><IntlMessages id="gst-num" /></th>
              <th colSpan="2"><IntlMessages id="action" /></th>
            </tr>
          </thead>
          <tbody>
            {this.tabRow()}
          </tbody>
        </table>
      </div>
    );
  }
}