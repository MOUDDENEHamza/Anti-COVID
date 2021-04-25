package pack;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Covid {
	
	/** Attributes of contact */
	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)  
	private Long id;
	
	private String date;
	
	private String newCases;

	private String totalCases;
	
	private String recovered;
	
	private String death;
	
	public Long getId() {
		return this.id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	public String getDate() {
		return date;
	}
	
	public void setDate(String date) {
		this.date = date;
	}
	
	public String getNewCases() {
		return newCases;
	}
	
	public void setNewCases(String newCases) {
		this.newCases = newCases;
	}
	
	public String getTotalCases() {
		return totalCases;
	}
	
	public void setTotalCases(String totalCases) {
		this.totalCases = totalCases;
	}
	
	public String getRecovered() {
		return recovered;
	}
	
	public void setRecovered(String recovered) {
		this.recovered = recovered;
	}
	
	public String getDeath() {
		return death;
	}
	
	public void setDeath(String death) {
		this.death = death;
	}
	
}
