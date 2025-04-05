const TitleMain = ({ children }) => {
    return (
      <h1
        style={{
          color: '#FF6700',
          fontSize: '28px',
          fontWeight: '700',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {children}
      </h1>
    );
  };
  
  export default TitleMain;
  