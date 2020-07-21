import React from "react";
import "./styles.css";
import GeneralTemplate from "../../components/templates/GeneralTemplate";
import MainForm from "../../components/molecules/MainForm";
import Contact from '../../components/molecules/Contact';

const Participe = ({}) => {
  return (
    <GeneralTemplate>
        <h3>Quer oferecer um abraço?</h3>
        <h5>Tem um projeto e quer fazer parte da nossa rede? Preencha o formulário abaixo!</h5>
      <MainForm 
      formLabel1='Seu projeto:'
      formLabel2='E-mail:'
      formLabel3='Conte-nos um pouco sobre o projeto:'
      CheckBoxText='Quero receber novidades do Guia dos Abraços por e-mail'
      buttonText='Enviar'
      />
      <Contact
      contactMsg='Dúvidas ou sugestões? Escreva pra gente!'
    //   mailIcon={}
      contactMail='guiadosabracos@gmail.com'
    //   phoneIcon={}
      contactPhone='11 987009800'
       />
    </GeneralTemplate>
  );
};

export default Participe;
