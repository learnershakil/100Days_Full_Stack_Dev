import { useState } from "react";
export function CreateTodo(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const addTodo = () => {
        fetch('http://localhost:3000/todo',{
            method: 'POST',
            body: JSON.stringify({
                title: title,
                description: description
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(async function(res){
            const json = await res.json();
            alert("Todo created successfully!");
            console.log(json);
        })
    }

    return (
        <div>
           <input type="text" placeholder="Title:" onChange={(e)=>{
            const value = e.target.value;
            setTitle(value);
           }} />
           <br /><br />
           <input type="text" placeholder="Description:" onChange={(e)=>{
            const value = e.target.value;
            setDescription(value);
           }} />
            <br /><br />
           <button onClick={addTodo}>Add todo</button>
        </div>
    )
}