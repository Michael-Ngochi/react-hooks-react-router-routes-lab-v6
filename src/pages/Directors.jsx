import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
const [directors,setDirectors]=useState([])

useEffect(()=>{
  fetch("http://localhost:4000/directors")
  .then(res=>res.json())
  .then(data=>{
  console.log(data);
  setDirectors(data)
  })
},[])


  return (
    <>
      <header>
       <NavBar />
      </header>
      <main>
<h1>Directors Page</h1> 
   {
    directors.map((director,index)=>{
      return(
        <article key={index}>
          <h2>{director.name}</h2>
          <ul>
            {
             director.movies.map((movie,index)=>{
              return <li key={index}>{movie}</li>
             }) 
            }
          </ul>
        </article>
      )
    })
   }
     </main>
    </>
  );
};

export default Directors;
