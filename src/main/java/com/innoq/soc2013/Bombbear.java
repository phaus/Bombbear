package com.innoq.soc2013;

import org.vertx.java.core.Handler;
import org.vertx.java.core.http.HttpServer;
import org.vertx.java.core.http.HttpServerRequest;
import org.vertx.java.core.http.RouteMatcher;
import org.vertx.java.platform.Verticle;

public class Bombbear extends Verticle {
    
    private final static String ASSETS_PATH = "/assets/.*";
    
    @Override
    public void start() {
        HttpServer server = vertx.createHttpServer();

        RouteMatcher routeMatcher = new RouteMatcher();

        routeMatcher.getWithRegEx(ASSETS_PATH, new Handler<HttpServerRequest>() {
            @Override
            public void handle(HttpServerRequest request) {
                
                String asset = request.path().substring(1);
                System.out.println(asset);
                request.response().sendFile(asset, "404.html");
            }
        });
        
        
        
        server.requestHandler(routeMatcher);
        server.listen(9000, "localhost");

    }

    

}
