import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import './index.css';

function App(Props) {
  return(
    <h1>¡{Props.saludo}, {Props.name}!</h1>
  );
}

function withSaludo(WrappedComponent) { //HOC
  
  return function WrappedComponentSaludo (saludo) {
    return function ComponenteDeVerdad(props) {
      return (
        <React.Fragment>
            <WrappedComponent {...props} saludo={saludo}/>
            <p>Estamos acompañamdo al wrappedcomponent</p>
        </React.Fragment>
        
      );
    }
  }
  
}

const AppWitSaludo = withSaludo(App) ("buenas");

ReactDOM.render(
  <AppWitSaludo saludo="hello" name="master"/>,
  //<App saludo="buenas" name="Eli" />,
  document.getElementById('root')
);

