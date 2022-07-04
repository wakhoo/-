// 아래 코드중 잘못된 부분을 수정해 주세요.
let espresso = ['espresso'];

let americano = espresso.slice();
americano.push('water');

let caffeLatte = espresso.slice();
caffeLatte.push('milk');

// 여기에 caffeMocha와 vanillaLatte 레시피를 만들어 주세요.
let caffeMocha = caffeLatte.slice();
caffeMocha.push('chocolateSyrup');
let vanillaLatte = caffeLatte.slice();
vanillaLatte.push('vanillaSyrup');

// 테스트 코드
console.log(espresso);
console.log(americano);
console.log(caffeLatte);
console.log(caffeMocha);
console.log(vanillaLatte);

function factorial(n) {
  let result = 1;
	
	// 여기에 코드를 작성해 주세요.
	if(n==0){
	  return result;
	}else{
	  for(let i=0;i<n;i++){
	    result=result*(i+1);
	  }
	}

	
  return result;
}

// 테스트 코드
console.log(factorial(12));
console.log(factorial(6));
console.log(factorial(3));
console.log(factorial(0));


function calculateChange(payment, cost) {
  // 코드를 작성해 주세요.
  let temp=0;
  let count50=0;
  let count10=0;
  let count5=0;
  let count1=0;
  temp = payment-cost
  
  while(temp!=0){
    
    
    if(temp>=50000){
      count50++
      temp=temp-50000
    }else if(temp<50000&&temp>=10000){
      count10++
      temp=temp-10000
    }else if(temp<10000&&temp>=5000){
      count5++
      temp=temp-5000
    }else if(temp<5000&&temp>=1000){
      count1++
      temp=temp-1000
    }
  }
  console.log(`50000원 지폐: ${count50}장`)
  console.log(`10000원 지폐: ${count10}장`)
  console.log(`5000원 지폐: ${count5}장`)
  console.log(`1000원 지폐: ${count1}장`)
}

// 테스트 코드
calculateChange(100000, 33000);
console.log('');
calculateChange(500000, 378000);


function isPalindrome(word) {
  // 여기에 코드를 입력해 주세요.
  for (let i = 0; i < Math.floor(word.length / 2); i++) {
    let left = word[i];
    let right = word[word.length - 1 - i];
    if (left !== right) {
      return false;
    }
  }
  return true;
}

// 테스트 코드
console.log(isPalindrome("racecar"));
console.log(isPalindrome("stars"));
console.log(isPalindrome("기러기"));
console.log(isPalindrome("123321"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("kayak"));
