import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
const [actors,setActors]=useState([])

useEffect(()=>{
fetch("http://localhost:4000/actors")
.then(res=>res.json())
.then(data=>{
  console.log(data);
  setActors(data)
})
  },[])

  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <h1>Actors Page</h1>
        {
          actors.map((actor,index)=>{
            console.log(actor.name);
            return(
              <article key={index}>
                <h2>{actor.name}</h2>
                <ul>
                  {
                    actor.movies.map((movie,index)=>{
                      console.log(movie);
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

export default Actors;
