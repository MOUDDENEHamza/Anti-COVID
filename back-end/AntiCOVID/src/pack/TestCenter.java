package pack;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class TestCenter implements Serializable {

	/**
	 * Attribute is an identifier that is used to Serialize&Deserialize an
	 * object.
	 */
	private static final long serialVersionUID = 1L;
	
	/** Attributes of TestCenter */
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	String name;
	
	String localisation;
	
	int pcr;
	
	int antigenic;
	
	String mode;
	
	String phone;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLocalisation() {
		return localisation;
	}

	public void setLocalisation(String localisation) {
		this.localisation = localisation;
	}

	public int getPcr() {
		return pcr;
	}

	public void setPcr(int pcr) {
		this.pcr = pcr;
	}

	public int getAntigenic() {
		return antigenic;
	}

	public void setAntigenic(int antigenic) {
		this.antigenic = antigenic;
	}

	public String getMode() {
		return mode;
	}

	public void setMode(String mode) {
		this.mode = mode;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}
	
}
