"use strict";
// nameConvertion: typescript iyo luuqadaha kale oo dhami way wada leeyihiin waana wax muhiim ah adigaga code ka qoraya iyo ka kaaga dambeeyaba waa u muhiim 
// tusaalaha nameConvertionka qaldan ee dadku isticmalan : 
// std: waxa uu usoo gaabsanaya Student tusale marka system la samaynayo school ku saabsan taasi aad iyo aad ayay u qaldantahay 
let stdName;
let stdId;
let stdPhone;
// sida saxda ah ayaa ah in la dhamaystiro 
let studentName;
let studentID;
let studentPhone;
// taasi waxay fudaydinaysaa in qofkii code kan lahaana aanu ku khalkhalayn kii kaga dambeeyey ee code kan kala shaqaynayayna aanu ku wareereyn markaa fadlan markasta oo aad system samaynayso noocuu doono haa noqdee nameConvertion ka waxa la idhaah ee luuqaduhu leeyihiin  waa in luuqad kasta gaarkeeda loo ixtiraamaa oo loo qoraa waxa lamid ah iyadana in marka coded ku batan intii wada socotaba in inta kale ee ka madax banaan space yar oo hal ah ama laba ah laga jaraa tusaale ahaan code kan hoosta yaala tusaale waxaan samaynayaa meel lagu diiwaan gelinayo arday 
class students {
    constructor(studentID, studentName, studentAge, studentPhone) {
        this.studentID = studentID;
        this.studentName = studentName;
        this.studentAge = studentAge;
        this.studentPhone = studentPhone;
    }
    get() {
        return `stuedntID: ${this.studentID} studentName: ${this.studentName} studentAge: ${this.studentAge} studentPhone: ${this.studentPhone}`;
    }
}
let studentOne = new students(1, 'Cismaan Maxamed', 22, 44444);
console.log(studentOne);
