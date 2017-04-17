/**
 * Created by ige16 on 2017.4.16 0016.
 */

'use strict';

import React from 'react'
import StuItem from './StuItem'
import StuHead from './StuHead'

class StuList extends React.Component {
    constructor (props) {
        super(props);

        //console.log(this)
    }
    render () {

        let StuItemNode = this.props.data.map( (message, key) => {
            return (
                <StuItem
                    id={message._id}
                    stuName={message.stuName}
                    stuSex={message.stuSex}
                    age={message.age}
                    height={message.height}
                    weight={message.weight}
                />
            )
        });

        //console.log(this.props.data[0]);

        let stuHead = {};

        for ( let keys in this.props.data[0]) {
            if( keys == 'stuName'){
                stuHead[keys] = '姓名'
            }
            if ( keys == 'stuSex' ){
                stuHead[keys] = '性别'
            }
            if ( keys == 'age' ){
                stuHead[keys] = '年龄'
            }
            if ( keys == 'height' ){
                stuHead[keys] = '身高'
            }
            if ( keys == 'weight' ){
                stuHead[keys] = '体重'
            }
            if ( keys == '_id' ){
                stuHead[keys] = '序号'
            }
        }

        //console.log(stuHead);

        let isNone = !!this.props.data.length ? 'none' : 'block';
        let isBlock = !!this.props.data.length ? 'block' : 'none';

        return (
            <div>
                <h3>学员详情列表</h3>
                <table style={{display: isBlock}}>
                    <thead>
                        <StuHead title={stuHead}/>
                    </thead>

                    <tbody>
                        {StuItemNode}
                    </tbody>
                </table>

                <p style={{display: isNone}}>无符合要求的学员</p>
            </div>
        )
    }
}

export default StuList