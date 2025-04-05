import python from '../assets/icons/python.png';
import java from '../assets/icons/java.png';
import typescript from '../assets/icons/ts.png';
import cpp from '../assets/icons/c++.png';
import javascript from '../assets/icons/js.png';
import html from '../assets/icons/html.png';
import css from '../assets/icons/css.png';

import django from '../assets/icons/django.png';
import spring from '../assets/icons/spring.png';
import fastapi from '../assets/icons/fastapi.png';
import flask from '../assets/icons/flask.png';
import angular from '../assets/icons/angular.png';
import react from '../assets/icons/react.png';

import node from '../assets/icons/node.png';
import pandas from '../assets/icons/pandas.png';
import bootstrap from '../assets/icons/bootstrap.png';
import highcharts from '../assets/icons/highcharts.png';
import tabulator from '../assets/icons/tabulator.png';
import jupyter from '../assets/icons/jupyter.png';

import mysql from '../assets/icons/mysql.png';
import postgres from '../assets/icons/postgres.png';
import mongo from '../assets/icons/mongo.png';
import firebase from '../assets/icons/firebase.png';

import git from '../assets/icons/github.png';
import aws from '../assets/icons/aws.png';
import azure from '../assets/icons/azure.png';
import docker from '../assets/icons/docker.png';

const techData = [
  { name: 'Python', img: python, glow: '#3776ab' },
  { name: 'Java', img: java, glow: '#5382a1' },
  { name: 'TypeScript', img: typescript, glow: '#3178c6' },
  { name: 'C++', img: cpp, glow: '#00599C' },
  { name: 'JavaScript', img: javascript, glow: '#f7df1e' },
  { name: 'HTML5', img: html, glow: '#e34c26' },
  { name: 'CSS3', img: css, glow: '#264de4' },

  { name: 'Django', img: django, glow: '#092e20' },
  { name: 'Spring Boot', img: spring, glow: '#6db33f' },
  { name: 'FastAPI', img: fastapi, glow: '#05998b' },
  { name: 'Flask', img: flask, glow: '#000000' },
  { name: 'Angular', img: angular, glow: '#dd0031' },
  { name: 'React', img: react, glow: '#61dafb' },

  { name: 'Node.js', img: node, glow: '#339933' },
  { name: 'Pandas', img: pandas, glow: '#150458' },
  { name: 'Bootstrap', img: bootstrap, glow: '#7952b3' },
  { name: 'Highcharts', img: highcharts, glow: '#7cb5ec' },
  { name: 'Tabulator', img: tabulator, glow: '#3b82f6' },
  { name: 'Jupyter', img: jupyter, glow: '#f37626' },

  { name: 'MySQL', img: mysql, glow: '#4479a1' },
  { name: 'PostgreSQL', img: postgres, glow: '#336791' },
  { name: 'MongoDB', img: mongo, glow: '#47A248' },
  { name: 'Firebase', img: firebase, glow: '#FFCA28' },

  { name: 'Git', img: git, glow: '#f05032' },
  { name: 'AWS', img: aws, glow: '#FF9900' },
  { name: 'Azure', img: azure, glow: '#0089d6' },
  { name: 'Docker', img: docker, glow: '#2496ed' },
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
              background: `radial-gradient(circle at center, ${tech.glow}55 0%, rgba(30,30,30,0.9) 100%)`,
              boxShadow: `0 0 6px ${tech.glow}88`,
              padding: '10px',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'default',
              transform: 'scale(1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.12)';
              e.currentTarget.style.boxShadow = `0 0 10px ${tech.glow}AA`;
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
