<?php

namespace App\DataFixtures;
use App\Entity\Products;
use App\Entity\Articles;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        for($i = 0; $i < 50; $i++) {
            $product = new Products();
            $product->setName('Produit Numéro:'.$i);
            $product->setDescription('Lorem'.$i);

            $article = new Articles();
            $article->setImage('https://i.pinimg.com/1200x/18/a4/64/18a4640d6ac6ae89bcb981bf7dc0774b.jpg');
            $article->setTitle("Titre de l'articles:".$i);
            $article->setDescription('Lorem');
            
            $manager->persist($product);
            $manager->persist($article);
    
}
$manager->flush();

}
}
