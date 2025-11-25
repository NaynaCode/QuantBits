import '../styles/About.css';

export default function About() {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>About QuantBits</h1>
      </div>

      <div className="about-content">
        {/* Project Overview */}
        <section className="about-section">
          <h2>Project Overview</h2>
          <p>
            QuantBits is a personal portfolio and research platform aimed at demonstrating the 
            application of data science in financial markets. It integrates technical, fundamental, 
            and sentiment analyses, providing interactive visualizations, predictive models, and 
            research insights. The goal is to combine academic research with real-world financial data 
            to showcase practical quantitative analysis skills.
          </p>
        </section>

        {/* Key Features */}
        <section className="about-section">
          <h2>Key Segments</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Technical Analysis</h3>
              <p>Interactive charting, technical indicators, and trend analysis using historical data.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <h3>Fundamental Analysis</h3>
              <p>Analyzing company financials, earnings reports, and key performance metrics.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📰</div>
              <h3>Sentiment Analysis</h3>
              <p>Processing news, social media, and market sentiment to gauge investor behavior.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤖</div>
              <h3>AI & Predictive Models</h3>
              <p>Machine learning models for price prediction and pattern recognition in financial markets.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💡</div>
              <h3>Research & Insights</h3>
              <p>Hosting research papers, case studies, and in-depth analyses of market phenomena.</p>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="about-section">
          <h2>Technology Stack</h2>
          <div className="tech-stack">
            <div className="tech-category">
              <h3>Frontend</h3>
              <ul>
                <li>React.js with functional components & hooks</li>
                <li>Vite for fast development & bundling</li>
                <li>React Router for routing</li>
                <li>TailwindCSS / CSS3 for styling & responsiveness</li>
                <li>Recharts / Chart.js for data visualization</li>
              </ul>
            </div>
            <div className="tech-category">
              <h3>Backend</h3>
              <ul>
                <li>Python 3.x</li>
                <li>Flask or FastAPI for APIs</li>
                <li>PostgreSQL for structured financial data</li>
                <li>Redis for caching & fast data retrieval</li>
                <li>Pydantic for data validation</li>
              </ul>
            </div>
            <div className="tech-category">
              <h3>Data & Analysis</h3>
              <ul>
                <li>Pandas & NumPy for data manipulation</li>
                <li>TA-Lib for technical indicators</li>
                <li>Scikit-learn & XGBoost for predictive modeling</li>
                <li>Matplotlib & Seaborn for exploratory data analysis</li>
                <li>NLTK / Transformers for sentiment analysis</li>
              </ul>
            </div>
            <div className="tech-category">
              <h3>Deployment & Tools</h3>
              <ul>
                <li>Git & GitHub for version control</li>
                <li>Docker for containerization</li>
                <li>Heroku / Vercel for hosting</li>
                <li>Jupyter Notebooks for prototyping & research</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
