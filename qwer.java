
public class qwer {

	public static void main(String[] args) {
	
		login a= new login();
		a.print();
			System.out.println();
		login b= new login();
		b.print();
			System.out.println();
	}

}
class login{
	String name;
	String order;
	
	public String getlogin(){
		return name;
	}
	
	public void setlogin(String name, String order){
		this.name=name;
		this.order=order;
	}
	public void print() {
		System.out.println(this.name+"님 환영합니다");
		System.out.println(this.order+"님 주문하신 내역이 없습니다");
	}
}
class login2 extends login {
	String name;

	public String getlogin2() {
		return this.name;
	}
	public void setlogin2(String name) {
		this.name=name;
	}
	@Override
	public void print() {
		System.out.println(getlogin());
	}
}
class login3 extends login {
	String order;

	public String getlogin3() {
		return this.order;
	}
	public void setlogin3(String order) {
		this.order=order;
	}
	@Override
	public void print() {
		System.err.println(getlogin());
	}
}