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
    private ?string $store_picture = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $adress = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $store_name = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getStorePicture(): ?string
    {
        return $this->store_picture;
    }

    public function setStorePicture(string $store_picture): static
    {
        $this->store_picture = $store_picture;

        return $this;
    }

    public function getAdress(): ?string
    {
        return $this->adress;
    }

    public function setAdress(?string $adress): static
    {
        $this->adress = $adress;

        return $this;
    }

    public function getStoreName(): ?string
    {
        return $this->store_name;
    }

    public function setStoreName(?string $store_name): static
    {
        $this->store_name = $store_name;

        return $this;
    }
}
