



import "./Contact.css";

import Button from "../Button/Button";
export default function Contact() {
  
 
  return (
    <section className="contact-section" id="contato">
 
      <h2>Ready for your next project?</h2>
     <p>Sit elit feugiat turpis sed integer integer accumsan turpis.</p>
  
    <div className="contact-content">
     
  
      <form  className="contact-form">
 
      
       
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Digite Seu Email aqui"
              className="input"
            />
       
      
  
      
  
        <label htmlFor="messagem">Mensagem:</label>
        <textarea
          id="messagem"
          name="messagem"
          placeholder="Deixe sua mensagem aqui"
          required
          className="textarea"
        />
  
      

<div className="button">
<Button text="Request Demo" variant={"gray"} />
</div>
   
      
      </form>
    </div>
  </section>
  
  );
}
