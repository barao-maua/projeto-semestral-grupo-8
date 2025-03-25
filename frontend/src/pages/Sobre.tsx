
import type React from "react"
import NavBar from "../components/NavBar"
import { User, Award, TrendingUp, Calendar } from "lucide-react"
import "./Sobre.css"

const Sobre: React.FC = () => {
  return (
    <div className="sobre-page">
      <NavBar />
      <div className="conteudo-sobre">
        <header className="sobre-header">
          <h2 className="titulo-sobre">Sobre o Projeto</h2>
          <div className="linha-sobre"></div>
        </header>

        <div className="sobre-cards">
          <section className="sobre-card">
            <div className="card-icon">
              <User size={28} />
            </div>
            <div className="card-content">
              <h3>Informações do Paciente</h3>
              <p>
                João da Silva, 22 anos, iniciou seu tratamento visando adotar hábitos alimentares mais saudáveis. Ele
                busca melhorar sua qualidade de vida através de mudanças graduais na dieta e na prática regular de
                atividades físicas.
              </p>
            </div>
          </section>

          <section className="sobre-card">
            <div className="card-icon">
              <Award size={28} />
            </div>
            <div className="card-content">
              <h3>Nutricionista Responsável</h3>
              <p>
                A nutricionista responsável é a Dra. Maria Oliveira, especialista com 15 anos de experiência em nutrição
                clínica. Ela cria planos alimentares personalizados e acompanha de perto o progresso de cada paciente,
                sempre enfatizando a importância de uma alimentação balanceada e sustentável.
              </p>
            </div>
          </section>

          <section className="sobre-card">
            <div className="card-icon">
              <TrendingUp size={28} />
            </div>
            <div className="card-content">
              <h3>Histórico do Progresso</h3>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-marker">
                    <Calendar size={16} />
                  </div>
                  <div className="timeline-content">
                    <h4>Mês 1</h4>
                    <p>Início do tratamento e adaptação à nova dieta.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker">
                    <Calendar size={16} />
                  </div>
                  <div className="timeline-content">
                    <h4>Mês 2</h4>
                    <p>Aumento no consumo de vegetais e redução de alimentos processados.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker">
                    <Calendar size={16} />
                  </div>
                  <div className="timeline-content">
                    <h4>Mês 3</h4>
                    <p>Melhoria dos níveis de energia e controle de peso.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker">
                    <Calendar size={16} />
                  </div>
                  <div className="timeline-content">
                    <h4>Mês 4</h4>
                    <p>Consolidação de um estilo de vida saudável.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <footer className="sobre-footer">
          <p>© 2023 NutriApp - Todos os direitos reservados</p>
        </footer>
      </div>
    </div>
  )
}

export default Sobre
