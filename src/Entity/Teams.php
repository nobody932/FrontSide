<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\TeamsRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TeamsRepository::class)]
#[ApiResource]
class Teams
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255,)]
    private ?string $name = null;

    #[ORM\Column(length: 255, )]
    private ?string $picture = null;

    #[ORM\Column(length: 255, )]
    private ?string $title = null;

    #[ORM\Column(length: 255, )]
    private ?string $pictures = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(?string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getPicture(): ?string
    {
        return $this->picture;
    }

    public function setPicture(?string $picture): static
    {
        $this->picture = $picture;

        return $this;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(?string $title): static
    {
        $this->title = $title;

        return $this;
    }

    public function getPictures(): ?string
    {
        return $this->pictures;
    }

    public function setPictures(?string $pictures): static
    {
        $this->pictures = $pictures;

        return $this;
    }
}
