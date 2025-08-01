"use client"

import { Outlet, Link, useLocation } from "react-router-dom"
import { useState } from "react"

function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: "/", label: "🏠 Home", icon: "🏠" },
    { path: "/students", label: "👨‍🎓 Students", icon: "👨‍🎓" },
    { path: "/quotes", label: "💭 Quotes", icon: "💭" },
    { path: "/todo", label: "📝 Todo", icon: "📝" },
    { path: "/counter", label: "🔢 Counter", icon: "🔢" },
    { path: "/form", label: "📋 Form", icon: "📋" },
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(10px)",
      }}
    >
      {/* Navigation Header */}
      <nav
        style={{
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(20px)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 1rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "70px",
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2rem)",
              fontWeight: "bold",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            ⚛️ My React App
          </Link>

          {/* Desktop Navigation */}
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              alignItems: "center",
            }}
          >
            {/* Desktop Menu */}
            <div
              style={{
                display: window.innerWidth > 768 ? "flex" : "none",
                gap: "0.5rem",
                alignItems: "center",
              }}
            >
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  style={{
                    padding: "0.75rem 1rem",
                    borderRadius: "12px",
                    textDecoration: "none",
                    color: location.pathname === item.path ? "#fff" : "#4a5568",
                    background:
                      location.pathname === item.path
                        ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                        : "transparent",
                    fontWeight: location.pathname === item.path ? "bold" : "normal",
                    fontSize: "clamp(0.875rem, 2vw, 1rem)",
                    transition: "all 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => {
                    if (location.pathname !== item.path) {
                      e.target.style.background = "rgba(102, 126, 234, 0.1)"
                      e.target.style.transform = "translateY(-2px)"
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (location.pathname !== item.path) {
                      e.target.style.background = "transparent"
                      e.target.style.transform = "translateY(0)"
                    }
                  }}
                >
                  <span style={{ fontSize: "1.2em" }}>{item.icon}</span>
                  <span style={{ display: window.innerWidth > 1024 ? "inline" : "none" }}>
                    {item.label.split(" ").slice(1).join(" ")}
                  </span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              style={{
                display: window.innerWidth <= 768 ? "flex" : "none",
                alignItems: "center",
                justifyContent: "center",
                width: "44px",
                height: "44px",
                borderRadius: "12px",
                border: "none",
                background: "rgba(102, 126, 234, 0.1)",
                color: "#667eea",
                fontSize: "1.5rem",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              {isMobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            style={{
              display: window.innerWidth <= 768 ? "block" : "none",
              background: "rgba(255, 255, 255, 0.98)",
              backdropFilter: "blur(20px)",
              borderTop: "1px solid rgba(0, 0, 0, 0.1)",
              padding: "1rem",
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div
              style={{
                display: "grid",
                gap: "0.5rem",
                maxWidth: "400px",
                margin: "0 auto",
              }}
            >
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    padding: "1rem",
                    borderRadius: "12px",
                    textDecoration: "none",
                    color: location.pathname === item.path ? "#fff" : "#4a5568",
                    background:
                      location.pathname === item.path
                        ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                        : "rgba(102, 126, 234, 0.05)",
                    fontWeight: location.pathname === item.path ? "bold" : "normal",
                    fontSize: "1rem",
                    transition: "all 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <span style={{ fontSize: "1.5em" }}>{item.icon}</span>
                  <span>{item.label.split(" ").slice(1).join(" ")}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main
        style={{
          flex: 1,
          padding: "clamp(1rem, 4vw, 2rem)",
          maxWidth: "1400px",
          margin: "0 auto",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            background: "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(20px)",
            borderRadius: "24px",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            minHeight: "calc(100vh - 140px)",
            overflow: "hidden",
          }}
        >
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer
        style={{
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(255, 255, 255, 0.2)",
          padding: "1.5rem",
          textAlign: "center",
          color: "#6b7280",
          fontSize: "clamp(0.875rem, 2vw, 1rem)",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "flex",
            flexDirection: window.innerWidth > 768 ? "row" : "column",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <p style={{ margin: 0 }}>© 2024 My React App. Built with ❤️ and React</p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <span>🚀 Responsive Design</span>
            <span>⚡ Fast Performance</span>
            <span>🎨 Modern UI</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
