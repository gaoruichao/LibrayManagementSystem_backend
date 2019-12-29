package domain;
public abstract class Actor {
    public Actor(){}
    public Actor(int id, String no, String name){
        this.id = id;
        this.no = no;
        this.name = name;
    }
    public int id;
    public String no;
    public String name;

    public abstract int getId();
    public abstract void setId(int id);
    public abstract String getNo();
    public abstract void setNo(String no);
    public abstract String getName();
    public abstract void setName(String name);
}
