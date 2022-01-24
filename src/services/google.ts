export interface GAPIOptions {
    setgoogleService: any;
    setsignInStatus: any;
}

export class GAPI {
    api: any = null;
    auth: any = null;
    setgoogleService: any = null;
    setsignInStatus: any = null;
    user: any = null;

    constructor(GAPIOptions: GAPIOptions) {
        this.setgoogleService = GAPIOptions.setgoogleService;
        this.setsignInStatus = GAPIOptions.setsignInStatus;
        this.loadScript();
    }

    signIn() {
        if (!this.auth) return;
        this.auth.signIn({
            prompt: "select_account",
            scope: "https://www.googleapis.com/auth/drive.appdata",
        });
    }

    signOut() {
        if (!this.auth) return;
        this.auth.signOut();
    }

    loadScript() {
        if ((window as any).gapi) return;
        const script = document.createElement("script");
        script.async = true;
        script.defer = true;

        script.onload = () => {
            this.api = (window as any).gapi;
            this.api.load("client:auth2", () => {
                this.api.client
                    .init({
                        apiKey: "AIzaSyDTmzmW6frTxXuMRXYd8xQs7HuwRTPCxcc",
                        clientId:
                            "302389061579-a0cd8n9jd0qg9haitqm50uvql3lfg4mr.apps.googleusercontent.com",
                        scope: "https://www.googleapis.com/auth/drive.appdata",
                        discoveryDocs: [
                            "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
                        ],
                    })
                    .then(() => {
                        this.setgoogleService(this);
                        this.auth = this.api.auth2.getAuthInstance();
                        this.setsignInStatus(this.auth.isSignedIn.get());
                        this.auth.isSignedIn.listen(this.setsignInStatus);
                    });
            });
        };

        document.body.appendChild(script);
        script.src = "https://apis.google.com/js/platform.js";
    }
}
