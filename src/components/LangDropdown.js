import React, { Component } from "react";
import { Select } from "antd";
import { connect } from 'react-redux';
import { languages } from '../common'
const { Option } = Select;

class LangDropdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lang: 'en'
        }
    }
    switchLanguage = (value) => {
        this.setState({ lang: value })
        this.props.dispatch({
            type: 'SWITCH_LANGUAGE',
            payload: value
        })
    }
    render() {
        return (
            <Select
                value={this.state.lang}
                style={{ width: 120 }}
                onChange={this.switchLanguage.bind(this)}
            >
                {
                    languages.map(lng => {
                        return <Option value={lng.locale}>{lng.name}</Option>
                    })
                }
            </Select>
        );
    }
}

export default connect()(LangDropdown);
