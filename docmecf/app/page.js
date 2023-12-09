import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";
import Footer from "@/componentes/footer";


export default function LandingPage () {
    return (
        <>
            <nav class="navbar navbar- bg-f0f7da" style={{background:'rgba(88, 170, 230, 0.35)'}} >
                <div class="container-fluid">
                    <span>
                        <Image src='/img/loogo.png' width={80} height={80}></Image>
                    </span>
                    <ul class="nav justify-content-end">
                        <Link href='/userViews/userLogin'>
                            <button class="btn btn-outline-primary" type="submit">Iniciar sesion</button>
                        </Link>
                        <Link href='/userViews/userRegister'>
                            <button class="btn btn-outline-primary" type="submit">Crear cuenta</button>
                        </Link>
                    </ul>
                </div>
            </nav>
            
            <div className="Contenedor">
                <Link href='/nutritionistViews/nutritionistLogin'>
                <Image src="/img/nutriologa.png" width={500} height={500} style={{marginLeft:'150px'}}></Image>
                </Link>
                <div class='text'>
                    <p >Estamos dedicados a brindar servicios de nutrición personalizados y 
                        de alta calidad para ayudarte a alcanzar tus metas de salud y bienestar.  
                        nos enorgullece de ser tu aliado en tu  viaje hacia una vida más saludable. 
                        Nuestra misión es brindar atención nutricional de alta calidad, 
                        basada en la evidencia científica y personalizada para cada paciente. 
                        Nos  esforzamos por empoderarte con conocimientos y habilidades que te permitan 
                        tomar decisiones alimenticias informadas y mejorar tu salud en general.
                    </p>
                </div>
            </div>

            <Footer/>

        </>
    )

}
