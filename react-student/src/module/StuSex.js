/**
 * Created by ige16 on 2017.4.16 0016.
 */

'use strict';

import React from 'react'
import { Select } from 'antd';
const Option = Select.Option;


class StuSex extends React.Component {

    handleChange (value) {

        console.log(`selected ${value}`);
        console.log(this.props.filterData);

        this.props.onSexChange(value)

    }

    render () {
        return (
            <div>
                <h3>按性别筛选</h3>

                <Select
                    defaultValue="0"
                    showSearch
                    style={{ width: 200 }}
                    placeholder="请选择性别"
                    optionFilterProp="children"
                    onChange={this.handleChange.bind(this)}
                >
                    <Option value="0">全部</Option>
                    <Option value="男">男</Option>
                    <Option value="女">女</Option>
                    <Option value="其他">其他</Option>
                </Select>
            </div>
        )
    }
}

export default StuSex