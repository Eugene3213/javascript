package homework;

import java.util.Scanner;

public class test2_2 {

	public static void main(String[] args) {
//		검색할 사용자 이름을 검색하게 됩니다. (메인 메소드에서 실행)
//
//		사용자 리스트는 다음과 같습니다.  (외부 클래스 및 외부 메소드에서 제작)
//		강보경, 권용환, 금새록, 김동주, 김민재, 성유리, 손진호, 안희성
//
//		해당 리스트 정보는 별도의 메소드 에서 생성해야 합니다.
//		사용자가 입력된 이름이 있을 경우 "해당 사용자가 있습니다." 라고 출력하고
//		없을 경우 "해당 사용자는 가입 되지 않았습니다." 라고 출력합니다.
//
//		힌트 : 메인메소드에서 Scanner 작동 하며, 데이터 검색은 외부 Class 및 외부 메소드에서 처리
	
		Scanner sc =new Scanner(System.in);
			System.out.println("사용자 이름을 검색하시오");
		String a=sc.next();
		
		name.namelist(a);
			sc.close();
	}
}
class name{
	
	public static void namelist(String a) {
		String list[]= {"강보경","권용환","금새록","김동주","김민재","성유리","손진호","안희성"};
		
		int w=0;
		int e=list.length;
		//boolean name=true;
		while(w<e) {
			if(a.equals(list[w])) {
				System.out.println("해당 사용자가 있습니다");
				break;
			}
			else if(a.equals(list[w])){
				System.out.println("해당 사용자는 가입 되지 않았습니다");
			}
			else {
				System.out.println("해당 사용자는 가입 되지 않았습니다");
			}
			w++;
		}
	}
}