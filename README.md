# Reactsyntax dom
it is as a factory to create html element instance

# ES5, HTML

    render: function(){

        // return React.createElement(type, prop, child); 
        // type is htm tag, prop is component, 3rd param is value of props
        return (
        
             <div className="">
                <h1> time now is {this.props.day} </h1>
             </div>
        
        );
            
    }


    <nod tag class=""> value </node tag>


# ES6, JSX

        render(){

           return(

              React.createElement(node, class, value),
              React.createElement("h1", null, this.props.children)

          );

        }



用 {} 取代 “”
可利用全域變數設定屬性如類別名稱


    var classV = 'a_class';
    
    <node tag className={classV}> value </node tag>
    
    
{} 可以封裝物件也可以封裝函式結果


    <node tag id={this.getID()} className={classV}> {this.props.children} </node tag>

