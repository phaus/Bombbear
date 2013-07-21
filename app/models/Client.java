package models;

import java.util.HashMap;
import java.util.Map;

public class Client {
	public String username;
	public String character;
	public Map<String, Integer> start = new HashMap<String,Integer>();
	
	public Client(String character, String username, Integer[] sPos) {
		this.username = username;
		this.character = character;
		this.start.put("x", sPos[0]);
		this.start.put("y", sPos[1]);
	}
}