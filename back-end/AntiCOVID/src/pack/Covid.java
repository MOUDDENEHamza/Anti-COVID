package pack;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Covid {
	
	/** Attributes of contact */
	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)  
	private int id;
	
	private Date date;
	
	private int newCases;

	private int totalCases;
	
	private int recovered;
	
	private int death;
	
	public Date getDate() {
		return date;
	}
	
	public void setDate(Date date) {
		this.date = date;
	}
	
	public int getNewCases() {
		return newCases;
	}
	
	public void setNewCases(int newCases) {
		this.newCases = newCases;
	}
	
	public int getTotalCases() {
		return totalCases;
	}
	
	public void setTotalCases(int totalCases) {
		this.totalCases = totalCases;
	}
	
	public int getRecovered() {
		return recovered;
	}
	
	public void setRecovered(int recovered) {
		this.recovered = recovered;
	}
	
	public int getDeath() {
		return death;
	}
	
	public void setDeath(int death) {
		this.death = death;
	}
	
}
