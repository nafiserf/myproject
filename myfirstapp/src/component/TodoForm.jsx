const TodoForm =()=>{
  const todo=[
{name:"task1", priority:"1"},
{name:"task2", priority:"2"},
  ]
return(
  <div
  style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      border:"2px solid black",

      flexDirection:"column",
      backgroundColor:"black",
      
      
      
  }}> 
  

  <h1
  style={{
    color:"white",
  } }>My resume</h1>


<form>
  <input type="text" name="nm" defaultValue="name : "
  style={{
      display:"block",
      width:"100%",
      marginTop:"2rem",
      
      
  }

  }>

  </input>
  <input type="text" name="nm" defaultValue="name : "
  style={{
      display:"block",
      width:"100%",
      marginTop:"1rem",
      marginBottom:"0.5rem",
      
  }

  }>

  </input>

</form>

{todo.map((Element,index) => (
<div key={index}>
{Element.name} {Element.priority}
</div>

))}

</div>
)

}
export default TodoForm;