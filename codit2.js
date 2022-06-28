
// 각 등급별 가격
let VIPPrice = 15;
let RPrice = 13;
let SPrice = 10;
let APrice = 8;

// 각 등급에 맞는 가격을 출력하는 함수 checkPrice를 완성하세요.
function checkPrice(grade) {
	// 여기에 코드를 작성해 주세요.
	switch(grade){
	  case 'VIP':{
	    console.log(`${grade}석은 ${VIPPrice}만원 입니다.`)
	    break;
	  }
	  case 'R':{
	    console.log(`${grade}석은 ${RPrice}만원 입니다.`)
	    break;
	  }
	  	  case 'S':{
	    console.log(`${grade}석은 ${SPrice}만원 입니다.`)
	    break;
	  }
	  	  case 'A':{
	    console.log(`${grade}석은 ${APrice}만원 입니다.`)
	    break;
	  }
	  default:
	    console.log('VIP, R, S, A 중에서 하나를 선택해 주세요.')
	  
	  
	}
}

// 테스트 코드
checkPrice('R');
checkPrice('VIP');
checkPrice('S');
checkPrice('A');
checkPrice('B');

// 여기에 코드를 작성해 주세요.

for(let i=0;i<=100;i++){
  if(i%2==0&&i>1){
    console.log(i)
  }
}


function printTriangle(height) {
	// 여기에 코드를 작성해 주세요.
	let m1='*'
	let m=m1
	for(let i=0;i<height;i++){
	  
	  console.log(m)
	  m=m+m1
	}
}

// 테스트 코드
console.log('높이: 1');
printTriangle(1);

console.log('높이: 3');
printTriangle(3);

console.log('높이: 5');
printTriangle(5);


function printTriangle(height) {
  // 여기에 코드를 작성해 주세요.
  let message = '';
  for (let i = 0; i < height; i++) {
    message += '*';
    console.log(message);
  }
}

// 여기에 코드를 작성해 주세요.
let i=0
while(i<=100){
  if(i>0&&i%2==1){
    console.log(i)
  }
  i++
}

const N = 180;
// 여기에 코드를 작성해 주세요.
let count=0
let i=0

while(i<=N){
  if(N%i==0){
    console.log(i)
    count++
  }
  i++
}

console.log(`${N}의 약수는 총 ${count}개입니다.`)

// 여기에 코드를 작성해 주세요.

for(let i=1;i<10;i++){
  for(let j=1;j<10;j++){
    console.log(`${i} * ${j} = ${(i)*(j)}`)
  }
}


let count=1
let current=1
let previous=0
let temp=0
while(count<=50){
  
  console.log(current)
  temp=previous
  previous=current
  current=current+temp
  
