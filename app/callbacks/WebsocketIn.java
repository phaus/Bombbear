package callbacks;

import handler.MessageHandler;
import models.messages.Message;
import models.messages.Update;
import models.messages.WorldUpdate;
import org.codehaus.jackson.JsonNode;
import play.Logger;
import play.libs.F;
import play.libs.Json;

public class WebsocketIn implements F.Callback<JsonNode> {

    private MessageHandler messageHandler = new MessageHandler();

    public void invoke(JsonNode event) {
        try {
            JsonNode eventType = event.get("type");
            if (eventType == null) {
                Logger.warn("Message has no type attribute - ignoring: " + event);
                return;
            }
            switch (eventType.asText()) {
                case Message.UPDATE:
                    Update update = Json.fromJson(event, Update.class);
                    messageHandler.handle(update);
                    break;
                case Message.WORLD_UPDATE:
                    WorldUpdate worldUpdate = Json.fromJson(event, WorldUpdate.class);
                    messageHandler.handle(worldUpdate);
                    break;
                default:
                    Logger.warn("Message has unknown type attribute - ignoring: " + event);
            }
        } catch (Exception e) {
            Logger.warn("Exception in websocket callback: " + e.getMessage());
        }
    }
}
