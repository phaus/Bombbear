package models.messages;

public abstract class Message {

    public static final String UPDATE = "update";
    public static final String WORLD_UPDATE = "worldupdate";

    private String type;

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
