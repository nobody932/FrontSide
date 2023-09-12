<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class VidéosController extends AbstractController
{
    #[Route('/vid/os', name: 'app_vid_os')]
    public function index(): Response
    {
        return $this->render('vidéos/index.html.twig', [
            'controller_name' => 'VidéosController',
        ]);
    }
}
