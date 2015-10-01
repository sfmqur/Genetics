// All code in this file is for genepool Objects.

/*
vars to be created with object
this.numGenes
this.pool = new Array();
 */

function GenePool(numGenes){ //to randomly generate a genePool
    this.numGenes = numGenes;
    this.pool = new Array(numGenes*2);
    for(var x = 0; x < this.pool.length; x++){
        if((Math.random() * 2) + 1 == 0){
            this.pool[x] = false;
        }
        if((Math.random() * 2) + 1 != 0){
            this.pool[x] = true;
        }
    }
}

function GenePoolCopy(parent){ //to make a copy of existing genepool
    this.numGenes = parent.numGenes;
    this.pool = parent.pool;
}

function GenePoolChild(mother, father){ /* to create a genepool with one allele from each parent,  gender has
no application, they are just convenient placeholders*/
    var index = 0;
    if(mother.pool.length >= father.pool.length){
        this.numGenes = mother.pool.length/2;
    }else{
        this.numGenes = father.pool.length/2;
    }

    this.pool = new Array(this.numGenes*2);
    //todo: check if random is used correctly
    for(var x = 0;x <= this.numGenes; x++){
        //todo: the pool always ends up all trues
        if(Math.random() *2 == 0) {
            this.pool[index] = mother.pool[x];
            index++;
        }else{
            this.pool[index] = mother.pool[x+1];
            index++;
        }
        if(Math.random() *2 == 0){
            this.pool[index] = father.pool[x];
            index++;
        }else{
            this.pool[index] = father.pool[x+1];
            index++;
        }
    }
}



