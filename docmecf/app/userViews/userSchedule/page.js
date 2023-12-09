"use client"
import NavUser from "@/componentes/navUser";
import Footer from "@/componentes/footer";
import Swal from "sweetalert2";
import React, { useState, useEffect } from 'react'
import axios from "axios";


export default function AgendarCita (){

    const name = localStorage.getItem('nombre')

    const initialState = {
        nombre : name,
        fecha : "",
        hora : ""
	}

    const [body, setBody] = useState(initialState)

    
    const onChange = ({ target }) => {
		const { name, value } = target
		setBody({
			...body,
			[name]: value
		})
	}

    const onSubmit = () => {
        axios.post('http://localhost:5000/api/agendar', body)
            .then(({ data }) => {
                Swal.fire({
                    title:'Registro Exitoso',
                    icon:'success',
                    showConfirmButton:'false',
                    timer:500
                })
            })
            .catch(({ response }) => {
                Swal.fire({
                    title:'Registro incorrecto',
                    icon:'error',
                    showConfirmButton:'false',
                    timer:500
                })
            })
    }


    return (
        <>

        <NavUser/>

            <div class='container-agendarCita'>
            <h1 style={{textAlign:'center', backgroundColor:'rgba(88, 170, 230, 0.35)', borderRadius:'15px'}} >Agendar Cita</h1>


            <div class='datosPersonales'>
                <form>
                    <label class='label-nombreCita'>Nombre:</label>
                    <input defaultValue={name} type="text" class='input-nombreCita'/>
                </form>
                <form>
                    <label class='label-condionesCita'>¿Tienes alguna condición médica que pueda afectar tu peso?</label>
                    <select class='select-condionesCita'>
                        <option>--</option>
                        <option>Si</option>
                        <option>No</option>
                    </select>
                </form>
                <form>
                    <label class='label-medicamentosCita' >Medicamentos Recetados?</label>
                    <select class='select-medicamentosCita'>
                        <option>--</option>
                        <option>Si</option>
                        <option>No</option>
                    </select>
                </form>
            </div>

            <div class='select-medico' >
                <h4 style={{textAlign:'center', backgroundColor:'rgba(88, 170, 230, 0.35)', borderRadius:'15px', marginTop:'2%'}}>Seleccione Medico</h4>
                <form >
                    <label class='label-medicoCita' >Medico</label>
                    <select class='select-medicoCita' disabled>
                        <option>--------------------------</option>
                        <option>William de Jesus Espinosa Garcia</option>
                        <option>--------------------------</option>
                    </select>
                    
                </form>
            </div>

            <div class='select-fechaHora' >
                <h4 style={{textAlign:'center', backgroundColor:'rgba(88, 170, 230, 0.35)', borderRadius:'15px', marginTop:'2%'}}> Seleccione el dia y la hora </h4>
                <form>
                    <label class='label-diaCita'>Día</label>
                    <input name="fecha" onChange={onChange} value={body.fecha} type="date" class='input-diaCita' />
                    
                </form>

                <form>
                    <label class='label-horaCita'>Hora</label>
                    <input name="hora" onChange={onChange} value={body.hora} type="time" class='input-horaCita'/>
                </form>
            </div>


            <button onClick={onSubmit} type="submit" class="btn btn-outline-primary"  style={{marginTop:'35%', marginLeft:'23%', position:'absolute'}}>Agendar Cita</button>
            </div>

        <Footer/>
        </>
    )
};