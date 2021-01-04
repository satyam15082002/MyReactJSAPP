
import '../../css/todo.css';
import { Component } from 'react';
import { connect } from "react-redux";
import {addTodo,delTodo,updateTodoId,updateTodo} from "../../redux/action";
const TodoItem=(props)=>(
    <li className="TodoItem">
        <input type="checkbox" onClick={props.toggleTodo} checked={props.todo.checked}/>
        <span >{props.todo.text}</span>
       <button onClick={props.ondelete}>Delete</button>
        <hr />
    </li>
)
const TodoEntry=(props)=>(
    <div className="TodoEntry">
        <input type="text" id="todo"/>
        <input type="button" value="AddItem" onClick={props.addTodo}/>
    </div>
)
 class Todo extends Component {
     //props={todos:{text:"string",id:int,checked:bool},
     //todoid:{id:int}}
    deleteTodo(obj){
        if(obj.checked)
        {
        this.props.delTodo({id:obj.id});
        }
 
    }
    addTodo(){
       var value=document.getElementById("todo").value;
       if(value){
        this.props.addTodo({text:value,id:this.props.todoid.id,checked:false});      
        this.props.updateTodoId({id:this.props.todoid.id});
       document.getElementById("todo").value="";
        }
     }
     toggleTodo(id)
     {

         this.props.todos.map(todo=>{
             if(todo.id===id){
                 this.props.updateTodo({id:id,checked:!todo.checked});
             }
             return todo;
         });
     }
  render()
  { 
    return( 
        <div className="Todo">
            <h1>Todo App</h1>
            <TodoEntry addTodo={()=>this.addTodo()}/>
            <ol>
            {
            this.props.todos.map(todo=>
            <TodoItem todo={todo}  ondelete={()=>this.deleteTodo(todo)}
            toggleTodo={()=>this.toggleTodo(todo.id)}
            />)
            }
            </ol>
        </div>
    )
  }
}

const mapStatetoProps=(state)=>({
    todos:state.todos,
    todoid:state.todoid,
})
const mapDispatchtoProps= 
{
    addTodo:addTodo,delTodo:delTodo,
    updateTodoId:updateTodoId,updateTodo:updateTodo,
};
export default connect(mapStatetoProps,mapDispatchtoProps)(Todo);