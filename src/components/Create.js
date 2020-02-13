import React, { Component } from 'react';
import axios from 'axios';
import IntlMessages from './IntlMessages'
import { Button } from 'antd'

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
    this.onChangeGstNumber = this.onChangeGstNumber.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      person_name: '',
      business_name: '',
      business_gst_number: ''
    }
  }
  onChangePersonName(e) {
    this.setState({
      person_name: e.target.value
    });
  }
  onChangeBusinessName(e) {
    this.setState({
      business_name: e.target.value
    })
  }
  onChangeGstNumber(e) {
    this.setState({
      business_gst_number: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      person_name: this.state.person_name,
      business_name: this.state.business_name,
      business_gst_number: this.state.business_gst_number
    };
    axios.post('http://localhost:4000/business/add', obj)
      .then(res => console.log(res.data));

    this.setState({
      person_name: '',
      business_name: '',
      business_gst_number: ''
    })
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3 align="center"><IntlMessages id='add-new-business' /></h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label><IntlMessages id="person-name" />:  </label>
            <input
              type="text"
              className="form-control"
              value={this.state.person_name}
              onChange={this.onChangePersonName}
            />
          </div>
          <div className="form-group">
            <label><IntlMessages id="business-name" />: </label>
            <input type="text"
              className="form-control"
              value={this.state.business_name}
              onChange={this.onChangeBusinessName}
            />
          </div>
          <div className="form-group">
            <label><IntlMessages id="gst-num" />: </label>
            <input type="text"
              className="form-control"
              value={this.state.business_gst_number}
              onChange={this.onChangeGstNumber}
            />
          </div>
          <div className="form-group">
            <Button className="btn btn-primary register-btn" onClick={this.onSubmit}><IntlMessages id="register-business" /></Button>
          </div>
        </form>
      </div>
    )
  }
}