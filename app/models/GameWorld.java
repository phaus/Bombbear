package models;

import static akka.pattern.Patterns.ask;
import static java.util.concurrent.TimeUnit.SECONDS;

import java.util.HashMap;
import java.util.Map;

import org.codehaus.jackson.JsonNode;
import org.codehaus.jackson.node.ArrayNode;
import org.codehaus.jackson.node.ObjectNode;

import play.Logger;
import play.libs.Akka;
import play.libs.F.Callback;
import play.libs.F.Callback0;
import play.libs.Json;
import play.mvc.WebSocket;
import scala.concurrent.Await;
import scala.concurrent.duration.Duration;
import akka.actor.ActorRef;
import akka.actor.Props;
import akka.actor.UntypedActor;

public class GameWorld extends UntypedActor {

	// Default room.
	static ActorRef defaultRoom = Akka.system().actorOf(
			new Props(GameWorld.class));

	// Create a Robot, just for fun.

	/**
	 * Join the default room.
	 */
	public static void join(final String username, WebSocket.In<JsonNode> in,
			WebSocket.Out<JsonNode> out) throws Exception {

		// Send the Join message to the room
		String result = (String) Await.result(
				ask(defaultRoom, new Join(username, out), 1000),
				Duration.create(1, SECONDS));
		if ("OK".equals(result)) {

			// For each event received on the socket,
			in.onMessage(new Callback<JsonNode>() {
				public void invoke(JsonNode event) {
					if(event.get("text") != null){
						// Send a Talk message to the room.
						defaultRoom.tell(new Talk(username, event.get("text")
								.asText()), null);
						
					} else {
						defaultRoom.tell(
								new Update(
										event.get("character").asText(), 
										event.get("x").asInt(), 
										event.get("y").asInt()), null);	
					}

				}
			});

			// When the socket is closed.
			in.onClose(new Callback0() {
				public void invoke() {

					// Send a Quit message to the room.
					defaultRoom.tell(new Quit(username), null);

				}
			});

		} else {

			// Cannot connect, create a Json error.
			ObjectNode error = Json.newObject();
			error.put("error", result);

			// Send the error to the socket.
			out.write(error);

		}

	}

	// Members of this room.
	Map<String, WebSocket.Out<JsonNode>> members = new HashMap<String, WebSocket.Out<JsonNode>>();

	public void onReceive(Object message) throws Exception {
		if (message instanceof Join) {
			
			// Received a Join message
			Join join = (Join) message;

			// Check if this username is free.
			if (members.containsKey(join.username)) {
				getSender().tell("This username is already used", getSelf());
			} else {
				members.put(join.username, join.channel);
				notifyAll("join", join.username, "has entered the room");
				getSender().tell("OK", getSelf());
			}

		} else if (message instanceof Talk) {

			// Received a Talk message
			Talk talk = (Talk) message;

			notifyAll("talk", talk.username, talk.text);

		} else if (message instanceof Update) {
			Update update = (Update) message;
			notifyAllUpdates("update", update.character, update);
		} else if (message instanceof Quit) {

			// Received a Quit message
			Quit quit = (Quit) message;

			members.remove(quit.username);

			notifyAll("quit", quit.username, "has left the room");

		} else {
			unhandled(message);
		}

	}

	public void notifyAllUpdates(String kind, String user, Update update) {
		Logger.info("\n");
		for (WebSocket.Out<JsonNode> channel : members.values()) {
			ObjectNode event = Json.newObject();
			event.put("kind", kind);
			event.put("user", user);
			event.put("update", Json.toJson(update));
			ArrayNode m = event.putArray("members");
			for (String u : members.keySet()) {
				m.add(u);
			}
			Logger.info("sending:" + event.toString());
			channel.write(event);
		}
	}

	// Send a Json event to all members
	public void notifyAll(String kind, String user, String text) {
		for (WebSocket.Out<JsonNode> channel : members.values()) {

			ObjectNode event = Json.newObject();
			event.put("kind", kind);
			event.put("user", user);
			event.put("message", text);

			ArrayNode m = event.putArray("members");
			for (String u : members.keySet()) {
				m.add(u);
			}
			Logger.info("sending:" + event.toString());
			channel.write(event);
		}
	}

	// -- Messages

}
