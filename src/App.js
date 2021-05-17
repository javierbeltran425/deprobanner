import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

import construction from '../src/construction_image.png'
import logo from '../src/depro_logo.png'

function App() {
  return (
    <>
    <div className="flex flex-col flex-wrap w-full h-screen bg-gray-400 justify-center items-center">
      <p className="lg:text-xl text-black font-bold">Bienvenido a </p>
      <img src={logo} alt="Deproinv Logo" className="w-80 lg:w-1/3" />
      <img src={construction} alt="Banner" className="lg:absolute lg:right-24 lg:object-left w-40 lg:w-80" />
      <p className="text-xs lg:text-xl font-bold">Este sitio se encuentra en construcción.</p>
      <div className="flex flex-col mt-10 flex-wrap justify-center items-center">
        <p className="font-bold text-xs lg:text-xl">Te invitamos a ponerte en contacto con nosotros </p>
        <p className="font-bold text-xs lg:text-xl">por medio de: </p>
      </div>
      <div className="w-full flex justify-center">
        <a href="https://www.facebook.com/deproinv"><Icon icon={faFacebook} className="cursor-pointer lg:m-5 text-white text-4xl lg:text-7xl m-2 hover:text-blue-600 duration-1000" /></a>
        <a href="https://api.whatsapp.com/send?phone=50378532004"><Icon icon={faWhatsapp} className="cursor-pointer lg:m-5 text-white text-4xl lg:text-7xl m-2 hover:text-green-500 duration-1000" /></a>
        <a href="tel:‎+503-2252-4892">‎<Icon icon={faPhoneAlt} className="cursor-pointer lg:m-5 text-white text-4xl lg:text-7xl m-2 hover:text-blue-500 duration-1000" /></a>
      </div>
      <div className="flex flex-col text-black text-center font-bold lg:text-xl w-full items-center mt-5">
        <h3>O puedes escribirnos al siguiente correo electrónico:</h3>
        <h3 className="mt-5 text-blue-900">gerencia@deproinv.com</h3>
      </div>
    </div>
    </>
  );
}

export default App;
