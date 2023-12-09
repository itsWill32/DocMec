'use client'
import Link from "next/link";
import Image from "next/image";
import { useRef, useState,useEffect } from "react";
import axios from "axios";
import { useRouter,useParams } from "next/navigation";
import Swal from 'sweetalert2';
import NavNutritionist from "@/componentes/navNutritionist";



export default function LoginNutritionist () {
    
    const [body, setBody] = useState({ email: '', password: '' })
    
    

    const router = useRouter();
    

    const inputChange = ({ target }) => {
        const { name, value } = target
        setBody({
            ...body,
            [name]: value
        })
    }

    const onSubmit = () => {
        event.preventDefault();
        axios.post('http://localhost:5000/api/loginAdmin', body)
            .then(({ data }) => {
                localStorage.setItem('auth', '"yes"')
                localStorage.setItem('email', body.email);
                console.log(body.email)
                router.push('/nutritionistViews/nutritionistVerCitas')
                Swal.fire({
                    title: "Inicio de sesion exitoso",
                    icon: "success",
                    showConfirmButton: 'false',
                    timer: 500

                });
            })
            .catch(({ response }) => {
                Swal.fire({
                    icon: "error",
                    text: "Usuario o contraseña incorrectos"
                });
            })
    }
    return(

        <>
        <div class='container-login'>
            <h1 style={{position:'absolute',marginTop:'-10vh', marginBottom:'50vh', marginLeft:'5vh',color: '#303030',fontSize: '3rem',fontStyle: 'normal',fontWeight: '500',lineHeight:'normal'}}> Iniciar Sesion</h1>
            <form>
                <div class='container-email' >
                    <label for='email' class='label-email'>Email address</label>
                    <input 
                    value={body.email}
                    onChange={inputChange}
                    name='email' type="email" id="email" class='input-email' placeholder="email@example.com" />
                </div>
                
                <div class='container-password'>
                    <label for='password' class='label-password'>Password</label>
                    <input 
                    value={body.password}
                    onChange={inputChange}
                    name='password' type="password" id="password" placeholder="password" class='input-password' />
                </div>

                    <button  onClick={onSubmit} type="submit" class='button-IniciarSesion'>Iniciar sesion</button>

                <br/>
                
                <h8 class='button-registar'>No tienes cuenta?</h8><Link href='#' style={{textDecoration:'none', color:'#2d5f73d9'}} >Registrate ahora</Link>
            </form>
            
            <Image src='/img/logo.png' width={600} height={600} style={{marginLeft:'70%', position:'absolute', marginTop:'-6%'}}></Image>
        </div>
        </>
    )
};
