# Genetics
The library is the geneticsLibrary package.  A collection of classes that allow hereditary boolean arrays for use with
procedural generation.  Like biological genetics.

The concept is that a world, or anything else procedurally generated,  can be generated using the gene pool as the seed.
The seeds from two objects can be merged to create a child object with traits from both parents.  There are two alleles
per gene.  There will be a dominant allele and recessive allele.  Incomplete dominance will be put in later.

To create a proper build environment:
In the Genetics directory, run "npm install express ejs body-parser cookie-parser debug morgan serve-favicon"

To run the app:

In the Genetics directory, run "node bin/www"

http://proceduralgenetics.heroku.com

