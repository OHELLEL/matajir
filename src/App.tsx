import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
    IonApp,
    IonItem,
    IonMenu,
    IonRouterOutlet,
    IonSplitPane,
    setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Login from "./pages/Login";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { useEffect, useState } from "react";
import { GAPI } from "./services/google";
import Menu from "./components/common/Menu";
import Main from "./pages/Main";

setupIonicReact();

export interface googleServiceInterface {
    service: any;
    isSignedIn: boolean;
}

export const googleContext = React.createContext({
    service: null,
    isSignedIn: false,
} as googleServiceInterface);

const App: React.FC = () => {
    const [googleService, setgoogleService] = useState(null);
    const [isSignedIn, setisSignedIn] = useState(false);

    useEffect(() => {
        new GAPI({
            setgoogleService: setgoogleService,
            setsignInStatus: setisSignedIn,
        });
    }, []);

    return (
        <googleContext.Provider
            value={{ service: googleService, isSignedIn: isSignedIn }}
        >
            <IonApp>
                <IonSplitPane contentId="main">
                    <Menu />
                    {!isSignedIn ? (
                        <IonReactRouter>
                            <IonRouterOutlet id="main">
                                <Route exact path="/login">
                                    <Login />
                                </Route>
                                <Route exact path="/">
                                    <Redirect to="/login" />
                                </Route>
                            </IonRouterOutlet>
                        </IonReactRouter>
                    ) : (
                        <IonReactRouter>
                            <IonRouterOutlet id="main">
                                <Route exact path="/main">
                                    <Main />
                                </Route>
                                <Route exact path="/">
                                    <Redirect to="/main" />
                                </Route>
                            </IonRouterOutlet>
                        </IonReactRouter>
                    )}
                </IonSplitPane>
            </IonApp>
        </googleContext.Provider>
    );
};

export default App;
