package models.messages;

import models.Player;

import java.util.List;

public class WorldUpdate extends Message {

    private List<Player> players;

    public WorldUpdate() {
        setType(WORLD_UPDATE);
    }
    public WorldUpdate(List<Player> players) {
        setType(WORLD_UPDATE);
        this.players = players;
    }

    public List<Player> getPlayers() {
        return players;
    }

    public void setPlayers(List<Player> players) {
        this.players = players;
    }

    @Override
    public String toString() {
        return "WorldUpdate{" +
                "players=" + players +
                '}';
    }
}
