import React from "react";

export const Promesas = () => {
  let promesa = new Promise((res, rej) => {
    setTimeout(() => {
      res("Promesa Resuelta");
    }, 10000);
  });
  promesa.then(()=>{

  }).catch(()=>{

  }).finally(()=>{
    
  });
  return <div>Promesas</div>;
};
