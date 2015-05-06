package com.phuongjolly.cms.database;

import com.phuongjolly.cms.repository.NodeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Component;

/**
 * Created by banhtieu on 5/5/15.
 */
@EnableAutoConfiguration
@Component
public class Database {

    /**
     * The Note Repository
     */
    @Autowired
    private NodeRepository noteRepository;

    /**
     * The default instance
     */
    private static Database instance;

    /**
     * Default constructor
     */
    public Database() {
        instance = this;
    }

    /**
     * Get the database Instance
     * @return
     */
    public static Database getInstance() {
        return instance;
    }


    /**
     * Get the Note Repository
     * @return
     */
    public NodeRepository getNoteRepository() {
        return noteRepository;
    }
}
