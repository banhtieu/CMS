package com.phuongjolly.cms.model;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

/**
 * Created by banhtieu on 5/5/15.
 */
@Document
public class Node {

    /**
     * The specific id
     */
    @Id
    private String id;

    /**
     * the created date
     */
    @CreatedDate
    private Date createAt;


    /**
     * @return The Id of this Object
     */
    public String getId() {
        return id;
    }

    /**
     * Get Create At
     * @return
     */
    public Date getCreateAt() {
        return createAt;
    }
}
