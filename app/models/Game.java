package models;

import java.util.HashMap;
import java.util.Map;

import play.Logger;

public class Game {
	private final static String[] CHARS = { "chara0", "chara1", "chara2",
			"chara3", "chara4", "chara5", "chara6", "chara7" };

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
			players.put(ip, new Client(player, username));
			return player;
		}
		return null;
	}

	public Map<String, Client> getPlayers() {
		return players;
	}
	
	class Client {
		public String username;
		public String character;
		public Client(String character, String username){
			this.username = username;
			this.character = character;
		}
	}
}
