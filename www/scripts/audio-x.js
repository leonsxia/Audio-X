$(function() {
    var release = 0.3;
    var attack = 0.3;
    var C = new Pizzicato.Sound({ 
        source: 'wave',
        options: {
            type: 'sine',
            frequency: 261.6,
            attack: attack,
            release: release
        }
    });
    C.volume = 0.2;

    var D = new Pizzicato.Sound({ 
        source: 'wave',
        options: {
            type: 'sine',
            frequency: 293.6,
            attack: attack,
            release: release
        }
    });
    D.volume = 0.2;

    var E = new Pizzicato.Sound({ 
        source: 'wave',
        options: {
            type: 'sine',
            frequency: 329.6,
            attack: attack,
            release: release
        }
    });
    E.volume = 0.2;

    var F = new Pizzicato.Sound({ 
        source: 'wave',
        options: {
            type: 'sine',
            frequency: 349.2,
            attack: attack,
            release: release
        }
    });
    F.volume = 0.2;

    var G = new Pizzicato.Sound({ 
        source: 'wave',
        options: {
            type: 'sine',
            frequency: 392,
            attack: attack,
            release: release
        }
    });
    G.volume = 0.2;

    var A = new Pizzicato.Sound({ 
        source: 'wave',
        options: {
            type: 'sine',
            frequency: 440,
            attack: attack,
            release: release
        }
    });
    A.volume = 0.2;

    var B = new Pizzicato.Sound({ 
        source: 'wave',
        options: {
            type: 'sine',
            frequency: 493.8,
            attack: attack,
            release: release
        }
    });
    B.volume = 0.2;

    var time1 = 400;
    var time2 = 800;
    var seq = [
        // 1st bar
        {tone: C, time: time1}, 
        {tone: C, time: time1},
        {tone: G, time: time1},
        {tone: G, time: time1},
        {tone: A, time: time1},
        {tone: A, time: time1},
        {tone: G, time: time2},
        // 2nd bar
        {tone: F, time: time1},
        {tone: F, time: time1},
        {tone: E, time: time1},
        {tone: E, time: time1},
        {tone: D, time: time1},
        {tone: D, time: time1},
        {tone: C, time: time2},
        // 3rd bar
        {tone: G, time: time1},
        {tone: G, time: time1},
        {tone: F, time: time1},
        {tone: F, time: time1},
        {tone: E, time: time1},
        {tone: E, time: time1},
        {tone: D, time: time2},
        // 4th bar
        {tone: G, time: time1},
        {tone: G, time: time1},
        {tone: F, time: time1},
        {tone: F, time: time1},
        {tone: E, time: time1},
        {tone: E, time: time1},
        {tone: D, time: time2},
        // 5th bar
        {tone: C, time: time1}, 
        {tone: C, time: time1},
        {tone: G, time: time1},
        {tone: G, time: time1},
        {tone: A, time: time1},
        {tone: A, time: time1},
        {tone: G, time: time2},
        // 6th bar
        {tone: F, time: time1},
        {tone: F, time: time1},
        {tone: E, time: time1},
        {tone: E, time: time1},
        {tone: D, time: time1},
        {tone: D, time: time1},
        {tone: C, time: time2},
    ];

    $('.play').on('click', function () {
        var tone = $(this).parent().attr('class');
        switch (tone) {
            case 'C': 
                C.play();
                break;
            case 'D': 
                D.play();
                break;
            case 'E': 
                E.play();
                break;
            case 'F': 
                F.play();
                break;
            case 'G': 
                G.play();
                break;
            case 'A':
                A.play();
                break;
            case 'B': 
                B.play();
                break;
            case 'littleStar':
                palyLittleStar(seq);
                break;
        }
    });

    $('.stop').on('click', function () {
        var tone = $(this).parent().attr('class');
        switch (tone) {
            case 'C': 
                C.stop();
                break;
            case 'D': 
                D.stop();
                break;
            case 'E': 
                E.stop();
                break;
            case 'F': 
                F.stop();
                break;
            case 'G': 
                G.stop();
                break;
            case 'A':
                A.stop();
                break;
            case 'B': 
                B.stop();
                break;
            case 'littleStar':
                break;
        }
    });

    function palyLittleStar(seq) {
        for (i= 0 ; i < seq.length; i++) {
            seq[i].tone.play();
            sleep(seq[i].time);
            seq[i].tone.stop();
        }
    }

    function sleep(milliSeconds) {
        var startTime = new Date().getTime();
        while (new Date().getTime() < startTime + milliSeconds);
    }    
});