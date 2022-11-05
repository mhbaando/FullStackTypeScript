"use strict";
// typeAliases: waa hab aad marka object ga joogto tusaale ahaan Class oo kale ama Objectga laf ahaantisa waxad samaysan kartaa custom type macnaha mid adiga ku gar ah shardiguse waa in aad marka hore banaanka kusoo samaysataa Tusaale ahaan sidan 
// waxana uu lamid yahay Union type kii aynu soo dhiganay 
// hadaba kani waxba sidaa ugagama duwana aan ahayn in aad 
// Class kaagii ama objectgii laf ahantiisa ad ku samaysan karto 
// Type adiga kuu khaas ah oo wixii aad ugu talo gasho kuu haynaya
// insha allah labadan wax ka wanagsan ayaan arki doonaa oo la idhaah Generics
// halkaa imika Function ka dhexdiisa paramaterka ID: waxa aan type ahan u siiyay kii aan anuu soo samaystay
// waana sida uu u shaqeeyo Type alias ku 
const userData = (Id, userName) => {
    return `userID : ${Id} , userName: ${userName}`;
};
let newUser = userData('1', 'Osmaan Daahir');
console.log(newUser);
// suaal is waydiin mudan 
// maxay ku kala duwan yihiin Union Type iyo Type Aliases
// UnionType : waa hab aad iskugu gayn karto Variable kaaga TYpes kala duwan tusale ahaan in aad hal Variable ku wada isticmaali karto mid String ah iyo mid Number sidoo kale Boolean kama madhna Object iyo arrays iyaguna balse Variable kaas ayuunbuu ku eekanaya Union type ku markaad samaysato meel kale kuma dhex isticmaali kartid.
// Type Aliases: 
// waa hab aad variable kaaga sidii union typeka aad iskugu geyn karto types kala duwan balse waxa uu kaga duwan yahay ayaa ah in aad 
// in aad ka samaysan karto Type adiga kuu gar ah magaca aad doontana aad u bixisan karto meshaad doontana aad ku dhex isticmaali kartid 
