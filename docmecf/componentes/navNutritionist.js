import Image from "next/image";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';



const NavNutritionist = (() => {
    return (
        <>
        <div style={{background:'rgba(88, 170, 230, 0.35)'}}>
            <nav class="navbar navbar- bg-f0f7da" >
                <div class="container-fluid" >
                    <span>
                        <Image src='/img/loogo.png' width={80} height={80}></Image>
                    </span>
                    <ul class="nav justify-content-end">
                        <Link href='/nutritionistViews/nutritionistVerCitas'>
                            <button type="submit" class="btn btn-outline-primary">Ver citas</button>
                        </Link>
                        <Link href='/nutritionistViews/nutritionistVerPerfiles'>
                            <button type="submit" class="btn btn-outline-primary">Ver perfiles</button>
                        </Link>
                    </ul>
                </div>
            </nav>
        </div>
        </>
    )
});
export default NavNutritionist;