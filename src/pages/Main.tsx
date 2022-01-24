import Header from "../components/common/Header";
import { IonButton, IonContent, IonIcon, IonPage } from "@ionic/react";
import { logoGoogle } from "ionicons/icons";
import { googleContext } from "../App";
import { useContext } from "react";

const Main: React.FC = () => {
    const googleServices = useContext(googleContext);

    const signIn = () => {
        if (googleServices.isSignedIn) return;
        googleServices.service.signIn();
    };

    return (
        <IonPage>
            <Header />
            <IonContent fullscreen>
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    أنشئ متجر جديد
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Main;
