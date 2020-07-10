//2020.7/10, pm 1:10 - 1: 35
//react & js lib using DOM
// Dom Node
// using this.refs.domnode.getDOMNode()

var React = require("react");
var World = React.createClass({

    // node
    render: function(){

        return <div ref="autoK"/>

    },

    // func
    funcalled: function(w){
        newdata = this.state.data.add(w);
        alert(newdata);

    },

    // data
    getInitialState: function(){
        return
        { data: ["20191222", "poupou", "cat", "rainbowBridge"]};

    },

    componentDidMount: function(){ //可能有功能仍然存，即便移除節點上元件後，仍然存活的生命週期，造成記憶體洩漏

        autodo({
            target: this.refs.autoK.getDOMNode(),
            data: this.state.data,
            event: this.funcalled
            // event: { listener: this.funcalled}

        });

    },

    componentWillUnmount: function(){ //解決記憶體洩漏問題，在此生命週期中，將其DOM Node直接移除，可清理元件。

        this.refs.autoK.getDOMNode().clear();
        // this.res.autoK.getDOMNode().removeChild();

    }

});
