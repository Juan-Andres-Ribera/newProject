let questionArr = [
    'When',
    'How',
    'Why ',
    'What',
    'Which',
];
let auxiliaryArr = [
    'do',
    'did',
];

let personArr = [
    'Jack',
    'Marty',
    'Philly',
    'Marine',
    'Miguel',

];

let verbArrInfinitive = [
    'fly',
    'cook',
    'run',
    'hit',
    'ignore',
    
];

let verbArrPast = [
    'flew',
    'cooked',
    'ran',
    'hit',
    'ignored',
];

// # CREATE A FUNCTION TO JOIN THESE ARRAYS

const generatePhrase = (questionArr,auxiliaryArr,personArr,verbArrInfinitive,verbArrPast) => {
    questionArr = questionArr[(Math.floor(Math.random()*questionArr.length))]
    auxiliaryArr = auxiliaryArr[(Math.floor(Math.random()*auxiliaryArr.length))]
    personArr = personArr[(Math.floor(Math.random()*personArr.length))]
    verbArrInfinitive = verbArrInfinitive[(Math.floor(Math.random()*verbArrInfinitive.length))]
    verbArrPast = verbArrPast[(Math.floor(Math.random()*verbArrPast.length))];

    if (auxiliaryArr = 'did') {
        console.log(`${questionArr} ${auxiliaryArr} ${personArr} ${verbArrInfinitive}`);
    }   else {
        console.log(`${questionArr} ${auxiliaryArr} ${personArr} ${verbArrPast}`);
    }

    
    
    
    
    console.log('This is just a test');

};

generatePhrase(questionArr,auxiliaryArr,personArr,verbArrPast,verbArrInfinitive,);


