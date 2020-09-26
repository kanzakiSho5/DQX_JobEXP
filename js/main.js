$(function(){
    
    const $JobSelect = $("#JobSelect");
    const $startVal = $("#startJobLev");
    const $endVal = $("#endJobLev");
    const $retDis = $("#retDis");
    const $retDisAngel = $("#retDis-angel");
    const $retDisSkill = $("#retDis-Skill");
    const $retBtn = $("#retBtn");
    const $errorDis = $("#errorDis");
    
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
        959346,
        997720,
        1036094,
        1074468,
        1112842,
        1151216,
        1189590
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
        959346,
        997720,
        1036094,
        1074468,
        1112842,
        1151216,
        1189590
    ];
    const shieldJobSkill = [
        0,
        2,
        2,
        2,
        2,
        2,
        2,
        3,
        2,
        3,// 10
        3,
        1,
        3,
        4,
        1,
        4,
        4,
        1,
        4,
        4,//20
        1,
        3,
        4,
        1,
        4,
        4,
        1,
        5,
        5,
        1,//30
        4,
        5,
        1,
        4,
        0,
        0,
        0,
        0,
        0,
        0,//40
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        45,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        30,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        32,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        32,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        30,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        28,
        5,
        3,
        3,
        4,
        3,
        4,
        4,
        3,
        4,
        3,
        5,
        1,
        1,
        1,
        1,
        5,
        2,
    ];
    const nonShieldJobSkill = [
        0,
        2,
        2,
        2,
        2,
        2,
        2,
        3,
        2,
        3,//10
        3,
        1,
        3,
        4,
        1,
        4,
        4,
        1,
        4,
        4,//20
        1,
        3,
        4,
        1,
        4,
        4,
        1,
        5,
        5,
        1,//30
        0,
        0,
        0,
        15,
        0,
        5,
        0,
        0,
        0,
        0,//40
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        39,//50
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        22,//60
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        23,//70
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        18,//80
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        23,//90
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        27,//100
        2,
        0,
        0,
        8,
        3,//105
        0,
        0,
        0,
        13,
        4,//110
        1,
        1,
        1,
        1,
        4,
        1
    ];
    const asobiJobSkill = [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        137,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        32,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        33,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        34,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        34,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        42,
        0,
        0,
        0,
        0,
        18,
        0,
        0,
        0,
        0,
        20,
        1,
        1,
        1,
        2,
        5,
        1
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
    const JobSkill= {
        "戦士":true,
        "僧侶":true,
        "魔法使い":true,
        "武闘家":false,
        "盗賊":true,
        "旅芸人":true,
        "バトルマスター":false,
        "パラディン":true,
        "魔法戦士":true,
        "レンジャー":true,
        "賢者":true,
        "スーパースター":true,
        "まもの使い":false,
        "どうぐ使い":true,
        "踊り子":false,
        "占い師":true,
        "天地雷鳴士":true,
        "遊び人":"asobi",
        "デスマスター":false
    };
    const MaxLevel = 116;
    
    var isFirstJob = true;
    var skillType = true;
    var startVal = 0;
    var endVal = 0;
    
    function Calculation(){
        if(endVal > MaxLevel || startVal >= MaxLevel){
            $errorDis.text("レベルの最大値は、110までだよ～！");
            return;
        }
        $errorDis.text("");
        //lv計算
        let retLv = 0;
        let retAngel = 0;
        for(let i = 0, s = startVal; s < endVal; s++){
            i++;
            if(startVal >= MaxLevel || endVal > MaxLevel)
                break;
            if(isFirstJob) {
                retLv += firstLevList[s];
                if(s < 90)
                    retAngel += (firstLevList[s] / 3);
                else
                    retAngel += firstLevList[s];
            }else {
                retLv += addLevList[s];
                if(s < 90)
                    retAngel += (addLevList[s] / 3);
                else 
                    retAngel += addLevList[s];
            }
            //console.log(retLv);
        }
        
        //Skill計算
        let retSkill = 0;
        let AllSkill = 0;
        for(let i = 0; i < endVal; i++){
            if(skillType == "asobi"){
                AllSkill += asobiJobSkill[i];
                if(i > startVal)
                    retSkill += asobiJobSkill[i];
                continue;
            }
            
            if(skillType){
                AllSkill += shieldJobSkill[i];
                if(i >= startVal)
                    retSkill += shieldJobSkill[i];
            }
            else {
                AllSkill += nonShieldJobSkill[i];
                if(i >= startVal)
                    retSkill += nonShieldJobSkill[i];
            }
        }
        $retDis.text(retLv);
        $retDisAngel.text(Math.floor(retAngel));
        $retDisSkill.text(""+ AllSkill +"(+"+ retSkill +")");
    }
    
    $JobSelect.on("click", function(e){
        isFirstJob = JobStat[$JobSelect.val()];
        skillType = JobSkill[$JobSelect.val()];
        //console.log(isFirstJob);
    });
    
    $startVal.on("change keyup", function(e){
        let val = parseInt($startVal.val());
        if(startVal != val){
            startVal = val;
            //console.log("startVal = "+ val);
        }
    });
    
    $endVal.on("change keyup", function(e){
        let val = parseInt($endVal.val());
        if(endVal != val){
            endVal = val;
            //console.log("endVal = "+ val);
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