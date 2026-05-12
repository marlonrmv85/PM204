import streamlit as st

st.set_page_config(
    page_title="Survival Guide – Programación Móvil",
    page_icon="📱",
    layout="centered",
)

# ── ESTADO GLOBAL ──────────────────────────────────────
sections = ["camara_reglas", "oraculo_notas", "skills", "linea_tiempo"]

for s in sections:
    if f"{s}_correct" not in st.session_state:
        st.session_state[f"{s}_correct"] = 0
    if f"{s}_checked" not in st.session_state:
        st.session_state[f"{s}_checked"] = False
    if f"{s}_unlocked" not in st.session_state:
        st.session_state[f"{s}_unlocked"] = (s == "camara_reglas")

# ── PREGUNTAS ──────────────────────────────────────────
QUESTIONS = {
    "camara_reglas": [
        {
            "q": "¿Cuántas faltas te mandan al final del parcial?",
            "opts": ["2 faltas", "3 faltas", "5 faltas", "1 falta"],
            "ans": "3 faltas",
        },
        {
            "q": "¿Qué calificación obtienes si plagias un trabajo?",
            "opts": ["5", "0", "Reposición", "NP"],
            "ans": "0",
        },
    ],
    "oraculo_notas": [
        {
            "q": "¿Cuántas entregas de Producto hay por parcial?",
            "opts": ["2 entregas", "3 entregas", "1 entrega", "Ninguna"],
            "ans": "1 entrega",
        },
        {
            "q": "¿Cuál es la calificación máxima en Classroom con retraso?",
            "opts": ["8", "7", "5", "6"],
            "ans": "5",
        },
    ],
    "skills": [
        {
            "q": "¿Para qué se permite el uso de LLMs en la materia?",
            "opts": ["Copiar exámenes", "Aprender e Investigar", "Reemplazar al profesor", "Entregar proyectos sin revisar"],
            "ans": "Aprender e Investigar",
        },
        {
            "q": "¿Qué tecnologías verás en los exámenes del semestre?",
            "opts": ["PHP y Laravel", "React, Python y SQLite", "Java y Android Studio", "Swift y Xcode"],
            "ans": "React, Python y SQLite",
        },
    ],
    "linea_tiempo": [
        {
            "q": "¿Cuándo es el primer examen del semestre?",
            "opts": ["06-07-26", "10-08-26", "01-06-26", "15-05-26"],
            "ans": "01-06-26",
        },
        {
            "q": "¿Cuántos exámenes hay en el semestre?",
            "opts": ["1", "4", "2", "3"],
            "ans": "3",
        },
    ],
}

# ── HELPERS ────────────────────────────────────────────
def render_quiz(sec_key):
    st.subheader("📝 Mini Quiz")
    st.caption("Responde correctamente las 2 preguntas para continuar.")

    for idx, item in enumerate(QUESTIONS[sec_key]):
        st.write(f"**Pregunta {idx+1}:** {item['q']}")
        st.radio("", item["opts"], key=f"{sec_key}_q{idx}", index=None, label_visibility="collapsed")

    if st.button("Verificar respuestas", key=f"check_{sec_key}"):
        score = sum(
            1 for idx, item in enumerate(QUESTIONS[sec_key])
            if st.session_state.get(f"{sec_key}_q{idx}") == item["ans"]
        )
        st.session_state[f"{sec_key}_correct"] = score
        if score >= 2:
            st.success(f"✅ {score}/2 correctas. ¡Ahora marca el compromiso!")
        else:
            st.error(f"❌ {score}/2 correctas. Revisa el contenido e intenta de nuevo.")


def render_commitment(sec_key, next_sec_key=None):
    if st.session_state[f"{sec_key}_correct"] < 2:
        st.warning("🔒 Completa el quiz correctamente para continuar.")
        return

    checked = st.checkbox("Me comprometo a respetar estas reglas y estudiar con honestidad.", key=f"commit_{sec_key}")
    if checked:
        st.session_state[f"{sec_key}_checked"] = True
        if next_sec_key:
            st.session_state[f"{next_sec_key}_unlocked"] = True
        st.success("🎉 ¡Sección completada! La siguiente sección está desbloqueada.")
    else:
        st.session_state[f"{sec_key}_checked"] = False


# ── HEADER ─────────────────────────────────────────────
st.title("📱 Survival Guide — Programación Móvil")
st.caption("ISC Ivan Isay Guerra López")

completadas = sum(1 for s in sections if st.session_state[f"{s}_checked"])
st.progress(completadas / len(sections), text=f"Progreso: {completadas}/{len(sections)} secciones completadas")

st.divider()

# ── NAVEGACIÓN ─────────────────────────────────────────
labels = {
    "camara_reglas": "🏛️ Reglamento",
    "oraculo_notas": "📊 Evaluación",
    "skills":        "🎯 Objetivos",
    "linea_tiempo":  "📅 Fechas Clave",
}

cols = st.columns(4)
for i, sec in enumerate(sections):
    unlocked  = st.session_state[f"{sec}_unlocked"]
    completed = st.session_state[f"{sec}_checked"]
    icono = "✅" if completed else ("" if unlocked else "🔒")
    with cols[i]:
        if st.button(f"{icono} {labels[sec]}", key=f"nav_{sec}", disabled=not unlocked, use_container_width=True):
            st.session_state["active_section"] = sec

if "active_section" not in st.session_state:
    st.session_state["active_section"] = "camara_reglas"

active = st.session_state["active_section"]
st.divider()

# ── SECCIÓN 1: REGLAMENTO ──────────────────────────────
if active == "camara_reglas":
    st.header("🏛️ Reglamento de la Materia")

    st.subheader("📋 Lineamientos Generales")
    st.markdown("""
- Respeto con el profesor y compañeros
- Participación activa en orden
- No se entregan trabajos incompletos
- No se aplica examen fuera de tiempo
- **Plagio = 0** para todos los involucrados
- **3 faltas = Final del parcial** automáticamente
- Calificación máxima en Classroom: **8**
""")

    st.subheader("📁 Entregas en Classroom")
    st.markdown("""
- Completar la entrega para su revisión
- Entregas en formato **PDF**
- Avisos de clase se publican ahí
- Entregas con retraso autorizado: **máximo calificación 5**
""")

    st.subheader("🤖 Uso de IA / LLMs")
    st.markdown("""
- ✅ **Permitido** para aprender e investigar
- ❌ **Prohibido** para mal uso — se tomarán medidas
""")

    st.divider()
    render_quiz("camara_reglas")
    render_commitment("camara_reglas", next_sec_key="oraculo_notas")

# ── SECCIÓN 2: EVALUACIÓN ──────────────────────────────
elif active == "oraculo_notas":
    st.header("📊 Plan de Evaluación")

    st.subheader("🧪 Exámenes")
    st.markdown("3 parciales durante el semestre.")

    st.subheader("⭐ Desempeño")
    st.markdown("""
- Participación activa en clase
- Trabajos completos en Classroom
- Commits y Push en tu repositorio
- Respetar tiempos de entrega
- Calidad universitaria obligatoria
""")

    st.subheader("📦 Producto — Proyecto Didáctico")
    st.markdown("""
- Equipo asignado por el profesor
- Tema: materia + background
- **1 entrega por parcial**
- Se recomienda preguntar dudas constantemente
""")

    st.subheader("📋 Entregas en Classroom")
    st.markdown("""
- **Portada:** diseño libre, logo, tema, datos de la materia
- **Conclusión:** descripción de lo aprendido
""")

    st.divider()
    render_quiz("oraculo_notas")
    render_commitment("oraculo_notas", next_sec_key="skills")

# ── SECCIÓN 3: OBJETIVOS ───────────────────────────────
elif active == "skills":
    st.header("🎯 Objetivos de la Materia")

    st.subheader("Objetivo General")
    st.markdown("""
Desarrollar aplicaciones móviles funcionales integrando tecnologías modernas
como **React Native**, **Python** y **SQLite**, aplicando buenas prácticas
de desarrollo, trabajo en equipo y uso ético de herramientas de IA.
""")

    st.subheader("🛠️ Tecnologías del Semestre")
    st.markdown("""
- ⚛️ **React** — Frontend web
- 🐍 **Python** — Backend y scripting
- 🗄️ **SQLite** — Base de datos local
- 📱 **React Native** — Aplicaciones móviles
- 🤖 **LLMs** — Herramienta de aprendizaje e investigación
""")

    st.subheader("🧠 Habilidades a Desarrollar")
    st.markdown("""
- Programar apps móviles desde cero
- Usar Git con commits y push constantes
- Trabajar en equipo con responsabilidad
- Entregar en tiempo y forma con calidad universitaria
- Usar IA de forma ética para aprender, no para copiar
""")

    st.divider()
    render_quiz("skills")
    render_commitment("skills", next_sec_key="linea_tiempo")

# ── SECCIÓN 4: FECHAS CLAVE ────────────────────────────
elif active == "linea_tiempo":
    st.header("📅 Fechas Clave del Semestre")

    st.subheader("🗓️ Exámenes Parciales")
    col1, col2, col3 = st.columns(3)
    col1.metric("Parcial 1", "01 Jun 2026")
    col2.metric("Parcial 2", "06 Jul 2026")
    col3.metric("Parcial 3", "10 Ago 2026")

    st.caption("El parcial 3 incluye: React + Python + SQLite")

    st.subheader("📦 Entregas por Parcial")
    st.markdown("""
- Entrega de **Producto** (proyecto didáctico) — 1 por parcial
- Entrega en **Classroom** (PDF con portada y conclusión) — 1 por parcial
""")

    st.subheader("💡 Consejos para el Semestre")
    st.markdown("""
- Haz commit todos los días que trabajes
- Empieza los proyectos desde el inicio, no al final
- Pregunta dudas en clase — el profesor lo recomienda
- Usa IA para entender, no para copiar
- Revisa Classroom constantemente para avisos
""")

    st.divider()
    render_quiz("linea_tiempo")
    render_commitment("linea_tiempo")

    if st.session_state["linea_tiempo_checked"]:
        st.balloons()
        st.success("🎓 ¡Completaste el Survival Guide! Ya estás listo para el semestre. ¡Mucho éxito!")

# ── FOOTER ─────────────────────────────────────────────
st.divider()
st.caption("Survival Guide · Programación Móvil · ISC Ivan Isay Guerra López")