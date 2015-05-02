package main;

import geneticsLibrary.*;

public class Genetics {

	public static void main(String[] args) {
		System.out.println("Hello World");
		GenePool thing = new GenePool(3);
		System.out.print("[");
		for(int x = 0; x < thing.pool.length; x++){
			System.out.print(thing.pool[x] + ", ");
		}
		System.out.print("]");
	}

}
