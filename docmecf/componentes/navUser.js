import Image from "next/image";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';


const NavUser = (() => {
    return (
        <>
        <div style={{background:'rgba(88, 170, 230, 0.35)'}}>
            <nav class="navbar navbar- bg-f0f7da">
                <div class="container-fluid">
                    <span>
                        <Image src='/img/loogo.png' width={80} height={80}></Image>
                    </span>
                    <ul class="nav justify-content-end"> 
                        <Link href='/userViews/userSchedule'>
                            <button class="btn btn-outline-primary" type="submit">Agendar cita</button>
                        </Link>
                        <Link href='/userViews/userProfile'>
                            <button class="btn btn-outline-primary" type="submit">Perfil</button>
                        </Link>
                        <Link href='../'>
                            <button class="btn btn-outline-primary" type="submit">Cerar sesion</button>
                        </Link>
                    </ul>
                </div>
            </nav>
        </div>
        </>
    )
});
export default NavUser;