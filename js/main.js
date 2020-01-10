$(function(){
    
    
    const $startVal = $("#startJobLev");
    const $endVal = $("#endJobLev");
    const $retDis = $("#retDis");
    const $retBtn = $("#retBtn");
    
    const levList = [
        0,
        7,
        15,
        26,
        40,
        59,
        87,
        128,
        184,
        264,
        370,
        512,
        691,
        920,
        1200,
        1540,
        1946,
        2423,
        2975,
        3609,
        4324,
        5127,
        6012,
        6985,
        8036,
        9165,
        10364,
        11629,
        12961,
        14359,
        15826,
        17362,
        18969,
        20650,
        22404,
        24232,
        26136,
        28118,
        30180,
        32319,
        34541,
        36844,
        39231,
        41704,
        44262,
        46907,
        49641,
        52464,
        55381,
        58387,
        61488,
        67917,
        71537,
        75271,
        79117,
        83073,
        87137,
        91308,
        95585,
        99971,
        104464,
        109062,
        113764,
        118569,
        123479,
        128492,
        133606,
        138820,
        144133,
        149547,
        155060,
        160688,
        166466,
        172442,
        178667,
        185192,
        192068,
        199346,
        199346,
        199346,
        199346,
        199346,
        199346,
        199346,
        199346,
        249346,
        299346,
        349346,
        399346,
        449346,
        599346,
        749346,
        959346,
        959346,
        959346,
        959346,
        959346,
        959346,
        959346,
        959346,
        959346,
        959346,
        959346,
        959346,
        959346,
        959346,
        959346,
        959346,
        959346,
        959346
    ];
    
    var startVal = 0;
    var endVal = 0;
    
    function Calculation(){
        let ret = 0;
        for(let i = 0, s = startVal; s < endVal; s++){
            i++;
            ret += levList[s];
            console.log(ret);
        }
        $retDis.text(ret);
    }
    
    $startVal.on("change keyup", function(e){
        let val = parseInt($startVal.val());
        if(startVal != val){
            startVal = val;
            console.log("startVal = "+ val);
        }
    });
    
    $endVal.on("change keyup", function(e){
        let val = parseInt($endVal.val());
        if(endVal != val){
            endVal = val;
            console.log("endVal = "+ val);
        }
    });
    
    $retBtn.on("click", function(e){
        Calculation();
    });

    function init(){
        startVal = $startVal.val();
        endVal = $endVal.val();
    }
    
    init();
});