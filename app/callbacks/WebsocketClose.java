package callbacks;

import models.GameWorld;
import models.Quit;
import play.Logger;
import play.libs.F;

public class WebsocketClose implements F.Callback0 {

    private String username;

    public WebsocketClose(String username) {
        this.username = username;
    }

    public void invoke() {
        Logger.info("close websocket");
        // Send a Quit message to the room.
        GameWorld.defaultRoom.tell(new Quit(username), null);
    }
}
