import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Entrar from "./pages/Entrar";
import Cadastrar from "./pages/Cadastrar";
import MenuUsuario from "./pages/MenuUsuario";
import Mesas from "./pages/Mesas";
import Chat from "./pages/Chat";
import Quiz from "./pages/Quiz";

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="none"
        screenOptions={{ cardStyle: { backgroundColor: "#f0f0f5" } }}
      >
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="Entrar" component={Entrar} />
        <AppStack.Screen name="Cadastrar" component={Cadastrar} />
        <AppStack.Screen name="MenuUsuario" component={MenuUsuario} />
        <AppStack.Screen name="Mesas" component={Mesas} />
        <AppStack.Screen name="Chat" component={Chat} />
        <AppStack.Screen name="Quiz" component={Quiz} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
