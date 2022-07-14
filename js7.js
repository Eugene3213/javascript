//20~40까지의 합을 모두 더하여 getter로 전송
function a(){
	var sum=0;
	for(vc=20; vc<41; vc++){
		sum=sum+vc;
	}
	var result=calcB(sum);
	console.log(result);
}