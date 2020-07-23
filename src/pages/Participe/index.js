import React from "react";
import "./styles.css";
import GeneralTemplate from "../../components/templates/GeneralTemplate";
import MainForm from "../../components/molecules/MainForm";
import Contact from "../../components/molecules/Contact";
import { IoMdHeartEmpty } from "react-icons/io";

const Participe = () => {
  return (
    <GeneralTemplate>
      <section className="participeContent--container">
        <div className="participeTitle-box">
          <span className="participeTitle-container">
            <div className="participeTitle-icon">
              <h3 className='participe-title'>Ofereça um abraço</h3>
              <IoMdHeartEmpty className="icon-heart" />
            </div>
            <h5 className="participeSubtitle">
              Tem um projeto e quer fazer parte da nossa rede? Preencha o
              formulário abaixo!
            </h5>
          </span>
        </div>
        <MainForm
          formLabel1="Seu projeto:"
          formLabel2="E-mail:"
          formLabel3="Conte-nos um pouco sobre o projeto:"
          formLabel4='Endereço:'
          CheckBoxText="Quero receber novidades do Guia dos Abraços por e-mail"
          buttonText="Enviar"
        />
        <Contact
          contactMsg="Dúvidas ou sugestões? Escreva pra gente!"
          contactMail="guiadosabracos@gmail.com"
          contactPhone="Mande um zap ;)"
        />
      </section>
    </GeneralTemplate>
  );
};

export default Participe;
