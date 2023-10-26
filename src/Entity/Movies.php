<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\MoviesRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: MoviesRepository::class)]
#[ApiResource]
class Movies
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $titles = null;

    #[ORM\Column(length: 255)]
    private ?string $part = null;

    #[ORM\Column(length: 255)]
    private ?string $description = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $country = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitles(): ?string
    {
        return $this->titles;
    }

    public function setTitles(string $titles): static
    {
        $this->titles = $titles;

        return $this;
    }

    public function getPart(): ?string
    {
        return $this->part;
    }

    public function setPart(string $part): static
    {
        $this->part = $part;

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

    public function getCountry(): ?string
    {
        return $this->country;
    }

    public function setCountry(?string $country): static
    {
        $this->country = $country;

        return $this;
    }
}
