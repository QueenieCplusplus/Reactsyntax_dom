// pm3:00
// use ES5
// use React.DOM.* this is a factory
// 1. create a class (as component)
// 2. to create factory (as React.DOM | React.createFactory(class)) for manufacture the instance of the class
// 3. to create instance of ReactElement (as React.CreatElement(class,null, val)| Class(null, 'value')) te by using factory

var React = require('react');
var ReactDom = require('react-dom');
var KateIsBackApp = require('./reactComponentCalledClass2');

// as 3
// React.createElement('class'); create one element
// React.DOM.class(); this is a factory, call many element by this
var RD = React.DOM;
// RD.KateIsBackApp();
// var K = RD.KateIsBackApp;

var KClass = React.createClass({

    render: function(){

        return RD.KateIsBackApp()

    }

})



