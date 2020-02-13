import React, { Component } from "react";
import IntlMessages from './IntlMessages'
import { Card } from 'antd';

class Home extends Component {

    render() {
        return <React.Fragment>
            <div style={{ background: '#ECECEC', padding: '30px' }}>
                <Card className='home-card' title={<IntlMessages id='hello-world' />} bordered={false}>

                </Card>
            </div>
        </React.Fragment>;
    }
}

export default Home;