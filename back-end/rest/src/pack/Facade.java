package pack;

import javax.ejb.Singleton;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;

@Singleton
@Path("/")
public class Facade {

	@PersistenceContext
	EntityManager em;
	
	/**
	 * Send an email to administrator from contact page
	 * @param contact will send the email to administrator
	 */
	@POST
	@Path("/contacts")
    @Consumes({ "application/json" })
	public void contactAdministrator(String json) {
		System.out.println(json);
	}
	
	@GET
	@Path("/toto")
	public void test() {
		System.out.println("test");
	}
	
}