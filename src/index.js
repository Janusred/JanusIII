
import { registerImage } from "./lazy"; 



/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Janus!! Todo va genail!! :)')


const minimum = 1;
const maximum = 122;
const random= () => Math.floor(Math.random() * (maximum - minimum)) + minimum;
 
const createImageNode =()=>{

    const container= document.createElement("div");
    container.className="p-4"

    const imagen = document.createElement('img')
    imagen.className="mx-auto";
    imagen.width="320";
    imagen.src = `https://randomfox.ca/images/${random()}.jpg`;


    container.appendChild(imagen);

    return container;
};

 const nuevaImagen = createImageNode();
 const mountNode =document.getElementById("images");
  mountNode.appendChild(nuevaImagen);

  const addButton = document.querySelector("Button");

   const addImage=()=>{
       const newImage= createImageNode();
       mountNode.append(newImage);
       registerImage(newImage);
   }
  
  addButton.addEventListener("click",addImage);