import Card from '../components/Card.jsx';
import Chart from '../components/Chart.jsx';
import '../styles/TechnicalAnalysis.css';

export default function TechnicalAnalysis() {
  // Sample data for charts
  const priceData = [
    { name: 'Jan', price: 35000, sma20: 34500 },
    { name: 'Feb', price: 38000, sma20: 36000 },
    { name: 'Mar', price: 42000, sma20: 39500 },
    { name: 'Apr', price: 40000, sma20: 40500 },
    { name: 'May', price: 45000, sma20: 42500 },
    { name: 'Jun', price: 48000, sma20: 45000 },
    { name: 'Jul', price: 50000, sma20: 47500 },
  ];

  const volumeData = [
    { name: 'Jan', volume: 2400 },
    { name: 'Feb', volume: 1398 },
    { name: 'Mar', volume: 9800 },
    { name: 'Apr', volume: 3908 },
    { name: 'May', volume: 4800 },
    { name: 'Jun', volume: 3800 },
    { name: 'Jul', volume: 4300 },
  ];

  const rsiData = [
    { name: 'Jan', rsi: 45 },
    { name: 'Feb', rsi: 52 },
    { name: 'Mar', rsi: 68 },
    { name: 'Apr', rsi: 55 },
    { name: 'May', rsi: 72 },
    { name: 'Jun', rsi: 65 },
    { name: 'Jul', rsi: 58 },
  ];

  const macdData = [
    { name: 'Jan', macd: -50, signal: -60 },
    { name: 'Feb', macd: -20, signal: -40 },
    { name: 'Mar', macd: 30, signal: -10 },
    { name: 'Apr', macd: 20, signal: 15 },
    { name: 'May', macd: 60, signal: 40 },
    { name: 'Jun', macd: 80, signal: 60 },
    { name: 'Jul', macd: 70, signal: 75 },
  ];

  const bollingerData = [
    { name: 'Jan', upper: 37000, middle: 35000, lower: 33000, price: 35000 },
    { name: 'Feb', upper: 40000, middle: 38000, lower: 36000, price: 38000 },
    { name: 'Mar', upper: 44000, middle: 42000, lower: 40000, price: 42000 },
    { name: 'Apr', upper: 42000, middle: 40000, lower: 38000, price: 40000 },
    { name: 'May', upper: 47000, middle: 45000, lower: 43000, price: 45000 },
    { name: 'Jun', upper: 50000, middle: 48000, lower: 46000, price: 48000 },
    { name: 'Jul', upper: 52000, middle: 50000, lower: 48000, price: 50000 },
  ];

  const volatilityData = [
    { name: 'Jan', volatility: 2.5 },
    { name: 'Feb', volatility: 3.1 },
    { name: 'Mar', volatility: 4.2 },
    { name: 'Apr', volatility: 2.8 },
    { name: 'May', volatility: 3.9 },
    { name: 'Jun', volatility: 2.3 },
    { name: 'Jul', volatility: 3.6 },
  ];

  const adxData = [
    { name: 'Jan', adx: 18 },
    { name: 'Feb', adx: 22 },
    { name: 'Mar', adx: 35 },
    { name: 'Apr', adx: 28 },
    { name: 'May', adx: 42 },
    { name: 'Jun', adx: 38 },
    { name: 'Jul', adx: 32 },
  ];

  const stochasticData = [
    { name: 'Jan', k: 35, d: 40 },
    { name: 'Feb', k: 48, d: 42 },
    { name: 'Mar', k: 72, d: 60 },
    { name: 'Apr', adx: 55, d: 65 },
    { name: 'May', k: 78, d: 70 },
    { name: 'Jun', k: 65, d: 70 },
    { name: 'Jul', k: 58, d: 62 },
  ];

  const correlationData = [
    { name: 'BTC', value: 100 },
    { name: 'ETH', value: 75 },
    { name: 'ADA', value: 45 },
    { name: 'SOL', value: 68 },
  ];

  const performanceData = [
    { name: 'Week 1', return: 2.5, benchmark: 1.8 },
    { name: 'Week 2', return: -1.2, benchmark: 0.5 },
    { name: 'Week 3', return: 3.8, benchmark: 2.1 },
    { name: 'Week 4', return: 1.5, benchmark: 1.2 },
  ];

  const supportResistanceData = [
    { name: 'Time', support: 48000, resistance: 52000, price: 50000 },
    { name: 'T+1', support: 48500, resistance: 51500, price: 49800 },
    { name: 'T+2', support: 49000, resistance: 51000, price: 50200 },
    { name: 'T+3', support: 48800, resistance: 51200, price: 49900 },
  ];

  return (
    <div className="technical-analysis-page">
      <div className="page-header">
        <h1>Technical Analysis Dashboard</h1>
        <p>Real-time market indicators and analysis</p>
      </div>

      <div className="cards-grid">
        {/* Card 1: Price & Moving Average */}
        <Card 
          title="Price & Moving Average"
          icon="📈"
          variant="primary"
          subtitle="BTC/USD"
        >
          <Chart 
            type="line"
            data={priceData}
            dataKey={['price', 'sma20']}
            xAxisKey="name"
            height={250}
            colors={['#667eea', '#f093fb']}
          />
        </Card>

        {/* Card 2: Trading Volume */}
        <Card 
          title="Trading Volume"
          icon="📊"
          variant="success"
          subtitle="Daily Volume"
        >
          <Chart 
            type="bar"
            data={volumeData}
            dataKey="volume"
            xAxisKey="name"
            height={250}
            colors={['#4caf50']}
          />
        </Card>

        {/* Card 3: RSI Indicator */}
        <Card 
          title="RSI (Relative Strength Index)"
          icon="📉"
          variant="warning"
          subtitle="Momentum Indicator"
        >
          <Chart 
            type="area"
            data={rsiData}
            dataKey="rsi"
            xAxisKey="name"
            height={250}
            colors={['#ff9800']}
          />
        </Card>

        {/* Card 4: MACD */}
        <Card 
          title="MACD (Moving Average Convergence)"
          icon="🔄"
          variant="info"
          subtitle="Trend Indicator"
        >
          <Chart 
            type="line"
            data={macdData}
            dataKey={['macd', 'signal']}
            xAxisKey="name"
            height={250}
            colors={['#2196f3', '#f44336']}
          />
        </Card>

        {/* Card 5: Bollinger Bands */}
        <Card 
          title="Bollinger Bands"
          icon="🎯"
          variant="gradient"
          subtitle="Volatility Indicator"
        >
          <Chart 
            type="area"
            data={bollingerData}
            dataKey={['upper', 'middle', 'lower']}
            xAxisKey="name"
            height={250}
            colors={['#ff6b6b', '#667eea', '#4ecdc4']}
          />
        </Card>

        {/* Card 6: Market Volatility */}
        <Card 
          title="Market Volatility"
          icon="⚡"
          variant="danger"
          subtitle="VIX-like Index"
        >
          <Chart 
            type="line"
            data={volatilityData}
            dataKey="volatility"
            xAxisKey="name"
            height={250}
            colors={['#f44336']}
          />
        </Card>

        {/* Card 7: ADX (Average Directional Index) */}
        <Card 
          title="ADX (Average Directional Index)"
          icon="🧭"
          variant="primary"
          subtitle="Trend Strength"
        >
          <Chart 
            type="bar"
            data={adxData}
            dataKey="adx"
            xAxisKey="name"
            height={250}
            colors={['#667eea']}
          />
        </Card>

        {/* Card 8: Stochastic Oscillator */}
        <Card 
          title="Stochastic Oscillator"
          icon="📍"
          variant="success"
          subtitle="Overbought/Oversold"
        >
          <Chart 
            type="line"
            data={stochasticData}
            dataKey={['k', 'd']}
            xAxisKey="name"
            height={250}
            colors={['#4caf50', '#ff9800']}
          />
        </Card>

        {/* Card 9: Cryptocurrency Correlation */}
        <Card 
          title="Asset Correlation"
          icon="🔗"
          variant="info"
          subtitle="Correlation Matrix"
        >
          <Chart 
            type="pie"
            data={correlationData}
            dataKey="value"
            height={250}
            colors={['#2196f3', '#4caf50', '#ff9800', '#f44336']}
          />
        </Card>

        {/* Card 10: Portfolio Performance */}
        <Card 
          title="Weekly Performance"
          icon="💹"
          variant="warning"
          subtitle="Returns vs Benchmark"
        >
          <Chart 
            type="bar"
            data={performanceData}
            dataKey={['return', 'benchmark']}
            xAxisKey="name"
            height={250}
            colors={['#ff9800', '#2196f3']}
          />
        </Card>
      </div>
    </div>
  );
}
