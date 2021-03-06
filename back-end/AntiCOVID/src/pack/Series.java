package pack;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Series {
	
	/** Attributes of contact */
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)  
	@JsonIgnore
	private Long id;
	
	private String name;
	
	private int value;
	
	@ManyToOne
	@JsonIgnore
	MultiSeries chart;

	public Long getId() {
		return this.id;
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

	public int getValue() {
		return value;
	}

	public void setValue(int value) {
		this.value = value;
	}
	
	public MultiSeries getChart() {
		return chart;
	}

	public void setChart(MultiSeries chart) {
		this.chart = chart;
	}
	
	public String toString() {
		return "name : " + this.getName() + ", value : " + this.getValue() +"\n";
	}
}
