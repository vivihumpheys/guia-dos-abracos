import React from "react";
import "./styles.css";
import { RiHandHeartLine } from "react-icons/ri";

const SobreContent = () => {
  return (
    <section className="sobreContent-container">
      <span className="quote-box">
        <div className="sobre-quote">
          <h6>"Mundo excludente exige dose de rebeldia”</h6>
          <h7>Pe. Júio Lancellotti</h7>
        </div>
      </span>
      <section className="whole-text--container">
        <span className="headline-box">
          <div className="sobre-headline">
            <RiHandHeartLine className="sobre-icon" />
            <h3>Por que Guia dos Abraços?</h3>
          </div>
        </span>
        <p>(ou: Ficar na rua não é atrativo, Bia Dória)</p>
        <section className="text-content--box">
          <article className="text-content">
            <p>
              Segundo a plataforma de notícias Terra,
              <strong>
                "a crise causada pela pandemia tem empurrado para as ruas
                desempregados e migrantes.
              </strong>{" "}
              Um indicador desse crescimento está nas vagas de acolhimento da
              Prefeitura (julho, 2020). Ainda segundo o site,
              <strong>
                "depois da eclosão da pandemia, a quantidade de pessoas sem
                casa, ou com casa, mas sem comida, explodiu na cidade.
              </strong>{" "}
              E essa situação, visível nas ruas, é ainda ausente nas
              estatísticas oficiais(...)." O padre Julio Lancellotti, que
              oferece diariamente em sua paróquia na Mooca cafés da manhã
              solidários para pessoas em situação de rua, comentou que o número
              de pessoas que o procuram aumentou exponencialmente. Se antes ele
              atendia 150 pessoas, depois da pandemia, os números subiram para
              400, 500 pessoas por dia.
            </p>

            <p>
              Nesse cenário,{" "}
              <strong>
                a população que mora nas ruas - somada aos moradores de
                periferia e aos indígenas - é a que está mais vulnerável à
                infecção por coronavírus, por motivos óbvios de falta de
                higiene, alimentação e assistência médica.
              </strong>{" "}
              De acordo com o censo da prefeitura de São Paulo, somente na
              capital paulista, estima-se que o números de pessoas que vivem nas
              ruas é de cerca de 25 mil, porém entidades contestam que{" "}
              <strong>o número já ultrapasse os 30 mil.</strong> A falta de
              pessoas circulando nas ruas fez com que muitos dos indivíduos que
              dependiam de doações ficassem sem alimentos ou itens de higiene.
              Muitos dos que estão nessa situação, sequer tem acesso à água
              potável para lavar as mãos ou tomar banho, tornando a higiene
              preventiva contra o coronavírus quase impossível.
            </p>

            <p>
              Apesar de existirem algumas iniciativas do poder público para
              atenuar o problema, ainda é muito pouco. Como foi denunciado pelo
              Padre Júlio em suas redes sociais, os centro de acolhimento da
              prefeitura de São Paulo encontram-se em péssimo estado, as camas
              estão infestadas de insetos, os banheiros não possuem nenhum
              protocolo de higiene e a alta lotação dos abrigos torna os
              indivíduos ainda mais vulneráveis ao contágio por covid-19. Por
              tudo isso,{" "}
              <strong>
                iniciativas paralelas na sociedade são de extrema importância,
                pois vêm suprir uma demanda que o estado não cobre, e muitas
                vezes, não dá a devida atenção.
              </strong>
            </p>

            <p>
              O <strong>Guia dos Abraços</strong> foi pensado durante a pandemia
              de covid-19, que deixou muitas pessoas sem emprego, sem dinheiro e
              sem casa. Essa iniciativa{" "}
              <strong>
                reúne projetos e ações sociais que ajudam pessoas em situação de
                rua ou vulnerabilidade social
              </strong>
              . O guia é voltado para{" "}
              <strong>
                pessoas que podem e querem colaborar com essas causas, mas não
                sabem ainda onde encontrá-las. 
              </strong>
                Por isso, separamos os projetos por regiões localizadas na
              cidade de São Paulo. Dessa forma, você pode ajudar sem precisar ir
              muito longe do seu bairro. Unimos praticidade e solidariedade em
              um mesmo lugar. <strong>Faça parte da nossa rede e abrace uma causa!</strong>
            </p>
          </article>
        </section>
      </section>
    </section>
  );
};

export default SobreContent;
