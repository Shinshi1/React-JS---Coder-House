// Inicio del código
import React, { useState } from "react";

export default function CartForm(props) {
  // hacer un solo useState
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  // los eventos hacen "lo mismo"
  function onInputChange(evt) {
    let nameInput = evt.target.name;
    let value = evt.target.value;
    // dynamic properties
    let newData = { ...data }
    newData[nameInput] = value;
    setData(newData)
    // console.log(newData)
  }

  function onSubmit(evt) {
    evt.preventDefault();
    props.onSubmit(data)
  }

  // muchos fragmnets innecesarios
  return (
    <form onSubmit={onSubmit} className='mt-4 text-center font-poppins'>
      {/* Podriamos convertir los inputs en Componentes */}
      <div style={{ display: "flex", marginBottom: 8 }}>
        {/* Falta name al input y forHtml a los label */}
        <label htmlFor="name" style={{ width: "100px", marginRight: 4 }}>Nombre</label>
        <input className="rounded-md outline-none" style={{'backgroundColor': '#eee'}} value={data.name} name="name" type="text" onChange={onInputChange} required />
      </div>

      <div style={{ display: "flex", marginBottom: 8 }}>
        <label htmlFor="email" style={{ width: "100px", marginRight: 4 }}>Email</label>
        <input className="rounded-md outline-none" style={{'backgroundColor': '#eee'}} value={data.email} name="email" type="email" onChange={onInputChange} required />
      </div>

      <div style={{ display: "flex", marginBottom: 8 }}>
        <label htmlFor="phone" style={{ width: "100px", marginRight: 4 }}>Teléfono</label>
        <input className="rounded-md outline-none" style={{'backgroundColor': '#eee'}} value={data.phone} name="phone" type="phone" onChange={onInputChange} required />
      </div>

      <button
         disabled={data.name === "" || data.email === "" || data.phone === ""}
        type="submit"
        className="btn-cart "
      >
        Finalizar Compra
      </button>
    </form>
  );
}