package models;

import java.util.HashMap;
import java.util.Map;

import play.Logger;

public class Game {
	private final static String[] CHARS = { "chara0", "chara1", "chara2",
			"chara3", "chara4", "chara5", "chara6", "chara7" };

	private final static Map<String, Integer[]> POSITIONS = new HashMap<String, Integer[]>();
	static{
		POSITIONS.put( "chara0", new Integer [] {32,32});
		POSITIONS.put( "chara1", new Integer [] {64,32});
		POSITIONS.put( "chara2", new Integer [] {32,64});
		POSITIONS.put( "chara3", new Integer [] {64,64});
		POSITIONS.put( "chara4", new Integer [] {32,48});
		POSITIONS.put( "chara5", new Integer [] {48,32});
		POSITIONS.put( "chara6", new Integer [] {48,48});
		POSITIONS.put( "chara7", new Integer [] {0,0});
	}
	private Map<String, Client> players = new HashMap<String, Client>();
	private int charCounter = 0;

	public Game() {
		Logger.info("starting new Game!");
	}

	public String getNextPlayerFor(String username, String ip) {
		if(players.containsKey(ip)){
			return players.get(ip).character;
		}
		if (!players.containsKey(username) && charCounter < CHARS.length) {
			String player = CHARS[charCounter];
			Logger.info("Player " + username + " uses Char " + player);
			charCounter++;
			players.put(ip, new Client(player, username, POSITIONS.get(player)));
			return player;
		}
		return null;
	}

	public Client getPlayer(String ip){
		return players.get(ip);
	}
	
	public Map<String, Client> getPlayers() {
		return players;
	}
}
