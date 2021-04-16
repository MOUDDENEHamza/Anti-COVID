package pack;

import javax.ejb.Singleton;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

@Singleton
@Path("/api")
public class Facade {

	@PersistenceContext
	EntityManager em;
	
	@GET
	@Path("/test")
    @Produces({ "application/json" })
	public String test() {
		return "TEST DONE WITH SUCCESS";
	}
	
}