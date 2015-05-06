package net.sfmqur.Genetics;

import net.sfmqur.GeneticsLibrary.*;

public class App {
	public static void printPool(GenePool genePool) {
		if (genePool.name != null){
			System.out.println(genePool.name);
		}
		System.out.print("[");
		for (int x = 0; x < genePool.pool.length; x++) {
			System.out.print(genePool.pool[x] + ", ");
		}
		System.out.println("]");
	}

	public static void main(String[] args) { // used for testing as of now		
		GenePool thing = new GenePool(5);
		GenePool thong = new GenePool(5);
		GenePool ding = new GenePool(thing, thong);
		thing.name = "thing";
		thong.name = "thong";
		ding.name = "ding";
		
		printPool(thing);
		printPool(thong);
		printPool(ding);
	}
}
