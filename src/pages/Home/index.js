import React, { Component } from "react";
import "./styles.css";
import GeneralTemplate from "../../components/templates/GeneralTemplate";
import HomeContent from "../../components/organisms/HomeContent";
import data from "../../data.json";
import imgLogo from "../../assets/logo-guia-dos-abracos.png";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      data: [],
      filters: ["Zona Norte", "Zona Sul", "Centro", "Zona Leste", "Zona Oeste"],
    };
  }

  componentDidMount = async () => {
    const getData = await data;
    this.setState({ data: getData });
  };

  render() {
    return (
      <div>
        <GeneralTemplate
          navText1="Home"
          navText2="Sobre"
          navText3="Participe"
          imgLogo={imgLogo}
          footerText="> Desenvolvido por Viviane Miranda | 2020"
        >
          <HomeContent />
        </GeneralTemplate>
      </div>
    );
  }
}

export default Home;
