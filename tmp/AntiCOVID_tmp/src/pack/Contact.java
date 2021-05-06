package pack;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Contact {
	
	/** Attributes of contact */
	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)  
	private int id;
	
	private String firstName;
	
	private String lastName;
	
	private String email;
	
	private String subject;
	
	private String content;
	
	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return this.email;
	}
	
	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getSubject() {
		return this.subject;
	}
	
	public void setSubject(String subject) {
		this.subject = subject;
	}

	public String getContent() {
		return this.content;
	}

	public void setContent(String content) {
		this.content = content;
	} 
	
}