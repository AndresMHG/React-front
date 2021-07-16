import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar'
import NotFound from '../pages/NotFound';
import Layout from '../components/layout/Layout';
import Cadastro from '../pages/cadastro/Cadastro';
import Permissao from '../pages/permissoes/Permissoes';
import Referencia from '../pages/referencia/Referencia';
import Porfolio from '../pages/porfolio/Porfolio';
import Projeto from '../pages/projeto/Projeto';
/*  */
import Templates from '../pages/referencia/Templates';
import Intruçoes from '../pages/referencia/Intruçoes';
import Procedimentos from '../pages/referencia/Procedimentos';
import Normas from '../pages/referencia/Normas';
import Tutorial from '../pages/referencia/Tutorial';
/*  */
import Acampanhamento from '../pages/porfolio/Acampanhamento';
import Projectos from '../pages/porfolio/Projectos';

const handleToRigthRoute = (props,Component) => {
    let response_component;
    // if (getToken()) {
    //   if (!props.action_key || getPermissao(props.action_key))
        response_component = <Sidebar {...props} currentComponent={Component} />;
    //   else response_component = <Sidebar {...props} currentComponent={Home} />;
    // } else {
    //   response_component = (
    //     <Redirect
    //       to={{
    //         pathname: "/login",
    //         state: { from: props.location },
    //       }}
    //     />
    //   );
    // }
    return response_component;
}

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => handleToRigthRoute(props, Component)} />
  );
  

const App = () => (
   <BrowserRouter>
        <Layout>
            <Switch>
                {/* <Route exact path="/" component={Cadastro} /> */}
                <PrivateRoute exact path="/" component={Cadastro} />
                <PrivateRoute exact path="/cadastro" component={Cadastro} />
                <PrivateRoute exact path="/permissao" component={Permissao} />
                <PrivateRoute exact path="/referencia" component={Referencia} />
                <PrivateRoute exact path="/referencia/templates" component={Templates} />
                <PrivateRoute exact path="/referencia/intruçoes" component={Intruçoes} />
                <PrivateRoute exact path="/referencia/procedimentos" component={Procedimentos} />
                <PrivateRoute exact path="/referencia/normas" component={Normas} />
                <PrivateRoute exact path="/referencia/tutorial" component={Tutorial} />
                <PrivateRoute exact path="/porfolio" component={Porfolio} />
                <PrivateRoute exact path="/porfolio/acompanhamento" component={Acampanhamento} />
                <PrivateRoute exact path="/porfolio/projectos" component={Projectos} />
                <PrivateRoute exact path="/projeto" component={Projeto} />
                <Route component={NotFound} />
            </Switch>
        </Layout>
   </BrowserRouter>
)

export default App;
