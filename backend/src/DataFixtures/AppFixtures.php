<?php

namespace App\DataFixtures;
use App\Entity\Products;
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
            $manager->persist($product);
    
}
$manager->flush();

}
}
