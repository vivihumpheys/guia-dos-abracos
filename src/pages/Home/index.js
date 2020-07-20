import React, { Component } from "react";
import "./styles.css";
import GeneralTemplate from "../../components/templates/GeneralTemplate";
import HomeContent from "../../components/organisms/HomeContent";
import data from "../../data.json";
import imgLogo from "../../assets/logo-guia-dos-abracos.png";
import Card from "../../components/molecules/Card";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      data: [],
      filters: ["Zona Norte", "Zona Sul", "Centro", "Zona Leste", "Zona Oeste", "Todos"],
      error: ''
    };
  }

  componentDidMount = async () => {
    const getData = await data;
    this.setState({ data: getData });
  };

  onChange = (e) => {
    const inputValue = e.target.value;
    // console.log (inputValue);
    this.setState({ inputValue });
  };

  onClick = () => {
      const {inputValue} = this.state;
      
  };

  handleFilters = () => {};

  render() {
    const { inputValue, data, filters } = this.state;
    return (
      <div>
        <GeneralTemplate
          navText1="Home"
          navText2="Sobre"
          navText3="Participe"
          imgLogo={imgLogo}
          footerText="Desenvolvido com React por Viviane Miranda | 2020"
        >
          <HomeContent
            value={inputValue}
            placeholder="Digite um bairro de São Paulo e encontre um projeto"
            type="text"
            onChange={this.onChange}
            // buttonImg={buttonImg}
            // onClick={this.onClick}
            // handleFilters={this.handleFilters}
            filters={filters}
          >
            {data.map((item, index) => {
              return (
                <Card
                  projectName={item.nome}
                  projectDescription={item.descricao}
                  projectAdress={item.endereco}
                  projectLink={item.link}
                  linkText="Acesse o link do projeto"
                />
              );
            })}
          </HomeContent>
        </GeneralTemplate>
      </div>
    );
  }
}

export default Home;
