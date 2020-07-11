// 2020, 7/11, am 9:55 - 10: 25 (duration: 30 mins)
// multiple-component using DOMnode ID (className for div, htmlFor for label, name for input, event.target.name)
// multiple-componen using bind to pass param


var React = require("react");

var PoupousForm = React.createClass({

    getInitialState: function(){

        return { id2019:"", id2020:"", id2021:""};

    },

    changeHandler: function(textInput){

        var newWords = {};
        newWords[textInput.target.name] = textInput.target.value;
        this.setState(newWords);

    },

    render: function(){

        return <div className="id2019">
            <label htmlFor="id2020"> </label>
            <br/>

            <input type="text" 
                   name="id2020"
                   value= {this.state.id2020}
                   onChange={this.changeHandler}   
            />
            <br/>

            <label htmlFor="id2020"> </label>
            <br/>

            <input type="text" 
                   name="id2021"
                   value= {this.state.id2021}
                   onChange={this.changeHandler}   
            />
            <br/>
        </div>
    }
});

