import { FirebaseApp, initializeApp } from "firebase/app";
import { Database, getDatabase, ref, onValue } from "firebase/database";
import firebaseConfig from "../../teamworker_account_service.json";
import SLog, { LogType } from "./SLog";

export default class SFirebase {

    private static app:FirebaseApp;
    private static firebaseDatabase: Database;

    // viet khoi tao 1 ham
    private static init () {
        if (!this.app) {
            this.app = initializeApp(firebaseConfig);
        }

        if(!this.firebaseDatabase) {
            this.firebaseDatabase = getDatabase(this.app);
        }
    }

    
    // #### VI DU
    public static trackNotification (userId:number = -1, 
        onSuccess:() => void = () => {}, 
        onFailure:() => void = () => {}, 
        onComplete:() => void = () => {}) {


            // #1: khoi tao
            this.init();

            // #2: lay ra node
            // #2.1: khoi tao
            const path = "USERS/USER_ID:"+userId+"/NOTIFICATIONS";

            // #2.2 tim node
            let notificationRef = ref(this.firebaseDatabase, path);

            const callBackSuccess = (data:unknown) => {
                SLog.log(LogType.Info, "TrackNotification", "Thong bao nguoi dung", data);
                onSuccess();
                onComplete();
            };

            const callBackFailure = (data:unknown) => {
                SLog.log(LogType.Error, "TrackNotification", "Khong co thong bao", data);
                onFailure();
                onComplete();
            };

            // #3: doc du lieu
            onValue(notificationRef, callBackSuccess, callBackFailure);

        // theo doi thong bao
    }
}