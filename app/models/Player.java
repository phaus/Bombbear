package models;


public class Player {

    private String avatar;
    private int x;
    private int y;

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public int getX() {
        return x;
    }

    public void setX(int x) {
        this.x = x;
    }

    public int getY() {
        return y;
    }

    public void setY(int y) {
        this.y = y;
    }

    @Override
    public String toString() {
        return "Player{" +
                "avatar='" + avatar + '\'' +
                ", x=" + x +
                ", y=" + y +
                '}';
    }
}
