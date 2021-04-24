package pack;

import java.io.IOException;
import java.util.Collection;

import javax.ejb.Singleton;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import com.opencsv.exceptions.CsvException;

@Singleton
@Path("/")
public class Facade {

	@PersistenceContext
	EntityManager em;
    
	@POST
	@Path("/get_covid_overview")
	public void updateCovidOverview() {
		try {
			CSVUtility.parseCSVFile();
		} catch (IOException | CsvException e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * Get all Covid data
	 * @return a collection of Covid entity
	 */
	@GET
	@Path("/get_covid_overview")
	@Produces({"application/json"})
	public Collection<Covid> getCovidOverview() {
		return em.createQuery("from Covid", Covid.class).getResultList();
	}
	
	/**
	 * Send an email to administrator from contact page
	 * @param contact will send the email to administrator
	 */
	@POST
	@Path("/contact")
	@Consumes({"application/json"})
	public void contactAdministrator(Contact contact) {
		try {
			em.persist(contact);
			EmailUtility.sendEmail(contact.getEmail(),
					contact.getSubject(), contact.getContent());
        } catch (javax.mail.MessagingException e) {
            e.printStackTrace();
        }
	}
	
}