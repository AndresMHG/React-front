import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar'
import NotFound from '../pages/NotFound';
import Layout from '../components/layout/Layout';
import Cadastro from '../pages/cadastro/Cadastro';

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
                <Route exact path="/" component={Cadastro} />
                <PrivateRoute exact path="/cadastro" component={Cadastro} />
                <Route component={NotFound} />
            </Switch>
        </Layout>
   </BrowserRouter>
)

export default App;
