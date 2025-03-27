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
                João da Silva, 22 anos, deu início a um programa de reeducação alimentar com foco em saúde, bem-estar e desempenho físico. Sua motivação é transformar sua qualidade de vida por meio de uma alimentação equilibrada, da prática regular de atividades físicas e do acompanhamento nutricional contínuo. Ao longo do processo, João tem buscado mais energia, disposição e consciência sobre escolhas alimentares saudáveis.
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
                O acompanhamento nutricional é conduzido por Renato Portaluppi CRN-3 85002, nutricionista especializado em nutrição clínica e esportiva, com ampla experiência na criação de estratégias alimentares personalizadas. Com abordagem empática, atualizada e baseada em evidências científicas, Renato orienta cada paciente com foco em resultados sustentáveis, promovendo saúde, desempenho e autonomia alimentar ao longo da jornada.
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
                    <p>Início do acompanhamento nutricional, introdução de novos hábitos alimentares e fase de adaptação.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker">
                    <Calendar size={16} />
                  </div>
                  <div className="timeline-content">
                    <h4>Mês 2</h4>
                    <p>Maior consumo de alimentos in natura, redução de industrializados e melhora na saciedade diária.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker">
                    <Calendar size={16} />
                  </div>
                  <div className="timeline-content">
                    <h4>Mês 3</h4>
                    <p>Ganhos significativos em disposição física, evolução nos treinos e controle de peso corporal.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker">
                    <Calendar size={16} />
                  </div>
                  <div className="timeline-content">
                    <h4>Mês 4</h4>
                    <p>Estabilização dos resultados, manutenção da rotina saudável e autonomia nas escolhas alimentares.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <footer className="sobre-footer">
          <p>© 2025 NutriTrack - Todos os direitos reservados</p>
        </footer>
      </div>
    </div>
  )
}

export default Sobre
