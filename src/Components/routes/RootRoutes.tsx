import React from "react";
import {
  BrowserRouter,
  Route,
  RouteProps,
  Switch,
  RouteComponentProps,
} from "react-router-dom";
import LoginPage from "../../Pages/Login/Login";

interface PrivateRouteProps extends RouteProps {
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
}
const scrollPublic = (): boolean => {
  window.scrollTo(0, 0);
  return true;
};
const ScrollPublicRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props: RouteComponentProps) =>
      scrollPublic() ? <Component {...props} /> : ""
    }
  />
);

const RootRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <ScrollPublicRoute
          exact={true}
          path="/"
          component={() => <div> hello word</div>}
        />
        <ScrollPublicRoute path="/login" component={() => <LoginPage />} />
      </Switch>
    </BrowserRouter>
  );
};
export default RootRoutes;
