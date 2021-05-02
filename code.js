//Created by Dan Connell 
//danconne@uat.edu
//CSC102 Spring 2021, WK 4-2-->

// Play a specific sound file
function playStationnoise() {
    mySound = new sound("us-lab-background.mp3");
    mySound.play();
}
// to play any sound file
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "audio");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
        this.sound.play();
    }
    this.stop = function () {
        this.sound.pause();
    }
}
//start() function for the start button
function start() {
    document.getElementById ("data").rows["seconds"].innerHTML = "Reading Data...";
    index = 0;
    timer = setInterval(updateDisplay, time_interval);
    document.getElementById("start button").disabled = true;
    document.getElementById("stop button").disabled = false;
}
//stop() function for stop button
function stop() {
    clearInterval(timer);
    document.getElementById("stop button").disabled = true;
    document.getElementById("start button").disabled = false;
}

//dom required
function getData(){
var loadedData = loadData();
return loadedData;
}

//dom required
function dateRow(legend, Value, units ){
msg = "<td>";
msg += legend
msg += ": </td><td>";
msg += Value;
msg += " " + units;
msg += "</td>";
return msg;
}


//Version 3 of count down from 10 to 1 then Blast Off, more efficient using fewer lines of code with change order request
function countDownV3() {
    var count = 10;

    for (var i = 1; i <= 11; i++) {

        if (i <= 5) {
            setTimeout(function () {
                document.getElementById("countDownTimer").innerHTML = count;
                count--;
            }, 1000 * i);
        } else if (i == 11) {
            setTimeout(function () {
                document.getElementById("countDownTimer").innerHTML = "Blastoff!!!";
                count--;
            }, 1000 * i);

        } else {
            setTimeout(function () {
                document.getElementById("countDownTimer").innerHTML = "Warning Less than ½ way to launch, time left = " + count;
                count--;
            }, 1000 * i);

        }

    }

}

//Version 2 of count down from 10 to 1 then Blast Off, more efficient using fewer lines of code
function countDownV2() {
    var count = 10;
    for (var i = 1; i < 10; i++) {
        setTimeout(function () {
            document.getElementById("countDownTimer").innerHTML = count;
            count--;
        }, 1000 * i);
    }
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = "Blastoff";
        count--;
    }, 10000);
}



//creating count down from 10 to 1 then Blast Off
function countDown() {
    var count = 10;
    //starting countdown at 10
    document.getElementById("countDownTimer").innerHTML = count;
    count = count - 1;
    //countdown decreases to 9
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 1000);
    //countdown decreases to 8
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 2000);
    //countdown decreases to 7
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 3000);
    //countdown decreases to 6
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 4000);
    //countdown decreases to 5
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 5000);
    //countdown decreases to 4
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 6000);
    //countdown decreases to 3
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 7000);
    //countdown decreases to 2
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 8000);
    //countdown decreases to 1
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 9000);
    //countdown to Blast Off
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = "Blast off";
        count = count - 1;
    }, 10000);
}

function playCraps() {
    //die1 variable roll
    var die1;
    //die2 variable roll
    var die2;
    die1 = Math.ceil(Math.random() * 6);
    die2 = Math.ceil(Math.random() * 6);
    sum = die1 + die2;
    document.getElementById("die1Res").innerHTML = die1;
    document.getElementById("die2Res").innerHTML = die2;
    document.getElementById("sumRes").innerHTML = sum;
    //Lose sequence
    if (sum == 7 || sum == 11) { document.getElementById("crapsResults").innerHTML = "CRAPS!! You Lose!"; }
    //Win Sequence sequence
    else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("crapsResults").innerHTML = "Doubles! You Win!";
    }
    //push sequence
    else { document.getElementById("crapsResults").innerHTML = "Push, Roll Again Please."; }

}

function runSandbox() {
    //Sandbox Area
    var count = 10;
    for (var i = 1; i < 10; i++) {
        setTimeout(function () {
            document.getElementById("sandboxDisplay").innerHTML = count;
            count--;
        }, 1000 * i);
    }
    setTimeout(function () {
        document.getElementById("sandboxDisplay").innerHTML = "Blastoff";
        count--;
    }, 10000);
}

class InputData {
    constructor(
        time_seconds,
        latitude,
        longitude,
        gps_altitude,
        bmpsensor_altitude,
        bmpsensor_pressure,
        bmpsensor_temp,
        digitalsensor_temp,
        cssSensor_temp,
        cssSensor_eCO2,
        cssSensor_TVOC,
        UV,
        accelX,
        accelY,
        accelZ,
        magneticX,
        magneticY,
        magneticZ,
        gyroX,
        gyroY,
        gyroZ
    ) {
        this.time_seconds = time_seconds;
        this.latitude = latitude;
        this.longitude = longitude;
        this.gps_altitude = gps_altitude;
        this.bmpsensor_altitude = bmpsensor_altitude;
        this.bmpsensor_pressure = bmpsensor_pressure;
        this.bmpsensor_temp = bmpsensor_temp;
        this.digitalsensor_temp = digitalsensor_temp;
        this.cssSensor_temp = cssSensor_temp;
        this.cssSensor_eCO2 = cssSensor_eCO2;
        this.cssSensor_TVOC = cssSensor_TVOC;
        this.UV = UV;
        this.accelX = accelX;
        this.accelY = accelY;
        this.accelZ = accelZ;
        this.magneticX = magneticX;
        this.magneticY = magneticY;
        this.magneticZ = magneticZ;
        this.gyroX = gyroX;
        this.gyroY = gyroY;
        this.gyroZ = gyroZ;
    }

}