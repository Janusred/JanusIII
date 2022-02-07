/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Janus!! Todo va genail!! :)')


const createImageNode =()=>{
    const imagen = document.createElement('img')
    imagen.className="mx-auto";
    imagen.width="320";
    imagen.src="https://randomfox.ca/images/50.jpg";

    return imagen;
};

 const nuevaImagen = createImageNode();
 const mountNode =document.getElementById("images");
  mountNode.appendChild(nuevaImagen);