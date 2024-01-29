export default function Navbar(){
    return(
        <div className="bg-red-700 fixed top-0 w-full h-36 gap-16 flex items-center">
        <div className="text-black text-xl font-extrabold  ml-20">
          <h1>Ut-canicos</h1>
        </div>
        <div className="text-3xl text-black font-extrabold ps-36 pe-96 pt-7">
          <ul>
            <li className="hover:text-white">Empezar</li>
          </ul>
        </div>
        <div className="flex flex-col items-center mr-32">
          <box-icon name='user-circle' size='lg' ></box-icon>
          <a href="/" className="text-black hover:text-white font-extrabold text-xs">Perfil</a>
        </div>
      </div>
      
        
    )
}