export class Logger{ 
private static log(level:string, message:string):void {
    const messageReplace = message.replace('\n', '');
    console.log(`${new Date().toJSON} ${messageReplace}`);
}

public static startRoute(message:string):void {
    this.log('[------->]', message)
}

public static endRoute(message:string):void {
    this.log('[<------]', message)
}

public static startJob(message:string):void {
    this.log('[------->]', message)

}
public static endJob(message:string):void {
    this.log('[<------]', message)
}
}