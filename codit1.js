
// 여기에 logParticipant 함수를 작성해 주세요.
function logParticipant(name){
  console.log(`${name}(이)가 대화에 참여했습니다.`)
}

// 테스트 코드
logParticipant('동수');
logParticipant('윤하');
logParticipant('재준');
logParticipant('동훈');
logParticipant('영희');
logParticipant('신욱');


// 여기에 expressMultiplication 함수를 작성해 주세요.
function expressMultiplication(x,y){
  console.log(`${x} * ${y} = ${x*y}`)
}
// 테스트 코드
expressMultiplication(3, 4);
expressMultiplication(3, 2);
expressMultiplication(7, 5);
expressMultiplication(8, 9);
expressMultiplication(5, 5);
expressMultiplication(9, 9);


// 여기에 calculateRectangleArea 함수를 작성해 주세요.
function calculateRectangleArea(x,y){
  return x*y;
  
}

// 테스트 코드
let area1 = calculateRectangleArea(3, 4); // 가로 3, 세로 4인 직사각형의 넓이 계산
let area2 = calculateRectangleArea(5, 8); // 가로 5, 세로 8인 직사각형의 넓이 계산
let area3 = calculateRectangleArea(7, 2); // 가로 7, 세로 2인 직사각형의 넓이 계산

console.log(`Area1: ${area1}, Area2: ${area2}, Area3: ${area3}`);



// 여기에 orderSetMenu 함수를 작성해 주세요.
function orderSetMenu(sandwith, drink ='스프라이트'){
  console.log(`주문하신 ${sandwith}, ${drink} 세트메뉴 나왔습니다!`)
}

// 테스트 코드
orderSetMenu('코드웨잇 클럽');
orderSetMenu('터키베이컨 아보카도', '코카콜라');
orderSetMenu('코드웨잇 멜트');
orderSetMenu('이탈리안 비엠티', '닥터페퍼');
orderSetMenu('에그마요', '환타 오렌지');

// 아래에 adultTag, teenagerTag, errorTag, transferTag라는 변수들을 작성해 주세요.
const adultTag="삑!";
const teenagerTag="삑삑!"
const errorTag="삑삑삑!"
const transferTag="환승입니다."

// 아래에 tagCase파라미터를 가지는 tagNotification 함수를 작성해 주세요.
function tagNotification(tagCase){
  console.log(tagCase)
}

// 테스트 코드
tagNotification(adultTag);
tagNotification(teenagerTag);
tagNotification(transferTag);
tagNotification(errorTag);
tagNotification(adultTag);

// 파라미터 height을 활용하는 checkHeight 함수를 완성하세요.
function checkHeight(height) {
	// 여기에 코드를 작성해 주세요.
	if(height>=140){
	  console.log("탑승이 가능합니다.")
	}else{
	  console.log("탑승이 불가능합니다.")
	}
}

// 테스트 코드
checkHeight(140);
checkHeight(135);
checkHeight(170);

function printGrade(midtermScore, finalScore){
	let totalScore = midtermScore + finalScore;
  // 여기에 코드를 작성해 주세요.
  if(totalScore<60&&totalScore>0){
    console.log("F")
  }else if(totalScore>=60&&totalScore<70){
    console.log("D")
  }else if(totalScore>=70&&totalScore<80){
    console.log("C")
  }else if(totalScore>=80&&totalScore<90){
    console.log("B")
  }else if(totalScore>=90){
    console.log("A")}
}

// 테스트 코드
printGrade(25, 35);
printGrade(50, 45);
printGrade(29, 24);
printGrade(37, 42);

function printGrade(midtermScore, finalScore) {
  let totalScore = midtermScore + finalScore;

  if (totalScore >= 90) {
    console.log('A');
  } else if (totalScore >= 80) {
    console.log('B');
  } else if (totalScore >= 70) {
    console.log('C');
  } else if (totalScore >= 60) {
    console.log('D');
  } else {
    console.log('F');
  }
}

// 테스트 코드
printGrade(25, 35);
printGrade(50, 45);
printGrade(29, 24);
printGrade(37, 42);

// 나의 나이와, 나의 성별을 저장하는 변수
let myAge = 26;
let myGender = 'male';

// 호칭을 담은 변수
let callOlderBrother = '형';
let callOlderSister = '누나';
let callFriend = '친구';
let callYoungerSister = '여동생';
let callYoungerBrother = '남동생';

// 상대방의 나이와 성별에 따른 호칭을 리턴하는 함수 whatShouldICall를 완성하세요.
function whatShouldICallYou(yourAge, yourGender) {
  // 여기에 코드를 작성해 주세요.
  if(yourAge==26){
    return callFriend
  }else if (yourAge>26){
    if(yourGender=='male'){
      return callOlderBrother
    }else return callOlderSister
  }else{
    if(yourGender=='male'){
      return callYoungerBrother
    }else return callYoungerSister
  }
  
}

// 테스트 코드
let result1 = whatShouldICallYou(25, 'female');
let result2 = whatShouldICallYou(20, 'male');
let result3 = whatShouldICallYou(26, 'female');
let result4 = whatShouldICallYou(30, 'male');
let result5 = whatShouldICallYou(31, 'female');

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
