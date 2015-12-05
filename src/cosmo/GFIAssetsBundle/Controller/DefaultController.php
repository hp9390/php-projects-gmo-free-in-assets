<?php

namespace cosmo\GFIAssetsBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('cosmoGFIAssetsBundle:Default:index.html.twig');
    }
}
