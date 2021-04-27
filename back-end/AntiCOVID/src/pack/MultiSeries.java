package pack;

import java.util.Collection;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class MultiSeries {
	
	/** Attributes of contact */
	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)  
	private Long id;
	
	private String name;
	
	@OneToMany(mappedBy="chart", cascade = CascadeType.ALL)
	private Collection<Series> series;
	
	public Long getId() {
		return this.id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	public String getName() {
		return this.name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public Collection<Series> getSeries() {
		return this.series;
	}
	
	public void setSeries(Collection<Series> series) {
		this.series = series;
	}
	
}
