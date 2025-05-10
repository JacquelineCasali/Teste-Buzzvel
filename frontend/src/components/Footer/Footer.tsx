import { FaWhatsapp, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import imagem from "../../assets/imagem.jpg"
import "./Footer.css"
export default function Footer() {
  return (
    <footer className="footer  bg-gradient-to-tr from-green-400 to-green-200 text-white   py-2 ">
      <div className="relative right-0 -mt-[6px] h-3 w-full rounded-l-full bg-gradient-to-r from-green-700 to-green-400 md:w-full"></div>

      <div className=" flex mb-4 pt-2 md: justify-between ml-28">
        <a className="flex items-center  text-3xl sm:mb-0 ">
          <img
            src={imagem}
            className="h-8 mr-1 rounded-lg"
            alt="Flowbite Logo"
          />
          <span className="self-center text-3xl font-handwriting  font-light text-green-800   whitespace-nowrap ">
          Jaqueline Casali
          </span>
        </a>
      </div>
      <div className='sm:flex justify-around '>

  
<div  className="flex flex-col"  >
<h1 className="font-handwriting text-4xl text-green-800 font-light text-center  ">
        Contatos
      </h1>
  
<a
          href="https://api.whatsapp.com/send?phone=5571999735079&amp;text=Olá deixe sua mensagem!"
          target="_blank"
              className="font-handwriting text-3xl text-green-800 font-light text-center "
         
         >
                 <FaWhatsapp className="icon mr-2" />
      (71)99973-5079
        </a>

<span className="font-handwriting text-3xl text-green-800 font-light text-center  flex justify-center items-center ">
<MdOutlineEmail  className="icon mr-2"/>
jcaslia@yahoo.com.br</span>

</div>





<div>

      <h1 className="font-handwriting text-4xl text-green-800 font-light text-center  ">
        Redes Sociais
      </h1>



      <div className="flex justify-center flex-row mt-4 gap-5">
        <a href="https://www.instagram.com/casalitech/" target="_blank">
          <FaInstagram className="icon transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-125 hover:bg-black-500 duration-300 " />
        </a>

        <a href="https://www.linkedin.com/in/jaquelinecasali/" target="_blank">
          <FaLinkedin className="icon transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-125 hover:bg-black-500 duration-300 " />
        </a>
        <a href="https://github.com/JacquelineCasali" target="_blank">
          <FaGithub className="icon transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-125 hover:bg-black-500 duration-300" />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5571999735079&amp;text=Olá"
          target="_blank"
        >
          <FaWhatsapp className="icon transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-125 hover:bg-black-500 duration-300" />
        </a>
      </div>
      </div>
      </div>
      <a
          href="https://api.whatsapp.com/send?phone=5571999735079&amp;text=Olá"
          target="_blank"
          className="fixed bottom-2 right-6 w-12 rounded-full hover:-translate-y-2 bg-gradient-to-t hover:scale-100 hover:bg-black-100 duration-300"
        >
          <FaWhatsapp className="icon transition ease-in-out delay-150  h-12 w-12 text-green-700   " />
        </a>
      <p className="text-center p-4 font-semibold text-green-800">
        &copy; Portfólio 2025
      </p>
    </footer>
  );
}
