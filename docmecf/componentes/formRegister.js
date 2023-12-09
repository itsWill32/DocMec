'use client'
import Link from "next/link";
import Image from "next/image";
import { useRef, useState,useEffect } from "react";
import axios from "axios";
import { useRouter,useParams } from "next/navigation";
import Swal from 'sweetalert2';


const FormRegister = (() => {

    
    const initialState = {
        email:'',
        password:'',
        nombre:'',
        edad:'',
        estatura:'',
        numero:'',
        alergias:'',
        comidasFavoritas:''
	}

    const [usuariosList, setUsuariosList] = useState([])

	const [body, setBody] = useState(initialState)
    
    const router = useRouter();

    const onChange = ({ target }) => {
		const { name, value } = target
		setBody({
			...body,
			[name]: value
		})
	}

    const onSubmit = () => {
        event.preventDefault();
        axios.post('http://localhost:5000/api/registro', body)
            .then(({ data }) => {
                router.push('/userViews/userLogin')
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
            <div class='container-register'>
                <h1 style={{color: '#303030',fontSize: '3rem',fontStyle: 'normal',fontWeight: '500',lineHeight:'normal'}}> Crear cuenta</h1>
                <form>
                    <div>
                        <label class='label-nombreR' for='name'>Nombre</label>
                        <input 
                        value={body.nombre}
                        onChange={onChange}
                        class='input-nombreR' type="text" id="name" name='nombre'/>
                    </div>

                    <div>
                        <label class='label-numeroR' for='phone'>Numero telefonico</label>
                        <input
                        value={body.numero}
                        onChange={onChange}
                        class='input-numeroR' type="tel" id="phone" name='numero'/>
                    </div>

                    <div>
                        <label class='label-emailR' for='email'>Correo electronico</label>
                        <input 
                        value={body.email}
                        onChange={onChange}
                        class='input-emailR' type="email" id="email" name='email'/>
                    </div>

                    <div>
                        <label class='label-passwordR' for='password'>Contraseña</label>
                        <input
                        value={body.password}
                        onChange={onChange}
                        class='input-passwordR' type="password" id="password" name='password'/>
                    </div>
                    
                        <button onClick={onSubmit} style={{marginTop:'150%'}} class='button-IniciarSesion' type="submit">Crear cuenta</button>
                </form>
                <Image src='/img/logo.png' width={600} height={600} style={{position:'absolute', marginTop:'-220%', marginLeft:'220%'}}></Image>
            </div>
        </>
    )
});
export default FormRegister;