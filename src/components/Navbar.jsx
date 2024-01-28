export default function Navbar(){
    return(
        <div className="bg-red-500 fixed top-0 w-full h-36 flex justify-between items-center px-36">
            <div className="bg-white pxpy-11 text-black ">
            <h1>hola</h1>
            </div>
            <div className="bg-green-400 text-6xl text-black font-semibold text-shadow">
                <ul>
                    <li>Empezar</li>
                </ul>
            </div>
            
            <div className="bg-green-400 flex flex-col items-center">
                <box-icon name='user-circle' size='lg' ></box-icon>
                <a href="/" className="text-black hover:text-white text-xs">Perfil</a>
            </div>
        </div>
        
    )
}