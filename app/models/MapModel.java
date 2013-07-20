package models;

import java.util.ArrayList;
import java.util.List;

public class MapModel {
	private static final int _H = 44;
	private static final int _W = 80;
	public List<List<Integer>> fieldMap;
	public List<List<Integer>> colMap;
	private final static Integer ZERO = Integer.valueOf(0);

	public void fillUpField() {
		List<List<Integer>> out = new ArrayList<>();
		for (int i = 0; i < fieldMap.size(); i++) {
			out.add(getListWithZeroFile(fieldMap.get(i), _W));
		}
		for (int i = fieldMap.size(); i < _H; i++) {
			out.add(getZeroListWithCount(_W));
		}
		fieldMap = out;
	}

	public void fillUpCols() {
		List<List<Integer>> out = new ArrayList<>();
		for (int i = 0; i < colMap.size(); i++) {
			out.add(getListWithZeroFile(colMap.get(i), _W));
		}
		for (int i = colMap.size(); i < _H; i++) {
			out.add(getZeroListWithCount(_W));
		}
		colMap = out;
	}
	
	private List<Integer> getZeroListWithCount(int count) {
		List<Integer> c = new ArrayList<Integer>(count);
		for (int i = 0; i < count; i++) {
			c.add(ZERO);
		}
		return c;
	}
	
	private List<Integer> getListWithZeroFile(List<Integer> l, int count){
		List<Integer> c = new ArrayList<Integer>(count);
		for (int i = 0; i < count; i++) {
			if(i < l.size()){
				c.add(l.get(i));
			} else {
				c.add(ZERO);				
			}
		}
		return c;	
	}
}
