package models.messages;

import models.Player;

public class Update extends Message {

    private Player player;

    public Update() {
        setType(UPDATE);
    }

    public Update(Player player) {
        setType(UPDATE);
        this.player = player;
    }

    public Player getPlayer() {
        return player;
    }

    public void setPlayer(Player player) {
        this.player = player;
    }

    @Override
    public String toString() {
        return "Update{" +
                "player=" + player +
                '}';
    }
}
