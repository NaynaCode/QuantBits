import { Link } from 'react-router-dom';
import '../styles/Home.css';
import { FaChartLine, FaRobot, FaLightbulb, FaClock } from 'react-icons/fa';

export default function Home() {
  const features = [
    {
      icon: <FaChartLine size={32} />,
      title: 'Advanced Analytics',
      description: 'Real-time technical analysis with multiple indicators and charting tools.'
    },
    {
      icon: <FaRobot size={32} />,
      title: 'Smart Algorithms',
      description: 'Intelligent trading algorithms powered by machine learning and AI.'
    },
    {
      icon: <FaLightbulb size={32} />,
      title: 'Market Insights',
      description: 'Actionable insights and predictions based on historical data analysis.'
    },
    {
      icon: <FaClock size={32} />,
      title: '24/7 Monitoring',
      description: 'Continuous market monitoring and real-time alerts for opportunities.'
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Empower Your Trading with <span className="highlight">QuantBits</span>
          </h1>
          <p className="hero-subtitle">
            Advanced technical analysis and quantitative trading strategies for modern investors
          </p>
          <div className="hero-buttons">
            <Link to="/technical-analysis" className="btn btn--primary">
              Explore Dashboard
            </Link>
            <Link to="/about" className="btn btn--secondary">
              Learn More
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="chart-preview">
            <div className="chart-bar" style={{ height: '40%' }}></div>
            <div className="chart-bar" style={{ height: '60%' }}></div>
            <div className="chart-bar" style={{ height: '45%' }}></div>
            <div className="chart-bar" style={{ height: '75%' }}></div>
            <div className="chart-bar" style={{ height: '55%' }}></div>
            <div className="chart-bar" style={{ height: '80%' }}></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features-header">
          <h2>Why Choose QuantBits?</h2>
          <p>Comprehensive tools for professional and amateur traders</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stat-item">
          <div className="stat-number">50+</div>
          <div className="stat-label">Technical Indicators</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">100K+</div>
          <div className="stat-label">Active Users</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">99.9%</div>
          <div className="stat-label">Uptime</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">$B+</div>
          <div className="stat-label">Trading Volume</div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Choose Your Assets</h3>
            <p>Select from Bitcoin, Ethereum, and other cryptocurrencies to analyze.</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Analyze Trends</h3>
            <p>Use our advanced technical indicators to identify market trends.</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Make Decisions</h3>
            <p>Get actionable insights to make informed trading decisions.</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Execute Trades</h3>
            <p>Execute your strategy with confidence using our platform.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Ready to Get Started?</h2>
        <p>Join thousands of traders using QuantBits for advanced market analysis</p>
        <Link to="/contact" className="btn btn--primary btn--large">
          Get Started Now
        </Link>
      </section>
    </div>
  );
}
