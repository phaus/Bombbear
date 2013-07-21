package handler;

import models.GameWorld;
import models.messages.Update;
import models.messages.WorldUpdate;
import play.Logger;

public class MessageHandler {

    public void handle(Update update) {
        Logger.info("received update:" + update);
        GameWorld.defaultRoom.tell(new Object());
    }

    public void handle(WorldUpdate worldUpdate) {
        Logger.info("received worldUpdate:" + worldUpdate);
    }
}
