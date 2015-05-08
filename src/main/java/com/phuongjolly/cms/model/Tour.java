package com.phuongjolly.cms.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * Created by banhtieu on 5/7/15.
 */

@Document
public class Tour {


    /**
     * The Id of this object
     */
    @Id
    private String id;

    /**
     * Title
     */
    private String title;


    /**
     * Description
     */
    private String description;


    public String getId() {
        return id;
    }


    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }


    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
