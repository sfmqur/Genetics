package geneticsLibrary;

import java.util.Random;

public class GenePool {
	public int numGenes = 10;
	public boolean[] pool;  
	Random rand = new Random();
	
	public GenePool(int numGenes){
		pool = new boolean[2 * numGenes];
		for (int x = 0; x < pool.length; x++){
			if (rand.nextInt() % 2 == 0){
				pool[x] = false;
			}else{
				pool[x] = true;
			}
		}
	}
	public GenePool(GenePool parent){
		numGenes = parent.numGenes;
		pool = parent.pool;
	}
	public GenePool(GenePool mother, GenePool father){
		
	}
}
