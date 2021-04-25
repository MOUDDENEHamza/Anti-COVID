package pack;

import java.io.IOException;
import java.math.BigInteger;
import java.nio.ByteBuffer;
import java.util.Collection;
import java.util.List;
import java.util.UUID;

import javax.ejb.Singleton;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

@Singleton
@Path("/")
public class Facade {

	@PersistenceContext
	EntityManager em;
    
    /**
     * Generate unique ID from UUID
     * @return long value representing UUID
     */
    public Long generateUniqueId() {
        long val = -1;
        do {
            final UUID uid = UUID.randomUUID();
            final ByteBuffer buffer = ByteBuffer.wrap(new byte[16]);
            buffer.putLong(uid.getLeastSignificantBits());
            buffer.putLong(uid.getMostSignificantBits());
            final BigInteger bi = new BigInteger(buffer.array());
            val = bi.longValue();
        }
        while (val < 0);
        	return val;
    }
    
	/**
	 * Update the database with the current data
	 * @throws IOException
	 * @throws InterruptedException
	 */
	@POST
	@Path("/covid_overview")
	public void updateCovidOverview() throws IOException, InterruptedException {
		try {
			List<List<String>> records = CSVUtility.parseCSVFile();
			for (int i = 0; i < records.size(); i++) {
				Covid covid = new Covid();
				covid.setId(generateUniqueId());
				covid.setDate(records.get(i).get(0));
				covid.setTotalCases(records.get(i).get(1));
				covid.setNewCases(records.get(i).get(2));
				covid.setRecovered(records.get(i).get(3));
				covid.setDeath(records.get(i).get(4));
				em.merge(covid);
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * Get all Covid data
	 * @return a collection of Covid entity
	 */
	@GET
	@Path("/covid_overview")
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