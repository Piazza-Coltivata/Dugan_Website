// App.jsx
// Strong Guys's LLC - Multi-page React site
// Using inline styles — no Tailwind dependency
// Default export is App.

import React, { useState, useEffect, createContext, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useSearchParams } from "react-router-dom";

// Admin context
const AdminContext = createContext(false);
function useAdmin() {
  return useContext(AdminContext);
}

// --- Dark mode detection hook ---
function useDarkMode() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => setIsDark(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return isDark;
}

// --- Hook: Track mobile viewport for responsive behavior ---
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => {
    return typeof window !== "undefined" && window.innerWidth < 768;
  });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}



function Header() {
  return (
    <header
      style={{
        backgroundColor: "black",
        color: "white",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "1.5rem 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            textDecoration: "none",
            color: "white",
          }}
        >
          <div
            style={{
              width: "3rem",
              height: "3rem",
              borderRadius: "9999px",
              backgroundColor: "#dc2626",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              fontSize: "1.25rem",
            }}
          >
            SG
          </div>
          <div>
            <div style={{ fontWeight: "bold", fontSize: "1.125rem" }}>Strong Guys's LLC</div>
            <div style={{ fontSize: "0.75rem", color: "#d1d5db" }}>MOVING SUCKS! — We make it easier.</div>
            <div style={{ fontSize: "0.75rem", color: "#f51616" }}>ODOT HHG Certificate No. 016957</div>
          </div>
        </Link>

        <nav
          style={{
            display: "none",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Link to="/services" style={{ textDecoration: "none", color: "white", cursor: "pointer" }}>
            Services
          </Link>
          <Link to="/about" style={{ textDecoration: "none", color: "white", cursor: "pointer" }}>
            About
          </Link>
          <Link to="/contact" style={{ textDecoration: "none", color: "white", cursor: "pointer" }}>
            Contact
          </Link>
          <a
            href="tel:5412648502"
            style={{
              marginLeft: "1rem",
              backgroundColor: "#dc2626",
              color: "white",
              padding: "0.5rem 1rem",
              borderRadius: "0.25rem",
              fontWeight: "600",
              textDecoration: "none",
            }}
          >
            Call Now
          </a>
        </nav>

        <div style={{ display: "block" }}>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ position: "relative" }}>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          backgroundColor: "#dc2626",
          color: "white",
          padding: "0.5rem",
          borderRadius: "0.25rem",
          border: "none",
          cursor: "pointer",
        }}
      >
        Menu
      </button>
      {open && (
        <div
          style={{
            position: "absolute",
            right: 0,
            marginTop: "0.5rem",
            backgroundColor: "white",
            color: "black",
            borderRadius: "0.25rem",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
            padding: "1rem",
            width: "10rem",
            zIndex: 10,
          }}
        >
          <Link
            to="/services"
            style={{
              display: "block",
              paddingTop: "0.25rem",
              paddingBottom: "0.25rem",
              textDecoration: "none",
              color: "black",
            }}
            onClick={() => setOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/about"
            style={{
              display: "block",
              paddingTop: "0.25rem",
              paddingBottom: "0.25rem",
              textDecoration: "none",
              color: "black",
            }}
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            style={{
              display: "block",
              paddingTop: "0.25rem",
              paddingBottom: "0.25rem",
              textDecoration: "none",
              color: "black",
            }}
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
          <a
            href="tel:5412648502"
            style={{
              display: "block",
              paddingTop: "0.25rem",
              paddingBottom: "0.25rem",
              fontWeight: "600",
            }}
          >
            Call Now
          </a>
        </div>
      )}
    </div>
  );
}

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#111827",
        color: "#d1d5db",
        marginTop: "3rem",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "2rem 1.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        <div>
          <div style={{ fontWeight: "bold" }}>Strong Guys's LLC</div>
          <div style={{ fontSize: "0.875rem" }}>Based in Newport, OR — Serving all 50 states and deliveries to Canada</div>
          <div style={{ marginTop: "0.5rem" }}>
            Phone:{" "}
            <a href="tel:5412648502" style={{ color: "#ef4444", textDecoration: "none" }}>
              541-264-8502
            </a>
          </div>
          <div>
            Email:{" "}
            <a href="mailto:strongguysmoversschedule@gmail.com" style={{ color: "#ef4444", textDecoration: "none" }}>
              strongguysmoversschedule@gmail.com
            </a>
          </div>
        </div>
        <div style={{ fontSize: "0.875rem" }}>
          © {new Date().getFullYear()} Strong Guys's LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function HomePage() {
  const isAdmin = useAdmin();
  const isDark = useDarkMode();
  const isMobile = useIsMobile();
  
  const textColor = isDark ? "#e5e7eb" : "#374151";
  const cardBg = isDark ? "#1f2937" : "white";
  const cardBorder = isDark ? "#374151" : "#d1d5db";

  return (
    <main>
      <section style={{ 
        color: "white",
        position: "relative",
      }}>
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: "url('/newport-oregon-map.png')",
            backgroundSize: "99%",
            backgroundPosition: "-100% -80%",
            backgroundAttachment: isMobile ? "scroll" : "fixed",
            filter: "saturate(0) brightness(1.15) contrast(0.9)",
            zIndex: -1,
          }}
        />
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "5rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            position: "relative",
            zIndex: 2
          }}
        >
          <div style={{ flex: 1, backgroundColor: "rgba(0, 0, 0, 0.9)", padding: "clamp(1.5rem, 5vw, 3rem)", borderRadius: "0.75rem", maxWidth: "600px" }}>
            <h1 style={{ fontSize: "clamp(2rem, 7vw, 3rem)", fontWeight: "900", margin: 0, color: "#ef4444", textShadow: "3px 3px 6px rgba(0,0,0,0.8)", letterSpacing: "-0.02em" }}>MOVING SUCKS!</h1>
            <p style={{ marginTop: "1.5rem", fontSize: "clamp(1rem, 3vw, 1.125rem)", color: "white", lineHeight: "1.6" }}>
              Let <span style={{ fontWeight: "700", color: "#ef4444" }}>Strong Guys's LLC</span> handle the heavy lifting. Reliable movers serving all 50 states and deliveries to Canada.
            </p>
            <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link
                to="/contact"
                style={{
                  backgroundColor: "#dc2626",
                  color: "white",
                  padding: "clamp(0.75rem, 2vw, 1rem) clamp(1.25rem, 4vw, 2rem)",
                  borderRadius: "0.5rem",
                  fontWeight: "700",
                  fontSize: "clamp(1rem, 2.5vw, 1.125rem)",
                  textDecoration: "none",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
                }}
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:5412648502"
                style={{
                  backgroundColor: "white",
                  color: "#dc2626",
                  padding: "clamp(0.75rem, 2vw, 1rem) clamp(1.25rem, 4vw, 2rem)",
                  borderRadius: "0.5rem",
                  fontWeight: "700",
                  fontSize: "clamp(1rem, 2.5vw, 1.125rem)",
                  textDecoration: "none",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
                }}
              >
                Call Now
              </a>
            </div>
            <ul style={{ marginTop: "2rem", fontSize: "clamp(0.875rem, 2.5vw, 1rem)", color: "white", listStyle: "none", padding: 0, lineHeight: "2" }}>
              <li><span style={{ color: "#ef4444", fontWeight: "700", fontSize: "clamp(1rem, 3vw, 1.25rem)", marginRight: "0.5rem" }}>✓</span> Residential & commercial moves</li>
              <li><span style={{ color: "#ef4444", fontWeight: "700", fontSize: "clamp(1rem, 3vw, 1.25rem)", marginRight: "0.5rem" }}>✓</span> Piano moving, office relocations, delivery</li>
              <li><span style={{ color: "#ef4444", fontWeight: "700", fontSize: "clamp(1rem, 3vw, 1.25rem)", marginRight: "0.5rem" }}>✓</span> Packing, assembly, cleanouts & storage</li>
            </ul>
            <div style={{ marginTop: "3rem", display: "flex", flexDirection: "row", gap: "1rem", justifyContent: "flex-start", flexWrap: "wrap" }}>
              <Link
                to="/services"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.5rem",
                  backgroundColor: "#dc2626",
                  color: "white",
                  padding: "1.25rem 1.75rem",
                  borderRadius: "0.5rem",
                  textDecoration: "none",
                  fontWeight: "700",
                  fontSize: "1rem",
                  border: "3px solid #dc2626",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#b91c1c";
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow = "0 6px 8px rgba(0,0,0,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#dc2626";
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 4px 6px rgba(0,0,0,0.3)";
                }}
              >
                <span style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)" }}>📋</span>
                Services
              </Link>
              <Link
                to="/about"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.5rem",
                  backgroundColor: "#dc2626",
                  color: "white",
                  padding: "clamp(0.75rem, 2vw, 1.25rem) clamp(1rem, 3vw, 1.75rem)",
                  borderRadius: "0.5rem",
                  textDecoration: "none",
                  fontWeight: "700",
                  fontSize: "clamp(0.875rem, 2vw, 1rem)",
                  border: "3px solid #dc2626",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#b91c1c";
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow = "0 6px 8px rgba(0,0,0,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#dc2626";
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 4px 6px rgba(0,0,0,0.3)";
                }}
              >
                <span style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)" }}>👥</span>
                About
              </Link>
              <Link
                to="/contact"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.5rem",
                  backgroundColor: "#dc2626",
                  color: "white",
                  padding: "clamp(0.75rem, 2vw, 1.25rem) clamp(1rem, 3vw, 1.75rem)",
                  borderRadius: "0.5rem",
                  textDecoration: "none",
                  fontWeight: "700",
                  fontSize: "clamp(0.875rem, 2vw, 1rem)",
                  border: "3px solid #dc2626",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#b91c1c";
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow = "0 6px 8px rgba(0,0,0,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#dc2626";
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 4px 6px rgba(0,0,0,0.3)";
                }}
              >
                <span style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)" }}>📧</span>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "3rem 1.5rem",
        }}
      >
        <h2 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "0.5rem", color: "black" }}>What we do</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
            marginTop: "1.5rem",
          }}
        >
          <div style={{ padding: "1rem", border: `1px solid ${cardBorder}`, borderRadius: "0.5rem", backgroundColor: cardBg }}>
            <img
              src="https://media.istockphoto.com/id/1129168509/photo/happy-woman-near-cardboard-box-showing-moving-checklist-on-blue.jpg?s=612x612&w=0&k=20&c=X1Csjlj_BpGd2d58FBDAc-GOVpYj9Uf36bBgY5FemAk="
              alt="Packing"
              style={{ width: "100%", height: "10rem", objectFit: "cover", borderRadius: "0.25rem" }}
            />
            <h3 style={{ fontWeight: "bold", marginTop: "0.75rem", marginBottom: 0 }}>Packing & Unpacking</h3>
            <p style={{ fontSize: "0.875rem", marginTop: "0.5rem" }}>Careful, full-service packing so your items arrive safe and sound.</p>
          </div>

          <div style={{ padding: "1rem", border: `1px solid ${cardBorder}`, borderRadius: "0.5rem", backgroundColor: cardBg }}>
            <img
              src="https://t3.ftcdn.net/jpg/00/21/82/20/240_F_21822073_ipzVHebdTdKxoM15wyHT2tITLEPYxTLV.jpg"
              alt="Truck"
              style={{ width: "100%", height: "10rem", objectFit: "cover", borderRadius: "0.25rem" }}
            />
            <h3 style={{ fontWeight: "bold", marginTop: "0.75rem", marginBottom: 0 }}>Local & Long-Distance</h3>
            <p style={{ fontSize: "0.875rem", marginTop: "0.5rem" }}>From across town to across the state — we've got the muscle.</p>
          </div>

          <div style={{ padding: "1rem", border: `1px solid ${cardBorder}`, borderRadius: "0.5rem", backgroundColor: cardBg }}>
            <img
              src="https://t3.ftcdn.net/jpg/15/67/05/86/240_F_1567058641_kJtshEnb7BxWzOL8U2gF7OBwxXNETotN.jpg"
              alt="Piano moving"
              style={{ width: "100%", height: "10rem", objectFit: "cover", borderRadius: "0.25rem" }}
            />
            <h3 style={{ fontWeight: "bold", marginTop: "0.75rem", marginBottom: 0 }}>Piano & Specialty Moving</h3>
            <p style={{ fontSize: "0.875rem", marginTop: "0.5rem" }}>Specialty equipment and experienced movers for delicate, heavy items.</p>
          </div>

          <div style={{ padding: "1rem", border: `1px solid ${cardBorder}`, borderRadius: "0.5rem", backgroundColor: cardBg }}>
            <img
              src="https://media.istockphoto.com/id/174746107/photo/boat-storage-racks.jpg?s=612x612&w=0&k=20&c=NdZEKZhRQXqfq8ESCn2Vl2ys7OkEBLqaD7J8BpJPHlE="
              alt="Secure Storage"
              style={{ width: "100%", height: "10rem", objectFit: "cover", borderRadius: "0.25rem" }}
            />
            <h3 style={{ fontWeight: "bold", marginTop: "0.75rem", marginBottom: 0 }}>Secure Storage</h3>
            <p style={{ fontSize: "0.875rem", marginTop: "0.5rem" }}>Short- and long-term secure storage for belongings and vehicles kept safe and protected.</p>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#1f2937", padding: "3rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "white" }}>What customers say</h2>
          <div
            style={{
              marginTop: "1rem",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "1rem",
            }}
          >
            <blockquote style={{ padding: "1rem", border: "1px solid #374151", borderRadius: "0.25rem", margin: 0, backgroundColor: "#111827", color: "#e5e7eb" }}>
              We have used Dugan and his team several times to move safes for our company. They're always on time and professional. 
              WAY better than the company we were using previously. Whenever we need something moved, this is who we call !
              - J. Day
            </blockquote>
            <blockquote style={{ padding: "1rem", border: "1px solid #374151", borderRadius: "0.25rem", margin: 0, backgroundColor: "#111827", color: "#e5e7eb" }}>
              Dougan is an amazing manager. His crew is great. I can't say enough how great this company is. 
              They show up on time and they get things done. Thank you guys. Much love from Dan and Andrea.
              - Andrea K. 
            </blockquote>
            <blockquote style={{ padding: "1rem", border: "1px solid #374151", borderRadius: "0.25rem", margin: 0, backgroundColor: "#111827", color: "#e5e7eb" }}>
              Excellent work, courteous and quick. Very reasonable price. They did a better job, worked faster, and charged me less than half of what the Portland crew did. 
              I couldn't recommend them more highly. I am extremely happy with their work.
              - P. Bourgeois
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}

function ServicesPage() {
  const isDark = useDarkMode();
  const isMobile = useIsMobile();
  const textColor = isDark ? "#e5e7eb" : "#374151";
  const cardBg = isDark ? "#1f2937" : "rgba(0, 0, 0, 0.75)";
  const cardBorder = isDark ? "#374151" : "#dc2626";

  const services = [
    { title: "Residential & Commercial Moving", desc: "Local and long-distance moving with trained crews.", img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=60" },
    { title: "Full-Service Packing & Unpacking", desc: "Materials, careful packing, and setup at destination.", img: "https://media.istockphoto.com/id/1047207878/photo/moving-company-worker-packing-cardboard-boxes-quality-delivery-services.jpg?s=612x612&w=0&k=20&c=KuTH2CS9yJAqv6Rch87KCPOJHfFUDrjyClyFQKNSwVk=" },
    { title: "Furniture Assembly & Setup", desc: "We assemble and place furniture where you want it.", img: "https://media.istockphoto.com/id/1310982742/photo/bewildered-man-assembling-new-wooden-furniture-at-home-man-reading-instructions-and.jpg?s=612x612&w=0&k=20&c=S5Gn1VbJ9tkSpqYe0r2250cdrVsKPfuceVq8dzkMiZw=" },
    { title: "Junk Removal & Cleanouts", desc: "Cleanouts, donation sorting, and debris removal.", img: "https://media.istockphoto.com/id/1178135401/photo/recycling-container-trash-dumpsters-being-full-with-garbage.jpg?s=612x612&w=0&k=20&c=ThbIsqwUgaqXUxWt5t41bscjX0L9iCB20fn_3_YmTWc=" },
    { title: "Secure Storage", desc: "Short- and long-term storage options available.", img: "https://media.istockphoto.com/id/160321684/photo/locked-self-storage-unit.jpg?s=612x612&w=0&k=20&c=SdqjNOBVpq-cUpWxYaqefr0Zu-1uI21Cmxw1L3U2Gbk=" },
    { title: "Piano Moving", desc: "Specialized equipment for pianos and other fragile heavy items.", img: "https://media.istockphoto.com/id/1027229090/photo/piano-transportation-blue-sky.jpg?s=612x612&w=0&k=20&c=X01m1rFQqn3pDvir9aNDkXsrCjEfpKvEdL59-wmD0vA=" },
    { title: "Office Relocations", desc: "Minimize downtime with planned commercial moves.", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=60" },
    { title: "Delivery Service", desc: "Local delivery for furniture, appliances, and more.", img: "https://media.istockphoto.com/id/1221101939/photo/delivery-concept-asian-man-hand-accepting-a-delivery-boxes-from-professional-deliveryman-at.jpg?s=612x612&w=0&k=20&c=jvZ_phbXmzOrCCZiGn8ZQO99a5skBJlclbujI5jGam8=" },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url('/newport-oregon-map.png')`,
          backgroundSize: isMobile ? "cover" : "95%",
          backgroundAttachment: isMobile ? "scroll" : "fixed",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          filter: "saturate(0) brightness(1.25) contrast(0.8)",
          zIndex: -1,
        }}
      />
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "3rem 1.5rem", position: "relative" }}
>
      <h1 style={{ fontSize: "clamp(1.75rem, 5vw, 2.5rem)", fontWeight: "bold", marginBottom: "0.5rem", color: "black" }}>Services</h1>
      <p style={{ marginTop: "0.5rem", color: "black", fontSize: "clamp(1rem, 2.5vw, 1.125rem)" }}>We offer a wide range of moving and related services. Below are the details.</p>

      <div
        style={{
          marginTop: "1.5rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))",
          gap: "1.5rem",
          justifyItems: "center",
        }}
      >
        {services.map((s) => (
          <div key={s.title} style={{ border: `2px solid ${cardBorder}`, borderRadius: "0.5rem", padding: "clamp(1rem, 3vw, 1.5rem)", display: "flex", gap: "1rem", backgroundColor: cardBg, boxShadow: "0 4px 6px rgba(0,0,0,0.3)" }}>
            <img
              src={s.img}
              alt={s.title}
              style={{ width: "clamp(7rem, 20vw, 9rem)", height: "clamp(5rem, 15vw, 6rem)", objectFit: "cover", borderRadius: "0.25rem" }}
            />
            <div>
              <h3 style={{ fontWeight: "bold", marginTop: 0, color: "white", fontSize: "clamp(1rem, 2.5vw, 1.125rem)" }}>{s.title}</h3>
              <p style={{ fontSize: "clamp(0.8125rem, 2vw, 0.875rem)", marginTop: "0.5rem", marginBottom: 0, color: "#e5e7eb" }}>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "3rem", padding: "clamp(1.5rem, 4vw, 2rem)", backgroundColor: "rgba(0, 0, 0, 0.9)", borderRadius: "0.75rem", border: `3px solid #dc2626`, boxShadow: "0 4px 6px rgba(0,0,0,0.3)" }}>
        <h2 style={{ fontWeight: "bold", marginTop: 0, color: "#ef4444", fontSize: "clamp(1.5rem, 4vw, 1.875rem)" }}>Request a tailored quote</h2>
        <p style={{ fontSize: "clamp(0.875rem, 2.5vw, 1rem)", marginTop: "0.75rem", marginBottom: "1.5rem", color: "white" }}>Tell us about your job and we'll provide a fast, fair estimate.</p>
        <Link
          to="/contact"
          style={{
            display: "inline-block",
            marginTop: "0.75rem",
            backgroundColor: "#dc2626",
            color: "white",
            padding: "0.5rem 1rem",
            borderRadius: "0.25rem",
            textDecoration: "none",
          }}
        >
          Request Quote
        </Link>
      </div>
      </div>
    </main>
  );
}

function AboutPage() {
  const isAdmin = useAdmin();
  const isDark = useDarkMode();
  const textColor = isDark ? "#e5e7eb" : "#374151";
  const aboutImg = "https://images.unsplash.com/photo-1520975913258-5b5b5b5b5b5b?auto=format&fit=crop&w=1400&q=60";
  return (
    <main
      style={{
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "3rem 1.5rem",
      }}
    >
      <h1 style={{ fontSize: "1.875rem", fontWeight: "bold" }}>About Strong Guys's LLC</h1>
      <div
        style={{
          marginTop: "1.5rem",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "2rem",
          alignItems: "start",
        }}
      >
        <div>
          <p style={{ color: textColor }}>
            Based in Newport, Oregon, Strong Guys's LLC exists to take the pain out of moving. Our team combines experience, care, and the right equipment to move your belongings safely and on time. We serve all 50 states and provide deliveries to Canada.
          </p>

          <h3 style={{ marginTop: "1rem", fontWeight: "bold" }}>Why choose us</h3>
          <ul style={{ marginTop: "0.5rem", listStylePosition: "inside", color: textColor }}>
            <li>Local knowledge of Oregon routes & regulations</li>
            <li>Trained, background-checked movers</li>
            <li>Transparent pricing and on-time service</li>
          </ul>

          <h3 style={{ marginTop: "1rem", fontWeight: "bold" }}>Our Promise</h3>
          <p style={{ color: textColor }}>We treat your items like they're our own — careful handling, padded protection, and clear communication from pickup to delivery.</p>
        </div>

        <div>
          <img
            src={aboutImg}
            alt="Our team"
            style={{
              width: "100%",
              height: "14rem",
              objectFit: "cover",
              borderRadius: "0.5rem",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          />
        </div>
      </div>
    </main>
  );
}

function ContactPage() {
  const navigate = useNavigate();
  const isDark = useDarkMode();
  const isMobile = useIsMobile();
  const textColor = isDark ? "#e5e7eb" : "#374151";
  const inputBg = isDark ? "#1f2937" : "white";
  const inputBorder = isDark ? "#374151" : "#d1d5db";
  const inputText = isDark ? "#e5e7eb" : "inherit";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [botField, setBotField] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  function encodeFormData(data) {
    return Object.keys(data)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join("&");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (botField) return; // honeypot triggered — silently drop
    setStatus("sending");
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeFormData({ "form-name": "contact", name, email, phone, message }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
      setTimeout(() => navigate("/"), 1800);
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url('/newport-oregon-map.png')`,
          backgroundSize: isMobile ? "cover" : "95%",
          backgroundAttachment: isMobile ? "scroll" : "fixed",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          filter: "saturate(0) brightness(1.25) contrast(0.8)",
          zIndex: -1,
        }}
      />
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "3rem 1.5rem",
          position: "relative",
        }}
      >
      <h1 style={{ fontSize: "1.875rem", fontWeight: "bold", marginBottom: "0.5rem", color: "black" }}>Contact</h1>
      <p style={{ marginTop: "0.5rem", color: "black" }}>
        Call us at{" "}
        <a href="tel:5412648502" style={{ color: "#dc2626", fontWeight: "600", textDecoration: "none" }}>
          541-264-8502
        </a>{" "}
        or send a message below.
      </p>

      <div
        style={{
          marginTop: "1.5rem",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "1.5rem",
        }}
      >
        <form name="contact" onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <input
            type="text"
            name="bot-field"
            value={botField}
            onChange={(e) => setBotField(e.target.value)}
            style={{ position: "absolute", left: "-9999px" }}
            tabIndex="-1"
            autoComplete="off"
            aria-hidden="true"
          />
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            style={{
              width: "100%",
              border: `1px solid ${inputBorder}`,
              borderRadius: "0.25rem",
              padding: "0.5rem 0.75rem",
              fontSize: "1rem",
              fontFamily: "inherit",
              boxSizing: "border-box",
              backgroundColor: inputBg,
              color: inputText,
            }}
          />
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            style={{
              width: "100%",
              border: `1px solid ${inputBorder}`,
              borderRadius: "0.25rem",
              padding: "0.5rem 0.75rem",
              fontSize: "1rem",
              fontFamily: "inherit",
              boxSizing: "border-box",
              backgroundColor: inputBg,
              color: inputText,
            }}
          />
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone (optional)"
            style={{
              width: "100%",
              border: `1px solid ${inputBorder}`,
              borderRadius: "0.25rem",
              padding: "0.5rem 0.75rem",
              fontSize: "1rem",
              fontFamily: "inherit",
              boxSizing: "border-box",
              backgroundColor: inputBg,
              color: inputText,
            }}
          />
          <textarea
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us about your move"
            style={{
              width: "100%",
              border: `1px solid ${inputBorder}`,
              borderRadius: "0.25rem",
              padding: "0.5rem 0.75rem",
              fontSize: "1rem",
              fontFamily: "inherit",
              height: "8rem",
              resize: "none",
              boxSizing: "border-box",
              backgroundColor: inputBg,
              color: inputText,
            }}
          />
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", flexWrap: "wrap" }}>
            <button
              type="submit"
              disabled={status === "sending"}
              style={{
                backgroundColor: "#dc2626",
                color: "white",
                padding: "0.5rem 1rem",
                borderRadius: "0.25rem",
                border: "none",
                cursor: status === "sending" ? "not-allowed" : "pointer",
                fontWeight: "600",
                opacity: status === "sending" ? 0.7 : 1,
              }}
            >
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>
            <a
              href="tel:5412648502"
              style={{
                backgroundColor: "#e5e7eb",
                color: "black",
                padding: "0.5rem 1rem",
                borderRadius: "0.25rem",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Call Now
            </a>
            {status === "success" && (
              <span style={{ color: "#16a34a", fontWeight: "600" }}>Message sent! We'll be in touch soon.</span>
            )}
            {status === "error" && (
              <span style={{ color: "#dc2626", fontWeight: "600" }}>
                Something went wrong. Please call us instead.
              </span>
            )}
          </div>
        </form>

        <div style={{ padding: "1rem", backgroundColor: isDark ? "#1f2937" : "#f9fafb", borderRadius: "0.25rem", border: `1px solid ${inputBorder}` }}>
          <h3 style={{ fontWeight: "bold", marginTop: 0, color: textColor }}>Service Area</h3>
          <p style={{ fontSize: "0.875rem", marginTop: "0.25rem" }}>Based in Newport, OR — Serving all 50 states and deliveries to Canada.</p>
          <div style={{ marginTop: "1rem" }}>
            <strong>Phone:</strong>{" "}
            <a href="tel:5412648502" style={{ color: "#583f3fff", textDecoration: "none" }}>
              541-264-8502
            </a>
            <br />
            <strong>Email:</strong>{" "}
            <a href="mailto:strongguysmoversschedule@gmail.com" style={{ color: "#dc2626", textDecoration: "none" }}>
              strongguysmoversschedule@gmail.com
            </a>
          </div>

          <div style={{ marginTop: "1rem" }}>
            <h4 style={{ fontWeight: "600", marginTop: 0, marginBottom: "0.5rem" }}>Quick tips</h4>
            <ul style={{ fontSize: "0.875rem", listStylePosition: "inside", margin: 0 }}>
              <li>Mention "website" for a quick quote.</li>
              <li>Ask about piano & specialty moving when booking.</li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </main>
  );
}

function AppContent() {
  const [searchParams] = useSearchParams();
  const isAdmin = searchParams.get("admin") === "true";

  return (
    <AdminContext.Provider value={isAdmin}>
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>

        <Footer />
      </div>
    </AdminContext.Provider>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

