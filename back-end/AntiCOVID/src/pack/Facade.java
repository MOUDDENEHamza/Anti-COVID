package pack;

import java.io.IOException;
import java.math.BigInteger;
import java.nio.ByteBuffer;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.UUID;

import javax.ejb.Singleton;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

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
    
	/*************************************************************************/
    
	/**
	 * Update the database with the current data of new cases
	 * @throws IOException
	 * @throws InterruptedException
	 */
	@POST
	@Path("/new_cases")
	public void updateNewCases() throws IOException, InterruptedException {
		try {
			MultiSeries multiSeries = new MultiSeries();
			multiSeries.setName("New_cases");
			ArrayList<Series> series = new ArrayList<>();
			List<List<String>> records = CSVUtility.parseCSVCovidFile();
			for (int i = 0; i < records.size(); i++) {
				Series item = new Series();
				item.setName(records.get(i).get(0));
				item.setValue(Math.abs(Float.valueOf(records.get(i).get(2)).intValue()));
				item.setChart(multiSeries);
				series.add(item);
			}
			multiSeries.setSeries(series);
			em.persist(multiSeries);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * Get new cases data
	 * @return a collection of MultiSeries entity
	 */
	@GET
	@Path("/new_cases")
	@Produces({"application/json"})
	public Collection<MultiSeries> getNewCases() {
		return em.createQuery("SELECT m FROM MultiSeries m WHERE m.name = :name")
				.setParameter("name", "New_cases").getResultList();
	}
	
	/**
	 * Update the database with the current data of new cases
	 * @throws IOException
	 * @throws InterruptedException
	 */
	@POST
	@Path("/total_cases")
	public void updateTotalCases() throws IOException, InterruptedException {
		try {
			MultiSeries multiSeries = new MultiSeries();
			multiSeries.setName("Total_cases");
			ArrayList<Series> series = new ArrayList<>();
			List<List<String>> records = CSVUtility.parseCSVCovidFile();
			for (int i = 0; i < records.size(); i++) {
				Series item = new Series();
				item.setName(records.get(i).get(0));
				item.setValue(Math.abs(Float.valueOf(records.get(i).get(1)).intValue()));
				item.setChart(multiSeries);
				series.add(item);
			}
			multiSeries.setSeries(series);
			em.persist(multiSeries);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * Get total cases data
	 * @return a collection of MultiSeries entity
	 */
	@GET
	@Path("/total_cases")
	@Produces({"application/json"})
	public Collection<MultiSeries> getTotalCases() {
		return em.createQuery("SELECT m FROM MultiSeries m WHERE m.name = :name")
				.setParameter("name", "Total_cases").getResultList();
	}
	
	/**
	 * Update the database with the current data of new cases
	 * @throws IOException
	 * @throws InterruptedException
	 */
	@POST
	@Path("/recovered")
	public void updateRecovered() throws IOException, InterruptedException {
		try {
			MultiSeries multiSeries = new MultiSeries();
			multiSeries.setName("Recovered");
			ArrayList<Series> series = new ArrayList<>();
			List<List<String>> records = CSVUtility.parseCSVCovidFile();
			for (int i = 0; i < records.size(); i++) {
				Series item = new Series();
				item.setName(records.get(i).get(0));
				if (records.get(i).get(3).equals("")) {
					item.setValue(0);
				} else {
					item.setValue(Math.abs(Float.valueOf(records.get(i).get(3)).intValue()));
				}
				item.setChart(multiSeries);
				series.add(item);
			}
			multiSeries.setSeries(series);
			em.persist(multiSeries);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * Get recovered cases data
	 * @return a collection of MultiSeries entity
	 */
	@GET
	@Path("/recovered")
	@Produces({"application/json"})
	public Collection<MultiSeries> getRecovered() {
		return em.createQuery("SELECT m FROM MultiSeries m WHERE m.name = :name")
				.setParameter("name", "Recovered").getResultList();
	}
	
	/**
	 * Update the database with the current data of new cases
	 * @throws IOException
	 * @throws InterruptedException
	 */
	@POST
	@Path("/death")
	public void updateDeath() throws IOException, InterruptedException {
		try {
			MultiSeries multiSeries = new MultiSeries();
			multiSeries.setName("Death");
			ArrayList<Series> series = new ArrayList<>();
			List<List<String>> records = CSVUtility.parseCSVCovidFile();
			for (int i = 0; i < records.size(); i++) {
				Series item = new Series();
				item.setName(records.get(i).get(0));
				if (records.get(i).get(4).equals("")) {
					item.setValue(0);
				} else {
					item.setValue(Math.abs(Float.valueOf(records.get(i).get(4)).intValue()));
				}
				item.setChart(multiSeries);
				series.add(item);
			}
			multiSeries.setSeries(series);
			em.persist(multiSeries);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * Get death cases data
	 * @return a collection of MultiSeries entity
	 */
	@GET
	@Path("/death")
	@Produces({"application/json"})
	public Collection<MultiSeries> getDeath() {
		return em.createQuery("SELECT m FROM MultiSeries m WHERE m.name = :name")
				.setParameter("name", "Death").getResultList();
	}
	
	/*************************************************************************/
	
	/**
	 * Update the database with the current data of vaccination center
	 */
	@POST
	@Path("/vaccination_center")
	public void updateVaccin() {
		try {
			List<List<String>> records = CSVUtility.parseCSVVaccinFile();
			for (int i = 0; i < records.size(); i++) {
				VaccinationCenter vc = new VaccinationCenter();
				vc.setName(records.get(i).get(0));
				Address a = new Address();
				if (records.get(i).get(1).length() > 0 ) {
					a.setNumber(records.get(i).get(1));
				} else {
					a.setNumber("");
				}
				a.setStreet(records.get(i).get(2));
				if (records.get(i).get(3).length() > 0) {
					a.setZipCode(records.get(i).get(3));	
				} else {
					a.setZipCode("");
				}
				a.setCity(records.get(i).get(4));
				a.setRegion(records.get(i).get(5));
				a.setVaccinationCenter(vc);
				vc.setAddress(a);
				Appointment rdv = new Appointment();
				rdv.setWebSite(records.get(i).get(6));
				rdv.setPhoneNumber(records.get(i).get(7));
				rdv.setVaccinationCenter(vc);
				vc.setAppointment(rdv);
				em.persist(vc);
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * Get vaccinationCenters data
	 * @return a collection of VaccinationCenter
	 */
	@GET
	@Path("/vaccination_center")
	@Produces({"application/json"})
	public Collection<VaccinationCenter> getVaccin() {
		return em.createQuery("FROM VaccinationCenter", VaccinationCenter.class).getResultList();
	}
	
	/*************************************************************************/
	
	@GET
	@Path("/get_users_list")
	@Produces({"application/json"})
	public Collection<User> getUsersList() {
		return em.createQuery("FROM User", User.class).getResultList();
	}
	
	@GET
	@Path("/get_user_by_email")
	@Consumes({MediaType.TEXT_PLAIN})
	@Produces({"application/json"})
	public User getUserByEmail(String email) {
		User user = null;
		Query query = em.createQuery("SELECT u FROM User u WHERE u.email = :email")
		.setParameter("email", email);
		try {
			user = (User) query.getSingleResult();
		} catch (NoResultException e) {
			System.out.println("This user does not exist.");
			return null;
		}
		return user;	
	}
	
	@POST
	@Path("/add_user")
	@Consumes({"application/json"})
	public void addUser(User user) {
		em.persist(user);
	}
	
	/*************************************************************************/
	
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