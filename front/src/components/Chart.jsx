import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import '../styles/Chart.css';

export default function Chart({
  type = 'line',
  data = [],
  dataKey = 'value',
  xAxisKey = 'name',
  title,
  height = 300,
  colors = ['#667eea', '#764ba2', '#f093fb', '#4facfe'],
  showLegend = true,
  showGrid = true,
  showTooltip = true,
  animationDuration = 800,
  children,
}) {
  if (!data || data.length === 0) {
    return (
      <div className="chart-container chart-container--empty">
        <p>No data available</p>
      </div>
    );
  }

  const commonProps = {
    data,
    height,
    margin: { top: 5, right: 30, left: 0, bottom: 5 },
  };

  const chartConfig = {
    line: (
      <ResponsiveContainer width="100%" height={height}>
        <LineChart {...commonProps}>
          {showGrid && <CartesianGrid strokeDasharray="3 3" />}
          <XAxis dataKey={xAxisKey} stroke="#999" />
          <YAxis stroke="#999" />
          {showTooltip && <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc' }} />}
          {showLegend && <Legend />}
          {Array.isArray(dataKey) ? (
            dataKey.map((key, index) => (
              <Line
                key={key}
                type="monotone"
                dataKey={key}
                stroke={colors[index % colors.length]}
                strokeWidth={2}
                dot={{ fill: colors[index % colors.length], r: 4 }}
                activeDot={{ r: 6 }}
                isAnimationActive={true}
                animationDuration={animationDuration}
              />
            ))
          ) : (
            <Line
              type="monotone"
              dataKey={dataKey}
              stroke={colors[0]}
              strokeWidth={2}
              dot={{ fill: colors[0], r: 4 }}
              activeDot={{ r: 6 }}
              isAnimationActive={true}
              animationDuration={animationDuration}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    ),
    bar: (
      <ResponsiveContainer width="100%" height={height}>
        <BarChart {...commonProps}>
          {showGrid && <CartesianGrid strokeDasharray="3 3" />}
          <XAxis dataKey={xAxisKey} stroke="#999" />
          <YAxis stroke="#999" />
          {showTooltip && <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc' }} />}
          {showLegend && <Legend />}
          {Array.isArray(dataKey) ? (
            dataKey.map((key, index) => (
              <Bar
                key={key}
                dataKey={key}
                fill={colors[index % colors.length]}
                radius={[8, 8, 0, 0]}
                animationDuration={animationDuration}
              />
            ))
          ) : (
            <Bar
              dataKey={dataKey}
              fill={colors[0]}
              radius={[8, 8, 0, 0]}
              animationDuration={animationDuration}
            />
          )}
        </BarChart>
      </ResponsiveContainer>
    ),
    area: (
      <ResponsiveContainer width="100%" height={height}>
        <AreaChart {...commonProps}>
          {showGrid && <CartesianGrid strokeDasharray="3 3" />}
          <XAxis dataKey={xAxisKey} stroke="#999" />
          <YAxis stroke="#999" />
          {showTooltip && <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc' }} />}
          {showLegend && <Legend />}
          {Array.isArray(dataKey) ? (
            dataKey.map((key, index) => (
              <Area
                key={key}
                type="monotone"
                dataKey={key}
                fill={colors[index % colors.length]}
                stroke={colors[index % colors.length]}
                fillOpacity={0.6}
                animationDuration={animationDuration}
              />
            ))
          ) : (
            <Area
              type="monotone"
              dataKey={dataKey}
              fill={colors[0]}
              stroke={colors[0]}
              fillOpacity={0.6}
              animationDuration={animationDuration}
            />
          )}
        </AreaChart>
      </ResponsiveContainer>
    ),
    pie: (
      <ResponsiveContainer width="100%" height={height}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, value }) => `${name}: ${value}`}
            outerRadius={80}
            fill="#8884d8"
            dataKey={dataKey}
            animationDuration={animationDuration}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          {showTooltip && <Tooltip />}
        </PieChart>
      </ResponsiveContainer>
    ),
  };

  return (
    <div className="chart-container">
      {title && <h3 className="chart-title">{title}</h3>}
      <div className="chart-wrapper">
        {chartConfig[type] || chartConfig.line}
        {children}
      </div>
    </div>
  );
}
