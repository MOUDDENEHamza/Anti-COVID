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
	public static List<List<String>> parseCSVFile() throws FileNotFoundException, IOException {
		String fileName = "/home/hamza/Desktop/Anti-COVID/back-end/AntiCOVID/data/owid-covid-data.csv";
		List<List<String>> records = new ArrayList<>();
		try (BufferedReader br = new BufferedReader(new FileReader(fileName))) {
		    String line;
		    while ((line = br.readLine()) != null) {
		        String[] values = line.split(",");
		        List<String> item = new ArrayList<>();
		        
		        if ((values[2]).equals("France")) {
		        	item.add(values[3]);
		        	item.add(values[4]);
		        	item.add(values[5]);
		        	item.add(values[6]);
		        	item.add(values[8]);
		        	records.add(item);
		        }
		    }
		}
		return records;
	}

}
