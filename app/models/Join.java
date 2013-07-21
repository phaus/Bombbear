package models;

import org.codehaus.jackson.JsonNode;

import play.Logger;
import play.mvc.WebSocket;

public class Join {

	final String username;
	final WebSocket.Out<JsonNode> channel;

	public Join(String username, WebSocket.Out<JsonNode> channel) {
		this.username = username;
		this.channel = channel;
		Logger.info("Join: " + username + " to " + channel.toString());
	}

}