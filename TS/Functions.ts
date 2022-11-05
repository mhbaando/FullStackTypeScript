// kuso dhawoow Section kale oo isna aan kaga hadli doono 
// Waa maxay functions aslan sida magaca ka muuqato waa shaqo 
// hadaba marka la joogo programminka dhexdiisa waa xidhmooyin code ka ah 
// oo isdaba socda midkastana shaqadiisa qabanayo sidoo kale xili kasta aad isticmaalayso 
// tusaale hadii aad rabto function shaqadiisu tahay in uu kuu xisaabiyo 
// xisaabaad kala duwan isaga ayaa kuu qabanaya function ku 
// hadaba TypeScript waxa kaloo yaqaanaa luuqada functions ka 
// yacnii waxkasta oo aad u baahato function ayaad ku qabsanaysa 
// waxa jira noocyyo kala duwan oo functions ah oo ay luuqadani adeegsato waxana kamid ah 

// Declaration Function 
// function kan ayaa loo yaqaana Declration 

function add(num1:number , num2:number){
    return num1 + num2
}
console.log(add(2,2));

// Arrow Function
// arrow Fucntion :waa noockamida Functions ka kaas oo aan lagu bilaabaynin keywordka Function basle waxa uu leeyahay wax la idhaah Fat arrow (=>) balse waxa lagu dhex kaydinaya Variable tusaale ahaan sidan: 
// waxaan samaysanaynaa object ama arrays kaas oo aan ku dhex isticmali karno Arrow function ka tusaale : 
let users:string = "Ahmed ali"
let arrowFunction = (users:string)=>{
    return "hello Mr : "+ users;
};

console.log(arrowFunction(users));

// Anonymous Functions





// Function markaad samaynayso maxaa lagaga baahanyahay: 
// tusaale ahaan Declaration Function ka 
// Function Keyword: ayaad ku bilaabaysa 
// functionName: magac bixin uu yeelanayo Function ku 
// Paramater / argument: paramaterku waa variable lagu kaydinayo waxa larabo isla jeerkaasna uu fucntionku soo celinayo 
// argument's : waa xogta lafteeda loo baasayo Paramaterka 
