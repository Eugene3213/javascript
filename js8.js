/*data_a["hong","park","kim","jang"]
  data_b[2500,3400,1000,6200]
  data_c["S","V",'N',"N"]
  
  kim일 경우 [결과출력] data_a를 가지고 있는 사람이 최종 출력을 합니다.
  kim님 적급금은 1000이며, 일반회원 입니다
  
  data_b에서 출발 시 var user_id 변수 선언 user_id="jang";
  1. A user_id="jang" => B씨에게 전송
  2. B 해당 값이 있는지 없는지를 파악. 없을경우 "해당 사용자는 가입되지 않았습니다"
  	있을경우에는 index값을 보내 주어야 함
  	해당 index를 받은 A은 해당 적립금 금액을 return해줌
  3. B 해당 값을 받음
  4. 2번에서 B씨에게 받은 index값을 C에게 보냄
  	C씨 index값을 받아서 해당 배열에 회원 레벨을 return함.
  	A은 C씨에게 받은 레벨값을 B씨에 return하게 됨.
  5. 최종 B씨는 아이디, 적립금, 레벨 return값을 결과값처럼 출력*/
  
var data_a = ["hong","park","kim","jang"];
  function find_name(name_){
	var a = 0;
	while(a< data_a.length){
		
		if(data_a[a]==name_){
			break;
		}
		a++;
	}	
	
	if(a==4){
		console.log("해당 사용자는 가입되지 않았습니다")
	}
		return a;	
	
}
 