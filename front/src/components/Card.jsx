import '../styles/Card.css';

export default function Card({ 
  title, 
  subtitle, 
  children, 
  variant = 'default',
  icon,
  footer,
  onClick,
  className = ''
}) {
  return (
    <div 
      className={`card card--${variant} ${className}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {/* Header */}
      {(title || icon) && (
        <div className="card__header">
          {icon && <span className="card__icon">{icon}</span>}
          <div className="card__title-wrapper">
            {title && <h3 className="card__title">{title}</h3>}
            {subtitle && <p className="card__subtitle">{subtitle}</p>}
          </div>
        </div>
      )}

      {/* Content */}
      <div className="card__content">
        {children}
      </div>

      {/* Footer */}
      {footer && (
        <div className="card__footer">
          {footer}
        </div>
      )}
    </div>
  );
}
