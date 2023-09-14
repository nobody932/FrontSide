<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\VidosRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: VidosRepository::class)]
#[ApiResource]
class Vidéos
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $Title = null;

    #[ORM\Column(length: 255)]
    private ?string $Vidéo = null;

    #[ORM\Column]
    private ?int $Description = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->Title;
    }

    public function setTitle(string $Title): static
    {
        $this->Title = $Title;

        return $this;
    }

    public function getVidéo(): ?string
    {
        return $this->Vidéo;
    }

    public function setVidéo(string $Vidéo): static
    {
        $this->Vidéo = $Vidéo;

        return $this;
    }

    public function getDescription(): ?int
    {
        return $this->Description;
    }

    public function setDescription(int $Description): static
    {
        $this->Description = $Description;

        return $this;
    }
}
