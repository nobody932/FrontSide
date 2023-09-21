<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\NewsRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: NewsRepository::class)]
#[ApiResource]
class News
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $produits = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $prix = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $images = null;


    #[ORM\Column(length: 255)]
    private ?string $description = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getProduits(): ?string
    {
        return $this->produits;
    }

    public function setProduits(string $produits): static
    {
        $this->produits = $produits;

        return $this;
    }

    public function getPrix(): ?string
    {
        return $this->prix;
    }

    public function setPrix(?string $prix): static
    {
        $this->prix = $prix;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getImages(): ?string
    {
        return $this->images;
    }

    public function setImages(?string $images): static
    {
        $this->images = $images;

        return $this;
    }
}
