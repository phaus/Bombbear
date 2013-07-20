package models;

import java.util.HashMap;
import java.util.Map;

import play.Logger;

public class Game {
	private final static String[] CHARS = { 
		"chara0", "chara1", "chara2",
		"chara3", "chara4", "chara5", 
		"chara6", "chara7" };

	private Map<String, String> players = new HashMap<String,String>();
	private int charCounter = 0;

	public Game(){
		Logger.info("starting new Game!");
	}
	
	public String getNextPlayerFor(String username) {
		if (!players.containsKey(username) && charCounter < CHARS.length) {
			String player =  CHARS[charCounter];
			Logger.info("Player "+username+" uses Char "+player);
			charCounter++;
			players.put(username, player);
			return player;
		}
		return null;
	}
}
