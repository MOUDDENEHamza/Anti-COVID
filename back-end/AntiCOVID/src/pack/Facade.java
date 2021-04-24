package pack;

import javax.ejb.Singleton;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.ws.rs.Consumes;
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
	@Path("/contact")
	@Consumes({"application/json"})
	public void contactAdministrator(Contact contact) {
		try    {
			EmailUtility.sendEmail(contact.getEmail(),
					contact.getSubject(), contact.getContent());
        } catch (javax.mail.MessagingException e) {
            e.printStackTrace();
        }
	}
	
}