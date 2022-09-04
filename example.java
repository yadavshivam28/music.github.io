class a{
    void shivam(){
        System.out.println("class ka  shivam a method hai thik hai");
    }
}
class b extends a{
    void yadav(){
        System.out.println("jiisne class a ke method ko inhirte kara hai");
    }
}
class c extends b{
    void singh(){
        System.out.println("isne dekh kya inherte kara class a ka or class b ka ");
    }
    public static void main(String[] args) {
        c obj= new c();
        obj.shivam();
        obj.yadav();
        obj.singh();
    }
}