<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\StoreRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: StoreRepository::class)]
#[ApiResource]
class Store
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $StorePicture = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $Adress = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $StoreName = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getStorePicture(): ?string
    {
        return $this->StorePicture;
    }

    public function setStorePicture(?string $StorePicture): static
    {
        $this->StorePicture = $StorePicture;

        return $this;
    }

    public function getAdress(): ?string
    {
        return $this->Adress;
    }

    public function setAdress(?string $Adress): static
    {
        $this->Adress = $Adress;

        return $this;
    }

    public function getStoreName(): ?string
    {
        return $this->StoreName;
    }

    public function setStoreName(?string $StoreName): static
    {
        $this->StoreName = $StoreName;

        return $this;
    }
}
