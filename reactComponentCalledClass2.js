
var React = require('react');
var ReactDom = require('react-dom');


var KateIsBackApp = React.createClass({

    // ES5

    getInitialState: function(){
        return{

            day: new Date()

        };
    },

//    componentWillMount: function(){

//    },

// E5 v0.11
    // render: function(){

    // return React.DOM.div(

    // );
        
    // }

    // E5 v0.12
    render: function(){

        // return React.createElement(type, prop, child); 
        // type is htm tag, prop is component, 3rd param is value of props
        return
      
            <h1> time now is {this.props.day} </h1><hr/>;
    }

    // E6
    // render: function(){

    //     return (  
    //            <div>
    //                {this.props.day}
    //            </div>         
    //         );
    //     }


//    componentDidMount: function(){

//    },

});

module.exports = KateIsBackApp;

ReactDOM.render(<KateIsBackApp/>,document.getElenmetById('main'));

    // ES6
    // constructor(props){
    //     super(props);
    //     this.state = {count: 0};
    //     this.handleClick = this.handleClick.bind(this);
    // }

    // ES6 alternative
    // state = {
    //     count:0
    // }


    // componentWillMount: function(){
    //     document.title = `${state.count}`;

    // },

    // handleClick: function(){
        
    //     this.setState((state) =>({count: tstate.count +1,}))
    // },

// document.getElementById('root')

