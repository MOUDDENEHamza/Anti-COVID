package pack;

import com.opencsv.CSVReader;
import com.opencsv.exceptions.CsvException;

import java.io.FileReader;
import java.io.IOException;
import java.util.List;

public class CSVUtility {
	
	/**
	 * Parse a CSV file and extract covid data stored on owid-covid-data.csv
	 * @throws CsvException 
	 * @throws IOException 
	 */
	public static void parseCSVFile() throws IOException, CsvException {
		String fileName = "data/owid-covid-data.csv";
        try (CSVReader reader = new CSVReader(new FileReader(fileName))) {
            List<String[]> r = reader.readAll();
            for (int i = 0; i < r.size(); i++) {
            	System.out.println(r.get(i));
            }
        }
	}

}
