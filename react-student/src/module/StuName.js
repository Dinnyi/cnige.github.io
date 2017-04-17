/**
 * Created by ige16 on 2017.4.16 0016.
 */

'use strict';

import React from 'react'
import { Select } from 'antd'
const Option = Select.Option;

class StuName extends React.Component {

    handleChange (value) {

        this.props.onNameChange(value)

    }

    render () {
        return (
            <div>
                <h3>按姓名查询</h3>

                <Select
                    defaultValue="0"
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select a person"
                    optionFilterProp="children"
                    onChange={this.handleChange.bind(this)}
                >
                    <Option value="0">全部</Option>
                    <Option value="小乐">小乐</Option>
                    <Option value="童童">童童</Option>
                    <Option value="默默">默默</Option>
                    <Option value="老王">老王</Option>
                    <Option value="小李">小李</Option>
                    <Option value="童童">童童</Option>
                    <Option value="老刘">老刘</Option>
                </Select>
            </div>
        )
    }
}

export default StuName