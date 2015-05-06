package com.phuongjolly.cms;

import com.phuongjolly.cms.database.Database;
import com.phuongjolly.cms.repository.NodeRepository;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = CmsApplication.class)
@WebAppConfiguration
public class CmsApplicationTests {

	@Test
	public void contextLoads() {
		NodeRepository nodeRepository = Database.getInstance().getNoteRepository();
		Assert.assertNotNull(nodeRepository);
	}

}
