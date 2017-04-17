/**
 * Created by ige16 on 2017.4.17 0017.
 */

'use strict';

import { store } from './util'

let app = {

    dataArr: store('todo') || [],
    info: function () {
        store('todo', app.dataArr);
    },
    addItem: function (value) {
        app.dataArr.push({
            id: Date.now(),
            content: value,
            compile: false
        });

        app.info();

        app.render(app.dataArr)
    },
    toggleAll: function (bool) {
        app.dataArr.forEach((item) => {
            item.compile = bool;
        });

        app.info();

        app.render(app.dataArr)
    },
    toggle: function (id) {
        app.dataArr.forEach((item) => {
            if (item.id === id){
                item.compile = !item.compile
            }
        });

        app.info();

        app.render(app.dataArr)
    },
    delete: function (id) {
        app.dataArr = app.dataArr.filter((item) => {
            return item.id !== id;
        });

        app.info();

        app.render(app.dataArr)
    }

};

//app.dataArr = store('todo') || [];

export default app