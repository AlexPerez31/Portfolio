const Layout = ({ children }) => {
    return (
      <div
        style={{
          backgroundColor: '#1E1E1E',
          color: '#E0E0E0',
          minHeight: '100vh',
          paddingTop: '80px',
          paddingBottom: '40px',
          width: '100%',
          margin: 0,
          overflowX: 'hidden',
        }}
      >
        {children}
      </div>
    );
  };
  
  export default Layout;
  