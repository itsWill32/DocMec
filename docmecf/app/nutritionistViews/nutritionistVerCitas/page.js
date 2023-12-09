'use client'
import Footer from "@/componentes/footer";
import NavNutritionist from "@/componentes/navNutritionist";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";

export default function verCitas() {
  const [citasList, setCitasList] = useState([]);

  const getCitas = async () => {
    try {
      const { data } = await axios.get('http://localhost:5000/api/allCitas');
      setCitasList(data);
    } catch (error) {
      console.error('Error al obtener citas:', error);
    }
  };

  function nuevoLocal(dato) {
    localStorage.setItem("usuarioCita", dato);
  }

  useEffect(() => {
    getCitas();
  }, []);

  return (
    <>
      <NavNutritionist />

      <div className='container-citasAdmin'>
        {citasList.map((valor, index) => (
          <div
            key={index}
            onClick={() => nuevoLocal(valor.nombre)} 
            className='card-perfilAdmin'
            
          >
            <span className='card-imgAdmni'>
              <Link href='/nutritionistViews/nutritionistVerPerfiles'>
                <Image src='/img/perfil.png' width={80} height={120} style={{ borderRadius: '50%' }} />
              </Link>
            </span>
            <br />
            <div className='card-infoAdmin'>
              <h5>{valor.nombre}</h5>
              <p>Fecha: {valor.fecha}</p>
              <p>Hora: {valor.hora}</p>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}