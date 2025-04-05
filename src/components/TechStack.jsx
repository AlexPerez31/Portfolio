const techData = [
    { name: 'Python', img: '/src/assets/icons/python.png', glow: '#3776ab' },
    { name: 'Java', img: '/src/assets/icons/java.png', glow: '#5382a1' },
    { name: 'TypeScript', img: '/src/assets/icons/ts.png', glow: '#3178c6' },
    { name: 'C++', img: '/src/assets/icons/c++.png', glow: '#00599C' },
    { name: 'JavaScript', img: '/src/assets/icons/js.png', glow: '#f7df1e' },
    { name: 'HTML5', img: '/src/assets/icons/html.png', glow: '#e34c26' },
    { name: 'CSS3', img: '/src/assets/icons/css.png', glow: '#264de4' },
  
    { name: 'Django', img: '/src/assets/icons/django.png', glow: '#092e20' },
    { name: 'Spring Boot', img: '/src/assets/icons/spring.png', glow: '#6db33f' },
    { name: 'FastAPI', img: '/src/assets/icons/fastapi.png', glow: '#05998b' },
    { name: 'Flask', img: '/src/assets/icons/flask.png', glow: '#000000' },    
    { name: 'Angular', img: '/src/assets/icons/angular.png', glow: '#dd0031' },
    { name: 'React', img: '/src/assets/icons/react.png', glow: '#61dafb' },

    { name: 'Node.js', img: '/src/assets/icons/node.png', glow: '#339933' },
    { name: 'Pandas', img: '/src/assets/icons/pandas.png', glow: '#150458' },
    { name: 'Bootstrap', img: '/src/assets/icons/bootstrap.png', glow: '#7952b3' },
    { name: 'Highcharts', img: '/src/assets/icons/highcharts.png', glow: '#7cb5ec' },
    { name: 'Tabulator', img: '/src/assets/icons/tabulator.png', glow: '#3b82f6' },
    { name: 'Jupyter', img: '/src/assets/icons/jupyter.png', glow: '#f37626' },
  
    { name: 'MySQL', img: '/src/assets/icons/mysql.png', glow: '#4479a1' },
    { name: 'PostgreSQL', img: '/src/assets/icons/postgres.png', glow: '#336791' },

    { name: 'MongoDB', img: '/src/assets/icons/mongo.png', glow: '#47A248' },
    { name: 'Firebase', img: '/src/assets/icons/firebase.png', glow: '#FFCA28' },
  
    { name: 'Git', img: '/src/assets/icons/github.png', glow: '#f05032' },
    { name: 'AWS', img: '/src/assets/icons/aws.png', glow: '#FF9900' },
    { name: 'Azure', img: '/src/assets/icons/azure.png', glow: '#0089d6' },
    { name: 'Docker', img: '/src/assets/icons/docker.png', glow: '#2496ed' },
  ];
  
  const TechStack = () => {
    return (
      <div className="text-center mt-5 px-3">
        <div className="d-flex flex-wrap justify-content-center gap-4">
          {techData.map((tech) => (
            <div
                key={tech.name}
                style={{
                width: '60px',
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '12px',
                background: `radial-gradient(circle at center, ${tech.glow}55 0%, rgba(30,30,30,0.9) 100%)`, // el 55 baja opacidad
                boxShadow: `0 0 6px ${tech.glow}88`, // más suave
                padding: '10px',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'default',
                transform: 'scale(1)',
                }}
                onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.12)';
                e.currentTarget.style.boxShadow = `0 0 10px ${tech.glow}AA`; // un poco más fuerte al hover
                }}
                onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = `0 0 6px ${tech.glow}88`;
                }}
            >
          
              <img
                src={tech.img}
                alt={tech.name}
                style={{ width: '30px', height: '30px' }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default TechStack;
  