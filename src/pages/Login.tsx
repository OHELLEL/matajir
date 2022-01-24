import Header from "../components/common/Header";
import { IonButton, IonContent, IonIcon, IonPage } from "@ionic/react";
import { logoGoogle } from "ionicons/icons";
import { googleContext } from "../App";
import { useContext } from "react";

const Login: React.FC = () => {
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
                    {!!googleServices.service && (
                        <IonButton onClick={signIn}>
                            تسجيل الدخول
                            <IonIcon icon={logoGoogle} slot="end" />
                        </IonButton>
                    )}
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Login;
