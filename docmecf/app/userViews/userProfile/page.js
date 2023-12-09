"use client"
import Footer from "@/componentes/footer";
import NavUser from "@/componentes/navUser";
import Image from "next/image";
import Swal from "sweetalert2";
import React, { useState, useEffect } from 'react'
import axios from "axios";
import { images } from "@/next.config";



export default function ProfileUser () {

    const initialState = {
        nombre:'',
        edad:'',
        estatura:'',
        numero:'',
        alergias:'',
        comidasFavoritas:'',
        peso:'',
        pesoObjetivo:'',
        email:''
    }

    const [usuariosList, setUsuariosList] = useState([])

    const [body, setBody] = useState(initialState)

    const email1 = localStorage.getItem('email');

    const [bodyid, setBodyID] = useState({ email: email1})
    
    const [modi,setModi]=useState([])

    var llave = true;

    const getUser = async () =>{
            console.log(bodyid)
            const{data} = await axios.post('http://localhost:5000/api/usuarioTest', bodyid)
            setUsuariosList(data)
            
    }

    const onEditz = async (event, index) => {
        event.preventDefault(); 
        const modifiedData = modi[index];
        console.log(modifiedData)
        try {
            const { data } = await axios.post('http://localhost:5000/api/editar', modifiedData);
            console.log("Editado?");
        } catch ({ response }) {
            alert('Error 404');
        }
    };

    const onChangeM = (event, index ) => {
        const email = "email"
        const n = "nombre"
        const n1 ="edad"
        const n2 ="estatura"
        const n3 ="numero"
        const n4 ="alergias"
        const n5 ="comidasFavoritas"
        const n6= "peso"
        const n7 ="pesoObjetivo"
        const { name, value } = event.target;

        if(llave=true){
        {usuariosList.map((map,index) => (  
        setModi((prevModi) => {   
        const updatedModi = [...prevModi];
        updatedModi[index] = {
            ...updatedModi[index],
            [name]: value,
            [email]:map.email,
            [n]:map.nombre,
            [n1]:map.edad,
            [n2]:map.estatura,
            [n3]:map.numero,
            [n4]:map.alergias,
            [n5]:map.comidasFavoritas,
            [n6]:map.peso,
            [n7]:map.pesoObjetivo
            };  
            
        llave=false
        return updatedModi;
        })
        ))}
        
    }

    setModi((prevModi) => {   
        const updatedModi = [...prevModi];
        updatedModi[index] = {
            ...updatedModi[index],
            [name]: value,
            
            
        };
        return updatedModi;
        })
}

    useEffect(() => {
        getUser();
        
    }, []);
    
    var unidad = 'kg'; 
    return (
        <>
        <NavUser/>

        {usuariosList.map((email,index) => (      

            <div key={index} style={{marginLeft:'25%'}}>
                <div class='name'>
                    <form>
                        <label class='label-nameProfile'>Correo: </label>
                        <input
                        defaultValue={email.email}
                        onChange={(e) => onChangeM(e, index)}
                        type="text" class='input-nameProfile' name="email" disabled/>
                    </form>
                    <form>
                        <label class='label-apellidoProfile' >Nombre:</label>
                        <input 
                        defaultValue={email.nombre}
                        onChange={(e) => onChangeM(e, index)}
                        class='input-apellidoProfile' name="nombre" />
                    </form>
                </div >

                <div class='img-Profile'>
                    <Image src='/img/perfil.png' width={205} height={200} alt='imgPerfil'></Image>
                </div>

                <div class='biografia'>
                    <form>
                        <label class='label-edadProfile'>Edad:</label>
                        <input 
                        defaultValue={email.edad}
                        onChange={(e) => onChangeM(e, index)}
                        type="text" class='input-edadProfile' name="edad" />
                        <span style={{ position:'absolute',marginLeft:'6.5%', marginTop:'-.5%'}}>años</span>
                    </form>
                    
                    <form>
                        <label class='label-pesoProfile' >Peso:</label>
                        <input 
                        defaultValue={email.peso}
                        onChange={(e) => onChangeM(e, index)}
                        type="text" class='input-pesoProfile' name="peso" />
                        <span style={{ position:'absolute' ,marginLeft:'6.5%', marginTop:'-.5%'}}>kg</span>
                    </form>

                    <form>
                        <label class='label-estaturaProfile' >Estatura:</label>
                        <input 
                        defaultValue={email.estatura}
                        onChange={(e) => onChangeM(e, index)}
                        type="text" class='input-estaturaProfile' name="estatura" />
                        <span style={{ position:'absolute' ,marginLeft:'5%', marginTop:'-.5%'}}>cm</span>
                    </form>

                    <form>
                            <label class='label-alergiasProfile' >Alergias:</label>
                            <input 
                            defaultValue={email.alergias}
                            onChange={(e) => onChangeM(e, index)}
                            type="text" class='input-alergiasProfile' name="alergias" />
                    </form>

                    <form>
                            <label class='label-comidasProfile' >Comidas favoritas:</label>
                            <input 
                            defaultValue={email.comidasFavoritas}
                            onChange={(e) => onChangeM(e, index)}
                            type="text" class='input-comidasProfile' name="comidasFavoritas" />
                    </form>

                    <form>
                            <label class='label-pesoObjetivoProfile' >Peso Objetivo:</label>
                            <input 
                            defaultValue={email.pesoObjetivo}
                            onChange={(e) => onChangeM(e, index)}
                            type="text" class='input-pesoObjetivoProfile' name="pesoObjetivo" />
                            <span style={{ position:'absolute' ,marginLeft:'2.7%', marginTop:'-.5%'}}>kg</span>
                    </form>

                    <form>
                            <label class='label-numeroProfile' >Numero:</label>
                            <input 
                            defaultValue={email.numero}
                            onChange={(e) => onChangeM(e, index)}
                            type="tel" class='input-numeroProfile' name="numero" />
                    </form>
            
                </div>

                <button type="submit" onClick={(event) => onEditz(event, index)} class="btn btn-outline-primary"  style={{display:'flex', margin:'8% 32% '}} >actualizar</button>
            </div>

        ))}

        <Footer/>
        </>
    )
}