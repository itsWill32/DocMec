'use client'
import Footer from "@/componentes/footer";
import NavNutritionist from "@/componentes/navNutritionist";
import Image from "next/image";
import { useState, useEffect} from "react";
import Swal from "sweetalert2";
import axios from "axios";




export default function verPeriles () {

    const name = localStorage.getItem('usuarioCita')

    const initialState = {
        email:'',
        password:'',
        nombre:'',
        edad:'',
        estatura:'',
        numero:'',
        alergias:'',
        comidasFavoritas:'',
        peso : '',
        pesoObjetivo:''
	}

    const [usuariosList, setUsuariosList] = useState([])

	const [body, setBody] = useState(initialState)

    const[bodyid,setBodyID]=useState({nombre:name})

    

    const getUser = async () =>{
        console.log(name)
        const{data} = await axios.post('http://localhost:5000/api/CitaUser', bodyid)
        setUsuariosList(data)
        
}


    const alertActualizar = () =>{
        Swal.fire({
            icon: "success",
            title: name,
            showConfirmButton: false,
            timer: 2500
          });
    }

    useEffect(() => {
        getUser();
      }, []);

    return (
        <>
        <NavNutritionist/>
        {usuariosList.map((valor,index) => ( 
        <div style={{marginLeft:'25%'}}>
            <div class='name'>
             
                <form>
                    <label for='name' class='label-nameProfile'>
                    Nombre:
                    </label>
                    <input value={valor.nombre} name="nombre" type="text" id='name'class='input-nameProfile' />
                </form>
            </div >

            <div class='img-Profile'>
                <Image src='/img/perfil.png' width={205} height={200} ></Image>
            </div>

            <div class='biografia'>
                <form>
                    <label for='edad' class='label-edadProfile'>Edad:</label>
                    <input value={valor.edad} id='edad' type="text" class='input-edadProfile' />
                    <span style={{ position:'absolute',marginLeft:'6.5%', marginTop:'-.5%'}}>años</span>
                </form>
                
                <form>
                    <label for='peso' class='label-pesoProfile' >Peso:</label>
                    <input value={valor.peso} id='peso' type="text" class='input-pesoProfile' />
                    <span style={{ position:'absolute' ,marginLeft:'6.5%', marginTop:'-.5%'}}>kg</span>
                </form>

                <form>
                    <label for='estatura' class='label-estaturaProfile' >Estatura:</label>
                    <input value={valor.estatura} id='estatura' type="text" class='input-estaturaProfile' />
                    <span style={{ position:'absolute' ,marginLeft:'5%', marginTop:'-.5%'}}>cm</span>
                </form>

                <form>
                        <label for='alergias' class='label-alergiasProfile' >Alergias:</label>
                        <input value={valor.alergias} id='alergias' type="text" class='input-alergiasProfile' />
                </form>

                <form>
                        <label for='comidas' class='label-comidasProfile' >Comidas favoritas:</label>
                        <input value={valor.comidasFavoritas} id='comidas' type="text" class='input-comidasProfile' />
                </form>

                <form>
                        <label for='pesoObjetivo' class='label-pesoObjetivoProfile' >Peso Objetivo:</label>
                        <input value={valor.pesoObjetivo} id='pesoObjetivo' type="text" class='input-pesoObjetivoProfile' />
                        <span style={{ position:'absolute' ,marginLeft:'2.7%', marginTop:'-.5%'}}>kg</span>
                </form>

            </div>

        </div>
        ))}
        <Footer/>
        </>
    )
}