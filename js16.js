//[아이디 데이터 배열]
//Person
//“김수빈”,”김정민”,”오유나“,”김진수“,”김창순“,”이유림“,”하윤성”
//Userid
//“kimsubin”,”min1004”,”yuna0809”,”jinsulove”,”soon777”,”lim_lee79”,”hayunsung1313”
var id=[
	{"userid":"kimsubin","person":"김수빈"},
	{"userid":"min1004","person":"김정민"},
	{"userid":"yuna0890","person":"오유나"},
	{"userid":"jinsulove","person":"김진수"},
	{"userid":"soon777","person":"김창순"},
	{"userid":"lim_lee79","person":"이유림"},
	{"userid":"hayunsung1313","person":"하윤성"}
];	
//var key=Object.keys(id);
//console.log(keys.length);
function personid(a){
	
	var w=0,idx=-1;
	while(w<id.length){
		if(a==id[w]["userid"]){
			idx=w;
			break;
		}
		w++;
	}
	if (idx == -1) {
		console.log("해당 사용자는 검색대상에 없습니다");
	}
	else {
		console.log("결과값:" + id[idx]["userid"] + "고객명:" + id[idx]["person"]);
	}
}
