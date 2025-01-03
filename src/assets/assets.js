import arrLeft from '../../src/assets/arrowLeft.png'
import arrRight from '../../src/assets/arrowRight.png'
import m1 from '../../src/assets/m1.png'
import m2 from '../../src/assets/m2.png'
import m3 from '../../src/assets/m3.png'
import m4 from '../../src/assets/m4.png'
import w1 from '../../src/assets/w1.png'
import w2 from '../../src/assets/w2.png'
import w3 from '../../src/assets/w3.png'
import w4 from '../../src/assets/w4.png'
import cross from '../../src/assets/c.png'
import b2 from '../../src/assets/b2.png'
import logo from '../../src/assets/GYM24.png'
import first from '../../src/assets/first.png'
import second from '../../src/assets/second.png'
import third from '../../src/assets/third.png'
import fourth from '../../src/assets/fourth.png'
import youtube from '../../src/assets/yt.png'
import sotra from '../../src/assets/sotra.png'
import smallLine from '../../src/assets/smallLine.png'
import insta from '../../src/assets/insta.png'
import face from '../../src/assets/face.png'
import twitter from '../../src/assets/twitter.png'
import time from '../../src/assets/icon_time.png'
import call from '../../src/assets/icon_call.png'
import toll from '../../src/assets/tools.png'
import email from '../../src/assets/email.png'
import tick from '../../src/assets/tick.png'
import fitness from '../../src/assets/fitness.png'
import burger from '../../src/assets/burger.png'
import yeloTick from '../../src/assets/yellTick.png'
export const asset = {
    arrLeft,
    b2,
    m1,
    cross,
    m2,
    m3,
    burger,
    m4,
    w1,
    w2,
    w3,
    w4,
    logo,
    first,
    arrRight,
    second,
    yeloTick,
    third,
    fourth,
    youtube,
    sotra,
    smallLine,
    insta,
    face,
    twitter,
    time,
    call,
    toll,
    email,
    tick,
}

export const memberShip = [
    {
        _id:1,
        text:"Pass ‘Trial’ $0",
        image:tick,
        yelo:yeloTick,
        t1:"Access to the gym from 8:00 to 14:00",
        t2:"The trainer on duty will introduce you to the gym",
        t5:"Buy"
    },
    {
        _id:2,
        text:"Pass ‘Easy Start’ $119",
        image:tick,
        yelo:yeloTick,
        t1:"Visit without restrictions 24/7",
        t2:"Individual training program",
        t3:"Access to the VTRAINER application",
        t4:"Trainer support",
        t5:"Buy"
    },
    {
        _id:3,
        text:"Pass ‘Free Time’ $49",
        image:tick,
        yelo:yeloTick,
        t1:"The entrance time to the gym is from 14:00 to 16:00",
        t2:"Without suspension of gym membership",
        t3:"The trainer on duty will introduce you to the gym",
        t5:"Buy"
    },
    {
        _id:4,
        text:`Pass ‘1 Month 24/7’ $85`,
        image:tick,
        yelo:yeloTick,
        t1:`Visit without restrictions 24/7`,
        t2:`The trainer on duty will introduce you to the gym`,
        t5:"Buy"
    },
    {
        _id:5,
        text:"Pass ‘In Shape(AM)’ $165",
        image:tick,
        yelo:yeloTick,
        t1:"Training in mini-groups until 14:00",
        t2:"Without suspension of gym membership",
        t3:"Classes with a trainer in a mini-group 3 times a week",
        t4:"Trainer Support",
        t5:"Buy"
    },
    {
        _id:6,
        text:"Pass ‘In Shape(PM)’ $195",
        image:tick,
        yelo:yeloTick,
        t1:"Training in mini-groups until 17:00",
        t2:"Without suspension of gym membership",
        t3:"Classes with a trainer in a mini-group 3 times a week",
        t4:"Trainer Support",
        t5:"Buy"
    },
]

export const reasonToJoin = [
    {
        _id:1,
        image:sotra,
        heading:"15000 sq.m.",
        text:"A spacious gym for sports – a safe distance between exercise machines"
    },
    {
        _id:2,
        image:toll,
        heading:"More than 200 equipment",
        text:"No queues at the simulators. Premium equipment from LifeStyle, Hammer Strength, TechnoGym.",
    },
    {
        _id:3,
        image:fitness,
        heading:"4 fitness zone",
        text:"From cardio to functional and cycle. Separate area for boxing and mixed martial arts",
    },
    {
        _id:4,
        image:time,
        heading:"Round-the-clock operation",
        text:"The gym is open 24 hours a day, also works on all holidays and weekends",
    }
]

export const trainer = [
    {
        _id: "hdieian",
        image: w1,
        name: "Victoria Shurpik",
        yt: youtube,
        instagram: insta,
        twitter: twitter,
        experience: "5 years",
        description: "A specialist in strength training and HIIT (High-Intensity Interval Training) focuses on building strength through resistance exercises and improving cardiovascular fitness with short, intense workout intervals. Expert in yoga and mindfulness training.",
        abilities: ["Yoga", "Meditation", "Flexibility"],
        shifts: ["Day", "Night"],
    },
    {
        _id: "hfhiw",
        image: w2,
        name: "Elizabeth Lavrinenko",
        yt: youtube,
        instagram: insta,
        twitter: twitter,
        experience: "3 years",
        description: "A specialist in strength training and HIIT (High-Intensity Interval Training) focuses on building strength through resistance exercises and improving cardiovascular fitness with short, intense workout intervals. Specialist in strength training and HIIT workouts.",
        abilities: ["Strength Training", "HIIT", "Endurance Building"],
        shifts: ["Day"],
    },
    {
        _id: "aneiw30",
        image: m1,
        name: "Ivan Gladkikh",
        yt: youtube,
        instagram: insta,
        twitter: twitter,
        experience: "6 years",
        description: "A specialist in strength training and HIIT (High-Intensity Interval Training) focuses on building strength through resistance exercises and improving cardiovascular fitness with short, intense workout intervals. Certified personal trainer with a focus on bodybuilding.",
        abilities: ["Bodybuilding", "Nutritional Advice", "Powerlifting"],
        shifts: ["Night"],
    },
    {
        _id: "heu8w3h",
        image: w3,
        name: "Lyudmila Sabilo",
        yt: youtube,
        instagram: insta,
        twitter: twitter,
        experience: "4 years",
        description: "A specialist in strength training and HIIT (High-Intensity Interval Training) focuses on building strength through resistance exercises and improving cardiovascular fitness with short, intense workout intervals. Pilates and core strength specialist.",
        abilities: ["Pilates", "Core Strength", "Posture Correction"],
        shifts: ["Day", "Night"],
    },
    {
        _id: "ris3f8f2",
        image: m2,
        name: "Evgeny Gurkov",
        yt: youtube,
        instagram: insta,
        twitter: twitter,
        experience: "7 years",
        description: "A specialist in strength training and HIIT (High-Intensity Interval Training) focuses on building strength through resistance exercises and improving cardiovascular fitness with short, intense workout intervals. Focuses on athletic performance and injury prevention.",
        abilities: ["Athletic Training", "Injury Prevention", "Speed Training"],
        shifts: ["Day"],
    },
    {
        _id: "647ggfu8",
        image: m3,
        name: "Anatoly Prytytsky",
        yt: youtube,
        instagram: insta,
        twitter: twitter,
        experience: "5 years",
        description: "A specialist in strength training and HIIT (High-Intensity Interval Training) focuses on building strength through resistance exercises and improving cardiovascular fitness with short, intense workout intervals. Specialist in functional training and mobility exercises.",
        abilities: ["Functional Training", "Mobility", "Balance"],
        shifts: ["Night"],
    },
    {
        _id: "49hnfns",
        image: m4,
        name: "Victor Ludkovich",
        yt: youtube,
        instagram: insta,
        twitter: twitter,
        experience: "8 years",
        description: "A specialist in strength training and HIIT (High-Intensity Interval Training) focuses on building strength through resistance exercises and improving cardiovascular fitness with short, intense workout intervals. Expert in endurance sports and marathon preparation.",
        abilities: ["Endurance Training", "Marathon Preparation", "Long-Distance Running"],
        shifts: ["Day", "Night"],
    },
    {
        _id: "784hhfei",
        image: w4,
        name: "Maria Masyak",
        yt: youtube,
        instagram: insta,
        twitter: twitter,
        experience: "2 years",
        description: "A specialist in strength training and HIIT (High-Intensity Interval Training) focuses on building strength through resistance exercises and improving cardiovascular fitness with short, intense workout intervals. New but promising trainer specializing in Zumba.",
        abilities: ["Zumba", "Dance Fitness", "Aerobics"],
        shifts: ["Night"],
    },
];
