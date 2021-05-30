package pack;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.ejb.Singleton;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;


@Singleton
@Path("/")
public class Facade {
	
	@PersistenceContext
	EntityManager em;
    
	/*************************************************************************/
	/*									HOME								 */
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
	@SuppressWarnings("unchecked")
	@GET
	@Path("/new_cases")
	@Produces({"application/json"})
	public Collection<MultiSeries> getNewCases() {
		Query query = em.createQuery("SELECT m FROM MultiSeries m WHERE m.name = :name")
				.setParameter("name", "New_cases");
		return query.getResultList();
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
	@SuppressWarnings("unchecked")
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
	@SuppressWarnings("unchecked")
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
	@SuppressWarnings("unchecked")
	@GET
	@Path("/death")
	@Produces({"application/json"})
	public Collection<MultiSeries> getDeath() {
		return em.createQuery("SELECT m FROM MultiSeries m WHERE m.name = :name")
				.setParameter("name", "Death").getResultList();
	}
	/*************************************************************************/
	
	/*************************************************************************/
	/*									VACCIN								 */
	/*************************************************************************/
	/**
	 * Update the database with the current data of VaccinationCenter
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
					a.setZipCode(Float.valueOf(records.get(i).get(3)).intValue());	
				} else {
					a.setZipCode(-1);
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
	
	/**
	 * Get VaccinationCenter by region
	 * @param region we are looking for
	 * @return collection of all VaccinationCenter in the given region
	 */
	@SuppressWarnings("unchecked")
	@GET
	@Path("/vaccination_center/region={region}")
	@Produces({"application/json"})
	public Collection<VaccinationCenter> getVaccinationCenterByRegion(@PathParam("region") String region) {
		return em.createQuery("SELECT v FROM VaccinationCenter v WHERE v.address.region = :region") 
				.setParameter("region", region).getResultList();
	}
	
	/**
	 * Get VaccinationCenter by region and department
	 * @param region we are looking for
	 * @param zipCode of you department
	 * @return collection of all VaccinationCenter in the given region and
	 * department
	 */
	@SuppressWarnings("unchecked")
	@GET
	@Path("/vaccination_center/region={region}&zipCode={zipCode}")
	@Produces({"application/json"})
	public Collection<VaccinationCenter> getVaccinationCenterByRegion(@PathParam("region") String region,
			@PathParam("zipCode") int zipCode) {
		int threshold = Float.valueOf(zipCode).intValue() + 1000;
		return em.createQuery("SELECT v FROM VaccinationCenter v"
				+ " WHERE v.address.region = :region AND v.address.zipCode >= :zipCode"
				+ " AND v.address.zipCode < :threshold") 
				.setParameter("region", region)
				.setParameter("zipCode", zipCode)
				.setParameter("threshold", threshold)
				.getResultList();
	}
	/*************************************************************************/
	
	/*************************************************************************/
	/*									FORUM								 */
	/*************************************************************************/
	/**
	 * Get the list of all post stored on the database
	 * @return collection of all existing posts
	 */
	@GET
	@Path("/get_posts_list")
	@Produces({"application/json"})
	public Collection<Post> getPostsList() {
		return em.createQuery("FROM Post", Post.class).getResultList();
	}
	
	/**
	 * Add a new post to the database
	 * @param post we want store on the database
	 */
	@POST
	@Path("/add_post")
	@Consumes({"application/json"})
	public void addPost(Post post) {
		em.persist(post);
	}
	
	/**
	 * Add a comment to an existing post
	 * @param id of the existing post
	 * @param comment we want to add to the post
	 */
	@PUT
	@Path("/post_id={id}/add_comment")
	@Consumes({"application/json"})
	public void addComment(@PathParam("id") String id, Comment comment) {
		if (comment == null) {
			System.out.println("Comment null");
		} else {
			em.persist(comment);
			Post post = em.find(Post.class, Float.valueOf(id).intValue());
			post.getComments().add(comment);
			em.merge(post);
		}
	}
	
	/**
	 * Delete all the posts on the database
	 */
	@DELETE
	@Path("/delete_posts_list")
	public void deletePostsList() {
		Collection<Post> l = em.createQuery("FROM Post", Post.class).getResultList();
		for (Post p : l) {
			em.remove(p);
		}
	}
	/*************************************************************************/
	
	/*************************************************************************/
	/*									USER								 */
	/*************************************************************************/
	/**
	 * Get all existing user on the database
	 * @return the collection of all users
	 */
	@GET
	@Path("/get_users_list")
	@Produces({"application/json"})
	public Collection<User> getUsersList() {
		return em.createQuery("FROM User", User.class).getResultList();
	}
	
	/**
	 * Get user by their credentials
	 * @param email of the user we are looking for
	 * @param password corresponding on the previous email
	 * @return the user if he exists on the database, otherwise we return a
	 * not found response
	 */
	@GET
	@Path("/get_user_by_email/email={email}&password={password}")
	@Produces({"application/json"})
	public Response getUserByEmail(@PathParam("email") String email, @PathParam("password") String password) {
		try {
			Query query = em.createQuery("SELECT u FROM User u WHERE u.email = :email AND u.password = :password")
			.setParameter("email", email)
			.setParameter("password", password);
			User user = (User) query.getSingleResult();
			return Response.status(Response.Status.OK).entity(user).build();
		} catch (NoResultException e) {
			System.out.println("This .");
			return Response.status(Response.Status.NOT_FOUND).entity("ERROR : User does not exist\n").build();
		}	
	}
	
	/**
	 * Add a new user to the database
	 * @param user we want to add
	 * @return OK response if the user doesn't exist, otherwise
	 * INTERNAL_SERVER_ERROR if the user already exists
	 */
	@POST
	@Path("/add_user")
	@Consumes({"application/json"})
	public Response addUser(User user) {
		Query query = em.createQuery("SELECT u FROM User u WHERE u.email = :email AND u.password = :password")
				.setParameter("email", user.getEmail())
				.setParameter("password", user.getPassword());
		if (!query.getResultList().isEmpty()) {
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity("ERROR : User already exists\n").build();
		} 
		em.persist(user);
		return Response.status(Response.Status.OK).entity("User has been created with success\n").build();
	}
	
	/**
	 * 	Update an existing user
	 * @param user we want to update
	 * @return NOT_FOUND response if the user doesn't exist,
	 * INTERNAL_SERVER_ERROR if the user given on parameter already exists,
	 * otherwise OK response is returned
	 */
	@PUT
	@Path("/update_user")
	@Consumes({"application/json"})
	public Response updateUser(User user) {
		User u = em.find(User.class, user.getId());
		if (u == null) {
			return Response.status(Response.Status.NOT_FOUND).entity("ERROR : User doesn't exist\n").build();
		}
		Query query = em.createQuery("SELECT u FROM User u WHERE u.email = :email AND u.password = :password")
				.setParameter("email", user.getEmail())
				.setParameter("password", user.getPassword());
		if (!query.getResultList().isEmpty()) {
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity("ERROR : User already exists\n").build();
		} 
		em.merge(user);
		return Response.status(Response.Status.OK).entity("User has been updated with success\n").build();
	}
	
	/**
	 * Delete all existing user on the database
	 */
	@DELETE
	@Path("/delete_users_list")
	public void deleteUsersList() {
		Collection<User> l = em.createQuery("FROM User", User.class).getResultList();
		for (User u : l) {
			em.remove(u);
		}
	}
	
	/**
	 * Delete user by a given id from database
	 * @param id of the user we want delete
	 * @return NOT_FOUND response if the user doesn't exist, otherwise OK
	 * response will be returned
	 */
	@GET
	@Path("/delete_user/id={id}")
	public Response deleteUserByID(@PathParam("id") int id) {
		User user = em.find(User.class, id);
		if (user == null) {
			return Response.status(Response.Status.NOT_FOUND).entity("ERROR : User doesn't exist\n").build();
		}
		em.remove(user);
		return Response.status(Response.Status.OK).entity("User has been deleted with success\n").build();
	} 
	/*************************************************************************/
	
	/*************************************************************************/
	/*									CONTACT								 */
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
	/*************************************************************************/
	
}