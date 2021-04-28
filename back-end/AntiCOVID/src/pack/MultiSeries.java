package pack;

import java.io.Serializable;
import java.util.Collection;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class MultiSeries implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	/** Attributes of contact */
	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
	@JsonIgnore
	private Long id;
	
	private String name;
	
	@OneToMany(mappedBy = "chart", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
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
