export class Perso {
    private _cote : number;
    private _name : string;
    private _roles : Array<string>;
    private _youtubeLink : string;
    private _twichLink: string;
    private _battleTag: string;
    private _icon: string;
    constructor(roles : Array<string>, youtubeLink : string, twitchLink:string,battleTag : string ){
        this._roles = roles;
        this._youtubeLink = youtubeLink;
        this._twichLink = twitchLink;
        this._battleTag = battleTag;
    }
    
    get name() : string {
        return this._name;
    }
    set name(name :string){
        this._name = name;
    }
    set icon( icon : string){
        this._icon = icon;
    }
    get icon(){
        return this._icon;
    }
    get cote() : number {
        return this._cote;
    }
    set cote(cote : number){
        this._cote = cote;
    }

    get roles() : Array<string> {
        return this._roles;
    }
    get youtubeLink() : string{
        return this._youtubeLink;
    }

    get twitchLink() : string{
        return this._twichLink;
    }

    get battleTag() : string {
        return this._battleTag;
    }
}
