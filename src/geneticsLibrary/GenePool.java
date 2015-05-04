package geneticsLibrary;

import java.util.Random;

public class GenePool {
	public int numGenes = 10;
	public boolean[] pool;  
	Random rand = new Random();
	
	public GenePool(int numGenes){ // to randomly generate a gene pool
		pool = new boolean[2 * numGenes];
		for (int x = 0; x < pool.length; x++){
			if (rand.nextInt() % 2 == 0){
				pool[x] = false;
			}else{
				pool[x] = true;
			}
		}
	}
	public GenePool(GenePool parent){ // To make a copy of existing object
		numGenes = parent.numGenes;
		pool = parent.pool;
	}
	public GenePool(GenePool mother, GenePool father){ //to create a child object.  With one allele from each parent. 
		int index = 0;
		for (int x = 0; x < pool.length/2; x += 2){
			if (rand.nextInt(2) == 0){
				pool[index] = mother.pool[x];
				index++;
			}else{
				pool[index] = mother.pool[x+1];
				index++;
			} 
			if(rand.nextInt(2) == 0){
				pool[index] = father.pool[x];
				index++;
			}else{
				pool[index] = father.pool[x+1];
				index++;
			}
		}
	}
}
