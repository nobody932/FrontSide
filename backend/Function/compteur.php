<?php
function setView (){
    $files= dirname(__DIR__). DIRECTORY_SEPARATOR.'data'.DIRECTORY_SEPARATOR.'compteur' ;
    if(file_exists($files)){
        $compteur =(int)file_get_contents($files);
        $compteur++;
    } else{
        file_put_contents($files, '1');
    }
};

