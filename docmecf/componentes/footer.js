import Image from "next/image";
import Link from "next/link";

export default function Footer  () {
    return (
    <>
    <div class='footer' >
        <div class='contactos'>
            <h6>Contactanos</h6>
            <Image src='/img/ubicacion.png' width={25} height={25} class='imgUbicacion'></Image>
            <p style={{marginTop:'-25px', marginLeft:'30px'}}>Av Central entre 5 y 6 poniente, barrio Santo Domingo Cintalapa, Chiapas. 
            <br/> 9614562856 
            <Image src='/img/telefono.png' width={21} height={20} class='imgTelefono'></Image>
            <Image src='/img/correo.png' width={25} height={25} class='imgCorreo'></Image>
            <br/> faNutricion@gmail.com</p>

       
        </div>
        <div class='redes-Sociales'>
            <h6 style={{marginLeft:'3rem'}}>Redes Sociales</h6>
            <Link href='https://www.facebook.com/'>
            <Image src='/img/facebook.png' width={35} height={35} style={{marginLeft:'1rem'}}></Image>
            </Link>
            <Link href='https://www.instagram.com/'>
            <Image src='/img/instagram.png' width={35} height={35} style={{marginLeft:'1rem'}}></Image>
            </Link>
            <Link href='https://www.pinterest.com/'>
            <Image src='/img/pinterest.png' width={35} height={35} style={{marginLeft:'1rem'}}></Image>
            </Link>
            <Link href='https://twitter.com/'>
            <Image src='/img/signo-de-twitter.png' width={35} height={35} style={{marginLeft:'1rem'}}></Image>
            </Link>
        </div>
    </div>
    </>
)
};

