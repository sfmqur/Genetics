function test() {
    function printPool(genePool){
        document.write('[');
        for(var x in genePool.pool){
            document.write(genePool.pool[x] + ',');
        }
        document.write(']');

    }
    var gene = new GenePool(3);
    printPool(gene);
}