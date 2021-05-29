package pack;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class VaccinationCenter implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	/** Attributes of VaccinationCenter center */
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private String name;
	
	@OneToOne(mappedBy = "vaccinationCenter", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private Address address;
	
	@OneToOne(mappedBy = "vaccinationCenter", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private Appointment appointment;

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

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	public Appointment getAppointment() {
		return appointment;
	}

	public void setAppointment(Appointment appointment) {
		this.appointment = appointment;
	}

}
