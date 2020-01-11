﻿$(function(){
    
    const $JobSelect = $("#JobSelect");
    const $startVal = $("#startJobLev");
    const $endVal = $("#endJobLev");
    const $retDis = $("#retDis");
    const $retBtn = $("#retBtn");
    
    const firstLevList = [
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
    const addLevList = [
        0,
        9,
        20,
        35,
        53,
        79,
        116,
        171,
        245,
        352,
        493,
        682,
        921,
        1226,
        1600,
        2053,
        2594,
        3230,
        3966,
        4811,
        5764,
        6834,
        8014,
        9311,
        10712,
        12217,
        13815,
        15501,
        17277,
        19141,
        21096,
        23144,
        25286,
        27526,
        29865,
        32301,
        34839,
        37481,
        40230,
        43081,
        46043,
        49113,
        52295,
        55591,
        59001,
        62527,
        66171,
        69935,
        73823,
        77830,
        81964,
        90533,
        95359,
        100336,
        105463,
        110736,
        116154,
        121714,
        127415,
        133261,
        139251,
        145380,
        151647,
        158052,
        164598,
        171280,
        178097,
        185047,
        192129,
        199346,
        199346,
        199346,
        199346,
        199346,
        199346,
        199346,
        199346,
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
    const JobStat = {
        "戦士":true,
        "僧侶":true,
        "魔法使い":true,
        "武闘家":true,
        "盗賊":true,
        "旅芸人":true,
        "バトルマスター":false,
        "パラディン":false,
        "魔法戦士":false,
        "レンジャー":false,
        "賢者":false,
        "スーパースター":false,
        "まもの使い":false,
        "どうぐ使い":false,
        "踊り子":false,
        "占い師":false,
        "天地雷鳴士":false,
        "遊び人":false,
        "デスマスター":false
    };
    
    var isFirstJob = true;
    var startVal = 0;
    var endVal = 0;
    
    function Calculation(){
        let ret = 0;
        for(let i = 0, s = startVal; s < endVal; s++){
            i++;
            if(isFirstJob)
                ret += firstLevList[s];
            else
                ret += addLevList[s];
            console.log(ret);
        }
        $retDis.text(ret);
    }
    
    $JobSelect.on("click", function(e){
        isFirstJob = JobStat[$JobSelect.val()];
        console.log(isFirstJob);
    });
    
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
        let i = 0;
        for(var key in JobStat){
            i++;
            $JobSelect.append("<option value=\""+ key +"\">"+ key +"</option>");
        }
    }
    
    init();
});