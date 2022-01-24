import React, { useContext } from "react";
import { googleContext } from "../../App";
import {
    IonAvatar,
    IonHeader,
    IonImg,
    IonMenuButton,
    IonTitle,
    IonToolbar,
    useIonActionSheet,
} from "@ionic/react";

const Header: React.FC = () => {
    const [present, dismiss] = useIonActionSheet();
    const googleServices = useContext(googleContext);

    const signOut = () => {
        if (!googleServices.isSignedIn) return;
        googleServices.service.signOut();
    };

    return (
        <IonHeader>
            <IonToolbar>
                <IonMenuButton slot="end" />
                <IonTitle className=".ion-text-center">
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            height: "100%",
                            fontWeight: "600",
                        }}
                    >
                        متاجري
                    </div>
                </IonTitle>
                {!!googleServices.service && googleServices.isSignedIn && (
                    <IonAvatar
                        slot="start"
                        onClick={() => {
                            present({
                                buttons: [
                                    {
                                        text: "تسجيل الخروج",
                                        handler: () => {
                                            signOut();
                                        },
                                    },
                                    {
                                        text: "إلغاء",
                                        role: "cancel",
                                        handler: () => {
                                            dismiss();
                                        },
                                    },
                                ],
                            });
                        }}
                        class="ion-padding"
                    >
                        {
                            <IonImg
                                src={
                                    googleServices.service.auth.currentUser.get()
                                        .su.SM
                                }
                            />
                        }
                    </IonAvatar>
                )}
            </IonToolbar>
        </IonHeader>
    );
};

export default Header;
