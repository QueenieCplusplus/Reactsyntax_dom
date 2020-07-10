# Reactsyntax dom
it is as a factory to create html element instance

# React DOM

虛擬節點


# HTML DOM

底層節點，如要透過 react 與底層溝通，可藉由呼叫 ref 屬性存取特定元素。
並在 react 生命週期的 componentDidMount()內執行，透過 getDOMNode 可修改底層節點。
抑或是在生命週期的 componentWillUnmount() 內執行，透過 getDOMNode 可取消底層節點，避免記憶體洩漏。

      render: function(){

            return <div ref="autoK"/> 

      }
      
      //
      
       componentDidMount: function(){ //可能有功能仍然存，即便移除節點上元件後，仍然存活的生命週期，造成記憶體洩漏

           var kkk = this.refs.autoK.getDOMNode();
           alert(kkk);
     

      }
      
      //
      
      componentWillUnmount: function(){ //解決記憶體洩漏問題，在此生命週期中，將其DOM Node直接移除，可清理元件。

        this.refs.autoK.getDOMNode().clear();
        // this.res.autoK.getDOMNode().removeChild();

     }

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

