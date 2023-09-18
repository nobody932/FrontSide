<?php

namespace App\DataFixtures;
use App\Entity\Products;
use App\Entity\Articles;
use App\Entity\Movies;
use App\Entity\News;
use App\Entity\Vidos;
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
            
            $vidéo = new Movies();
            $vidéo->setPart('/FrontSide/frontend/src/vidéo skate/RIDE.mp4'.$i);
            $vidéo->setTitles("Titre de la vidéo:".$i);
            $vidéo->setDescription('Lorem'.$i);

            $news= new News();
            $news->setProduits('Titre du produit:'.$i);
            $news->setPrix('Prix:'.$i);
            $news->setDescrpition('Lorem');


            $manager->persist($product);
            $manager->persist($article);
            $manager->persist($vidéo);
            $manager->persist($news);
}
$manager->flush();

}
}
