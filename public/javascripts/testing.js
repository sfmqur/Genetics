function test() {
    function printPool(genePool){
        document.write('[');
        for(var x in genePool.pool){
            document.write(genePool.pool[x] + ',');
        }
        document.writeln('] <br>');

    }

    var mom = new Object();
    mom.pool = [true,true,true,true,true,true];
    mom.numGenes = 3;
    printPool(mom);
    var dad = new Object();
    dad.pool = [false,false,false,false,false,false];
    dad.numGenes = 3;
    printPool(dad);
    document.write("<br>");
    var child = new GenePoolChild(mom, dad);
    printPool(child);
    var child2 = new GenePoolChild(mom, dad);
    printPool(child2);
    var child3 = new GenePoolChild(mom, dad);
    printPool(child3);
}