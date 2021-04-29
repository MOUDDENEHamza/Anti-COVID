package pack;

import java.util.*;
import java.io.*;

public class CSVUtility {
	
	/**
	 * Parse a CSV file and extract covid data stored on owid-covid-data.csv
	 * @throws FileNotFoundException 
	 * @throws CsvException 
	 * @throws IOException 
	 */
	public static List<List<String>> parseCSVCovidFile() throws FileNotFoundException, IOException {
		String fileName = "/home/hamza/Desktop/Anti-COVID/back-end/AntiCOVID/data/owid-covid-data.csv";
		List<List<String>> records = new ArrayList<>();
		try (BufferedReader br = new BufferedReader(new FileReader(fileName))) {
		    String line;
		    while ((line = br.readLine()) != null) {
		        String[] values = line.split(",");
		        List<String> item = new ArrayList<>();
		        
		        if ((values[2]).equals("France")) {
		        	item.add(values[3]); // date        0
		        	item.add(values[4]); // total_cases 1
		        	item.add(values[5]); // new_cases   2
		        	item.add(values[6]); // recovered   3
		        	item.add(values[8]); // death       4
		        	records.add(item);
		        }
		    }
		}
		return records;
	}
	
	/**
	 * Parse a CSV file and extract vaccin center data stored on centres-vaccination.csv
	 * @throws FileNotFoundException 
	 * @throws CsvException 
	 * @throws IOException 
	 */
	public static List<List<String>> parseCSVVaccinFile() throws FileNotFoundException, IOException {
		String fileName = "/home/hamza/Desktop/Anti-COVID/back-end/AntiCOVID/data/centres-vaccination.csv";
		List<List<String>> records = new ArrayList<>();
		return records;
	}

}
