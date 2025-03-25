
"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { Utensils, Info, LogOut, Menu, X } from "lucide-react"
import "./NavBar.css"

const NavBar: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Função de logout: remove o token e redireciona para /login
  const handleLogout = () => {
    localStorage.removeItem("accessToken")
    navigate("/login")
  }

  // Detecta o scroll da página para aplicar efeitos na navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Fecha o menu mobile quando mudar de rota
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  // Verifica se o link está ativo
  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <nav className={`nav-bar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/refeicoes" className="logo-link">
            NutriTrack
          </Link>
        </div>

        {/* Menu para desktop */}
        <ul className="nav-list desktop-menu">
          <li className={`nav-item ${isActive("/refeicoes") ? "active" : ""}`}>
            <Link to="/refeicoes" className="nav-link">
              <Utensils size={18} className="nav-icon" />
              <span>Refeições</span>
            </Link>
          </li>
          <li className={`nav-item ${isActive("/sobre") ? "active" : ""}`}>
            <Link to="/sobre" className="nav-link">
              <Info size={18} className="nav-icon" />
              <span>Sobre</span>
            </Link>
          </li>
          <li className="nav-item">
            <button className="nav-button-logout" onClick={handleLogout}>
              <LogOut size={18} className="nav-icon" />
              <span>Sair</span>
            </button>
          </li>
        </ul>

        {/* Botão do menu mobile */}
        <button className="mobile-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menu para mobile */}
        <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
          <ul className="mobile-nav-list">
            <li className={`mobile-nav-item ${isActive("/refeicoes") ? "active" : ""}`}>
              <Link to="/refeicoes" className="mobile-nav-link">
                <Utensils size={20} className="nav-icon" />
                <span>Refeições</span>
              </Link>
            </li>
            <li className={`mobile-nav-item ${isActive("/sobre") ? "active" : ""}`}>
              <Link to="/sobre" className="mobile-nav-link">
                <Info size={20} className="nav-icon" />
                <span>Sobre</span>
              </Link>
            </li>
            <li className="mobile-nav-item">
              <button className="mobile-nav-button" onClick={handleLogout}>
                <LogOut size={20} className="nav-icon" />
                <span>Sair</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar

