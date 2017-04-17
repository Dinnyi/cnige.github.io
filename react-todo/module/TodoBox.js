/**
 * Created by ige16 on 2017.4.17 0017.
 */

'use strict';

import React from 'react'
import app from './app'
import ToDoList from './ToDoList'

class TodoBox extends React.Component {

    handleDown (ev) {
        if (ev.keyCode === 13){
            app.addItem(ev.target.value);
            ev.target.value = ''
        }
    }

    handleToggleAll (ev) {
        app.toggleAll(ev.target.checked)
    }


    render () {

        let dataArr = this.props.dataArr;
        let content;
        let footer;
        let num = 0;

        dataArr.reduce((n, item) => {
           num = item.compile ? num : num + 1;
        },0);

        console.log(num)

        console.log(dataArr);

        if (dataArr.length !== 0){

            content = (

                <section className="main">
                    <input
                        className="toggle-all"
                        type="checkbox"
                        checked={num === 0}
                        onChange={this.handleToggleAll}
                    />
                        <ul className="todo-list">
                            {
                                dataArr.map(function(item, index) {

                                    return <ToDoList key={index} {...item}
                                                     toggle={app.toggle.bind(this, item.id)}
                                                     delete={app.delete.bind(this, item.id)}
                                    />

                                }.bind(this))
                            }

                        </ul>
                </section>

            );

            footer = (

                <footer className="footer">
	            <span className="todo-count">
	            	<strong>{num}</strong>
	            	<span>条未选中</span>
	            </span>
                </footer>

            )

        }

        return (

            <div>
                <header className="header" >
                    <h1>todos</h1>
                    <input
                        className="new-todo"
                        placeholder="请输入内容"
                        defaultValue=""
                        onKeyDown={this.handleDown}
                    />
                </header>
                {content}
                {footer}
            </div>
            
        )
        
    }

}

export default TodoBox