import React from "react";
import { IonContent, IonImg, IonMenu } from "@ionic/react";
import Logo from "./Logo.png";

const Menu: React.FC = () => {
    return (
        <IonMenu contentId="main" side="start">
            <IonContent>
                <div
                    style={{
                        padding: "30px 10px 30px 10px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <IonImg src={Logo} />
                </div>
            </IonContent>
        </IonMenu>
    );
};

export default Menu;
