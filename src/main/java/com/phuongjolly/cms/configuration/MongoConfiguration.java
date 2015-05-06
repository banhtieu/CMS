package com.phuongjolly.cms.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.config.AbstractMongoConfiguration;

import com.mongodb.Mongo;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;

@Configuration
public class MongoConfiguration extends AbstractMongoConfiguration {

    private MongoClientURI clientURI;

    // get database name
    @Override
    protected String getDatabaseName() {
        return getClientURI().getDatabase();
    }

    // get mongo
    @Override
    public Mongo mongo() throws Exception {
        return new MongoClient(getClientURI());
    }

    // get client URL
    public MongoClientURI getClientURI() {
        if (clientURI == null) {
            String clientURIString = System.getenv("MONGOHQ_URL");

            if (clientURIString == null) {
                clientURIString = "mongodb://localhost:27017/cms";
            }

            clientURI = new MongoClientURI(clientURIString);
        }

        return clientURI;
    }

}
