const Text = ({ children, className = '' }) => {
    return (
      <p
        className={className}
        style={{
          fontSize: '20px',
          color: '#E0E0E0',
          fontFamily: 'system-ui, sans-serif',
          marginBottom: '0.5rem',
        }}
      >
        {children}
      </p>
    );
  };
  
  export default Text;
  