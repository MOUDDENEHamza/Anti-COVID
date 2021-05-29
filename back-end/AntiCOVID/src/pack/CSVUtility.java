package pack;

import java.util.*;
import java.io.*;

public class CSVUtility {
	
	/**
	 * Split Structure_rais obtain via CSV file
	 * @param str contains the Structure_rais
	 * @return the region
	 */
	public static String splitStructureRais(String str) {
		int index  = 0;
		String res = "";
		String[] tmp = str.split(" ");
		for (int i = 0; i < tmp.length; i++) {
			if (tmp[i].equals("SANTE")) {
				index = i + 1;
				break;
			}
		}
		int first = index;
		while (index < tmp.length) {
			if (first == index && tmp[index].equals("DE")) {
				
			} else {
				if (index == tmp.length - 1) {
					res += tmp[index];
				} else {
					res += tmp[index] + " ";
				}
			}
			index++;
		}
		return res;
	}
	
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
		try (BufferedReader br = new BufferedReader(new FileReader(fileName))) {
		    String line;
		    while ((line = br.readLine()) != null) {
		        String[] values = line.split(";");
		        List<String> item = new ArrayList<>();
	        	if (!values[1].equals("nom")) {
			        item.add(values[1]);  							// nom				0
		        	item.add(values[5]);  							// adr_num			1
		        	item.add(values[6]);  							// adr_voie			2
		        	item.add(values[7]);  							// com_cp 			3
		        	item.add(values[9]);  							// com_nom 			4
		        	item.add(splitStructureRais(values[14])); 		// structure_rais	5
		        	if (values.length > 34) {
		        		item.add(values[34]); 						// rdv_site_web		6
		        	} else {
		        		item.add("");
		        	}
		        	if (values.length > 35) {
		        		item.add(values[35]);						// rdv_tel			7
		        	} else {
		        		item.add("");
		        	}
		        	
		        	records.add(item);
	        	}
		    }
		}
		return records;
	}

}
