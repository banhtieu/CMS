package com.phuongjolly.cms.repository;

import com.phuongjolly.cms.model.Node;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Date;

/**
 * Created by banhtieu on 5/5/15.
 */
public interface NodeRepository extends MongoRepository<Node, String> {

    //Node findByCreateAt(Date createAt);
}
