/**
 * Created by ige16 on 2017.4.16 0016.
 */

'use strict';

import React from 'react'
import StuSex from './StuSex'
import StuName from './StuName'
import StuList from  './StuList'
import $ from 'jquery'
import PubSub from 'pubsub-js'

class StuBox extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            data: [],
            origin: [],
            sexVal: 0,
            nameVal: 0
        };


        this.getData();

        //console.log(this.props.url)

    }

    getData () {
        $.ajax ({
            url: this.props.url,
            dataType: 'json',
            cache:false,
            success: stuMeg => {

                //console.log(stuMeg);

                this.setState({
                    data: stuMeg,
                    origin: stuMeg
                });

            },
            error: (xhr, status, error) => {
                console.log(`xhr: ${xhr} / ${error} / ${xhr.status}`)
            }
        });

        // console.log(this)

    }

    handleSexChange (SexVal) {

        this.setState({
            sexVal: SexVal
        });

        //console.log(this.state.sexVal);

        setTimeout( () => {

            console.log(this.state.sexVal);

            this.updateData ();

        })

    }

    handleNameChange (NameVal) {

        this.setState({
            nameVal: NameVal
        });

        setTimeout( () => {

            console.log(this.state.nameVal);

            this.updateData ();

        })

    }

    updateData () {

        console.log(this);

        let newData = [];

        if ( this.state.sexVal != 0 && this.state.nameVal !=0 ){

            this.state.origin.forEach( ( val, key ) => {

                if ( val.stuSex == this.state.sexVal && val.stuName == this.state.nameVal ) {

                    newData.push( val )

                }

            } );

        }else if( this.state.sexVal != 0 ){

            this.state.origin.forEach( ( val, key ) => {

                if ( val.stuSex == this.state.sexVal ) {

                    newData.push( val )

                }

            } );

        }else if(this.state.nameVal !=0){

            this.state.origin.forEach( ( val, key ) => {

                if ( val.stuName == this.state.nameVal ) {

                    newData.push( val )

                }

            } );

        }else{

            newData = this.state.origin;

        }

        console.log(newData);

        this.setState({
            data: newData,
        });

    }

    componentDidMount () {

        PubSub.subscribe('delItem', function (evName, _id) {

            //console.log(_id)
            //console.log(this)
            let newData =  this.state.data.filter ( (value, index) => {

                return  value._id != _id;


            });

            //console.log(newData)

            this.setState({
                data: newData,
                origin: newData
            })

        }.bind(this))

    }

    render () {

        console.log(this.state.sexVal);

        return (
            <div>
                <h1>学员信息表</h1>
                <br/>
                <StuSex onSexChange={this.handleSexChange.bind(this)} />
                <br/>
                <StuName onNameChange={this.handleNameChange.bind(this)} />
                <br/>
                <StuList data={this.state.data} />
            </div>
        )
    }
}

export { StuBox as default }
