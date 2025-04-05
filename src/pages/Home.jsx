import Layout from '../components/Layout';
import Text from '../components/ui/Text';
import TitleMain from '../components/ui/TitleMain';
import TitleSecondary from '../components/ui/TitleSecondary';
import TechStack from '../components/TechStack';

const Home = () => {
  return (
    <Layout>
      <div className="container-fluid d-flex flex-column flex-md-row align-items-center justify-content-center gap-4">
        <div className="text-center">
          <img
            src="/src/assets/avatar.jpg"
            alt="Alex"
            className="rounded-circle border border-success mb-3"
            style={{ width: '180px', height: '180px', objectFit: 'cover' }}
          />

          <div className="d-flex justify-content-center gap-3 fs-4 mt-2">
            <a
              href="mailto:alexjordanperez31@gmail.com"
              className="text-decoration-none"
              style={{
                transition: 'transform 0.2s ease, filter 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.2)';
                e.currentTarget.style.filter = 'drop-shadow(0 0 5px #e63946)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.filter = 'none';
              }}
            >
              <img
                src="/src/assets/icons/gmail.png"
                alt="Gmail"
                style={{ width: '24px', height: '24px' }}
              />
            </a>

            <a
              href="https://github.com/AlexPerez31"
              className="text-decoration-none"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                transition: 'transform 0.2s ease, filter 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.2)';
                e.currentTarget.style.filter = 'drop-shadow(0 0 5px #f05032)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.filter = 'none';
              }}
            >
              <img
                src="/src/assets/icons/github.png"
                alt="GitHub"
                style={{ width: '24px', height: '24px' }}
              />
            </a>

            <a
              href="https://www.linkedin.com/in/alexjordanperez/"
              className="text-decoration-none"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                transition: 'transform 0.2s ease, filter 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.2)';
                e.currentTarget.style.filter = 'drop-shadow(0 0 5px #0a66c2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.filter = 'none';
              }}
            >
              <img
                src="/src/assets/icons/linkedin.png"
                alt="LinkedIn"
                style={{ width: '24px', height: '24px' }}
              />
            </a>
          </div>
        </div>

        <div className="text-white text-center text-md-start">
          <br />
          <TitleMain>Hi, my name is Alex Pérez</TitleMain>
          <TitleSecondary>
            I’m a <span style={{ color: '#00CC66' }}>Software Developer</span> &{' '}
            <span style={{ color: '#00CC66' }}>DevOps</span>
          </TitleSecondary>

          <Text className="mt-2 fst-italic">
            I design solutions with code and creativity.
          </Text>
          <br />
          <div className="text-center">
          <a
            href="https://drive.google.com/file/d/1iwvyOCk7Tbm2-j26mjQgwdfn60jfWvm4/view"
            className="btn btn-success btn-sm mt-3"
            target="_blank"
            rel="noopener noreferrer"
            >
            Download CV
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <h2 style={{ color: '#FF6700', fontSize: '23px', fontWeight: 'bold' }}>
          My Tech Stack
        </h2>
      </div>

      <TechStack />
    </Layout>
  );
};

export default Home;
