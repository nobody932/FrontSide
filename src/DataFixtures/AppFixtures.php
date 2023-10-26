<?php

namespace App\DataFixtures;

use App\Entity\Articles;
use App\Entity\Movies;
use App\Entity\News;
use App\Entity\Teams;
use App\Entity\Store;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class AppFixtures extends Fixture
{

    private $userPasswordHasher;

    public function __construct(UserPasswordHasherInterface $userPasswordHasher)
    {
        $this->userPasswordHasher = $userPasswordHasher;
    }

    public function load(ObjectManager $manager): void
    {

        $user = new User();
        $user->setEmail("user@front-side.fr");
        $user->setPassword($this->userPasswordHasher->hashPassword($user, "user@front-side.fr"));
        $user->setRoles(["ROLE_USER"]);
        $manager->persist($user);

        $userAdmin = new User();
        $userAdmin->setEmail("admin@front-side.fr");
        $userAdmin->setPassword($this->userPasswordHasher->hashPassword($userAdmin, "admin@front-side.fr"));
        $userAdmin->setRoles(["ROLE_ADMIN"]);
        $manager->persist($userAdmin);

        for($i = 0; $i < 50; $i++) 
        {
            $article = new Articles();
            $article->setImage('https://i.pinimg.com/1200x/18/a4/64/18a4640d6ac6ae89bcb981bf7dc0774b.jpg');
            $article->setTitle("Titre de l'articles:".$i);
            $article->setDescription('Lorem');
            
            $video = new Movies();
            $video->setTitle("Titre de la vidéo:".$i);
            $video->setMovie('https://media.istockphoto.com/id/970489194/fr/vid%C3%A9o/groupe-de-jeunes-gens-skateboard-sur-la-route-dans-larrondi-de-sugnal-de-morningwith-rouge.mp4?s=mp4-640x640-is&k=20&c=l8swlCDqD23h4a4W8PGFY3Z2ss-yqrHZee9ywMoau4o='.$i);
            $video->setDescription('Lorem'.$i);
            $video->setCountry("France");

            $news = new News();
            $news->setTitle('Titre du produit:'.$i);
            $news->setPrix('Prix:'.$i);
            $news->setDescription('Lorem');
            $news->setImages('https://img.freepik.com/free-vector/extreme-skateboarding-colored-hand-drawn-background-with-young-man-helmet-knee-pads-skating-city-streets-skate-ramp_1284-60790.jpg?w=2000');
            $news->setProduits("Planche");
            $news->setLink('');

            $teams = new Teams;
            $teams->setName('Nom:'.$i);
            $teams->setPicture('https://www.freevector.com/uploads/vector/preview/13159/FreeVector-Skater-Background-Template.jpg');
            $teams->setTitle('Titre de la part:'.$i);
            $teams->setVideo('https://media.istockphoto.com/id/1063555264/fr/vid%C3%A9o/bouchent-ralenti-de-skateur-faire-truc-flip-extr%C3%AAme.mp4?s=mp4-640x640-is&k=20&c=TR6rvHx1K1tQ9fyxt8062JDeOGpNcV2Nr_xThQEjZBo=');

            $store = new Store;
            $store->setStoreName('Nom:'.$i);
            $store->setStorePicture('https://media.istockphoto.com/id/472077397/fr/photo/venise-skate-trucs-magasin-californie-%C3%A9tats-unis.jpg?s=2048x2048&w=is&k=20&c=f6AB6EzCVx4jPlmyv6LiqqelEPg8CjH0mCRgjEq-nNk=');
            $store->setAdress('26 rue de la rampe');

            $manager->persist($article);
            $manager->persist($video);
            $manager->persist($news);
            $manager->persist($teams);
            $manager->persist($store);
        }

        $manager->flush();
    }
}
