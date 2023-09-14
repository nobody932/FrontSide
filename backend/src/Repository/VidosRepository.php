<?php

namespace App\Repository;

use App\Entity\Vidos;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Vidos>
 *
 * @method Vidos|null find($id, $lockMode = null, $lockVersion = null)
 * @method Vidos|null findOneBy(array $criteria, array $orderBy = null)
 * @method Vidos[]    findAll()
 * @method Vidos[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class VidosRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Vidos::class);
    }

//    /**
//     * @return Vidos[] Returns an array of Vidos objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('v')
//            ->andWhere('v.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('v.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?Vidos
//    {
//        return $this->createQueryBuilder('v')
//            ->andWhere('v.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
