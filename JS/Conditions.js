"use strict";
// conditions kuwaa meesha lagu kala go,aan qaato siday wax noqonayaa tusaale hadii meesha doorashooyin kala duwani imaadaan in lagu kala fudaydiyo ka la qadanayo tusaale hadii aad isticmaasho Edahab ama Zaad ama Ebir ama Embesa ama Evc markaad lacag dirayso ikhtiyaarad kala duwan ayaa ku jira hadii qofku kan doorto kan usoo saar ama hadii kale kan usoo saar aakhirka ama waalagu guulaystaa hadii uu ku fashilmana fariin macasalamayn ah ayaa usoo noqota tusaalahan hoose  aan ku eegno si aan ugu fahano insha allah 
// variable kan waaka aan go,aamada ku kala badbadlayo
let magac = "Maxamed";
// hadii variable ka magac waxa ku jira uu kuu leeg yahay ama kuula mid yahay Maxamed 
if (magac === "Maxamed") {
    // waxaad soo daabacdaa soo dhawoow mudane maxamed
    console.log(`Soo dhawoow Mudane ${magac}`);
    // ama hadii kale oo magaca waxa ku uu  caasha kuu leekaado waxaad soo dabacda 
}
else if (magac === "Caasha") {
    // soo dhawoow marwo caasha
    console.log(`soo dhawoow marwo ${magac}`);
    // hadii kale oo intaasi dhici waydo 
}
else {
    // waxaad soo daabacdaa waanu ka xunnahay Mahayno
    // yacnii hadii labada magac ee sare waxka baxsan soo galaan usheeg mahayno dheh 
    console.log(`waanu ka xunnahay Mahayno ${magac}`);
}
;
// Terinary Operators : 
// waa nooc kamid ah conditions ka ay Typescript isticmaasho luuqadaha kalena way la leeyihiin 
// waxayna inta badan la xidhiidha marka go,aamo la qaadanayo oo kala doorasho meesha timaado 
function get(isActive) {
    return (isActive ? "yes" : "No");
}
console.log(get(true));
// Kan markaa habkan ayuu u shaqeeyaa terinary Operator waxana la adeegsada calamada QuesionMark;
