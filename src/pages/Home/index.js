import React, { Component } from "react";
import "./styles.css";
import GeneralTemplate from "../../components/templates/GeneralTemplate";
import HomeContent from "../../components/organisms/HomeContent";
import data from "../../data.json";
import Card from "../../components/molecules/Card";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      data: [],
      filters: [
        "zona norte",
        "zona sul",
        "centro",
        "zona leste",
        "zona oeste",
        "todos",
      ],
      error: "",
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

  onClick = async () => {
    const { inputValue } = this.state;
    if (inputValue && data.length) {
      try {
        const result = await data.filter((item) =>
          item.endereco.toLowerCase().includes(inputValue.toLowerCase())
        );
        if (result.length === 0) {
          throw "Nenhum projeto encontrado nesse bairro";
        }
        this.setState({ inputValue: "", data: result, error: "" });
      } catch (error) {
        this.setState({ error, inputValue: "" });
      }
    } else {
      this.setState({ error: "Digite o nome do bairro" });
    }
  };

  handleFilters = (e) => {
    const value = e.target.id.toLowerCase();
    if (value === "todos") {
      this.setState({ data, error: "" });
      return;
    }
    const result = data.filter((item) => {
      return item.zona.toLowerCase().includes(value);
    });

    if (result.length === 0) {
      this.setState({
        data: [],
        error: "Não foram encontrados projetos nessa região",
      });
    } else {
      this.setState({ data: result, error: "" });
    }
  };

  render() {
    const { inputValue, data, filters, error } = this.state;
    return (
      <div>
        <GeneralTemplate>
          <HomeContent
            value={inputValue}
            placeholder="Digite um bairro ou região de São Paulo"
            type="text"
            onChange={this.onChange}
            // buttonImg={buttonImg}
            onClick={this.onClick}
            handleFilters={this.handleFilters}
            filters={filters}
          >
            <p>{error}</p>
            {data.map((item, index) => {
              return (
                <div key={`${index + 1}--card`} className='cardBox'>
                  <Card
                    projectName={item.nome}
                    projectDescription={item.descricao}
                    projectAdress={item.endereco}
                    projectLink={item.link}
                    linkText="ABRACE ESSA CAUSA"
                  />
                </div>
              );
            })}
          </HomeContent>
        </GeneralTemplate>
      </div>
    );
  }
}

export default Home;
