const isInterersecting = (entry) =>{
return entry.isInterersecting;
};

const accion =(entry)=>{
    const nodo = entry.target;
    console.log("Hola Janus!!");

    observer.unobserve(nodo);
};

const observer = new IntersectionObserver((entries)=>{
    entries.filter(isInterersecting).forEach(accion);
});
export const registerImage = (imagen)=> {
    observer.observe(imagen);
};