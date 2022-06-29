let myVoca = {
	// 코드를 작성해 주세요.
function: '함수',
variable: '변수',
constant:'상수',
local:'지역의',
global: '전반적인'
};

console.log(myVoca);
console.log(myVoca.local);
console.log(myVoca.constant);
console.log(myVoca.function);

let myVoca = {
	function: '함수',
	variable: '변수',
	constant: '상수',
	local: '지역의',
	global: '전반적인',
};

// 1. 이미 외운 단어 3개를 삭제해 주세요.
// 여기에 코드를 작성해 주세요.
delete myVoca.function;
delete myVoca.local;
delete myVoca.constant;


console.log(myVoca);
console.log(myVoca.constant);


// 2. 오늘 외울 단어 4개를 추가해 주세요.
// 여기에 코드를 작성해 주세요.
	myVoca.extend = '확장하다'
	myVoca.export= '내보내다',
	myVoca.import= '불러오다',
	myVoca['default value']= '기본값'

console.log(myVoca);
console.log(myVoca.export);


// 3. default value의 뜻을 출력해 주세요.
// 여기에 코드를 작성해 주세요.
console.log(myVoca['default value'])


let myVoca = {
  // 코드를 작성해 주세요.
addVoca: function(key,value){
  myVoca[key]=value;
},
deleteVoca: function (del){
  delete myVoca[del]
},
printVoca: function (word){
  console.log(`"${word}"의 뜻은 "${myVoca[word]}"입니다.`)
}
};

// addVoca메소드 테스트 코드
myVoca.addVoca('parameter', '매개 변수');
myVoca.addVoca('element', '요소');
myVoca.addVoca('property', '속성');
console.log(myVoca);

// deleteVoca메소드 테스트 코드
myVoca.deleteVoca('parameter');
myVoca.deleteVoca('element');
console.log(myVoca);

// printVoca메소드 테스트 코드
myVoca.printVoca('property');


let hyesoonScore = {
	'데이터 모델링의 이해': 10,
	'데이터 모델과 성능': 8,
	'SQL 기본': 22,
	'SQL 활용': 18,
	'SQL 최적화 기본 원리': 20,
};

let minsoonScore = {
	'데이터 모델링의 이해': 14,
	'데이터 모델과 성능': 8,
	'SQL 기본': 12,
	'SQL 활용': 4,
	'SQL 최적화 기본 원리': 16,
};

function passChecker(scoreObject) {
	// 여기에 코드를 작성해 주세요.
	let sum=0
  for(let key in scoreObject){
    sum=sum+scoreObject[key]
  }
  if(sum>=60){
    console.log('축하합니다! 합격입니다!')
  }else{
    console.log('아쉽지만 불합격입니다..')
  }
}

passChecker(hyesoonScore);
passChecker(minsoonScore);


let today = new Date(2112, 8, 24);
let jaeSangStart = new Date(2109, 7, 1);

function workDayCalc(startDate) {
	// 여기에 코드를 작성해 주세요.
	let timeDiff=today.getTime()-startDate.getTime();
	let secondDiff = timeDiff / 1000;
let minuteDiff = secondDiff / 60;
let hourDiff = minuteDiff / 60;
let dayDiff = hourDiff / 24;
console.log(`오늘은 입사한 지 ${dayDiff+1}일째 되는 날 입니다.`)
}

workDayCalc(jaeSangStart);

let dataType = ['number', 'string', 'boolean', 'null', 'undefined', 'object'];

// 여기에 코드를 작성해 주세요.

for(let i=0;i in dataType;i++){
  console.log(dataType[i])
}


let celsiusTemps = [27, 25, 26, 22, 28, 27, 21];
let fahrenheitTemps = [];

// 여기에 코드를 작성해 주세요.
for(let i=0;i in celsiusTemps;i++){
  fahrenheitTemps[i]=(celsiusTemps[i]*9/5)+32;
}

// fahrenheitTemps 테스트
console.log(fahrenheitTemps);
