export enum LogType {
    "Error",
    "Warning",
    "Info",
}

const types = [console.error, console.warn, console.info];

export default class SLog {

    // nhiem vu in thong bao cho dep
    public static log (type:LogType = LogType.Info, header:string = "", message:string = "", data:unknown = {}) {

        console.group();

        console.log(types[type]);
        console.log("==", header?.toUpperCase());
        console.log("==", message);
        console.log("==", data);
        
        console.groupEnd();
    }
}