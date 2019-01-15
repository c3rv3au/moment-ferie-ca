Moment-ferie-ca
==================================================

Plug-in [Moment.js][1] jours feriés au Canada


exemple utilisation:
-----------

    var day = moment("9-6-2014", "DD-MM-YYYY");

    console.log( day.isFerie() );  // boolean
    console.log( day.getFerie() ); // string, 'Pentecôte'

    console.log( day.getFerieList() ); // array, liste jours feriés de l'année de day
    console.log( moment().getFerieList(2018) );  // array, liste jours feriés de l'année 2018

    console.log( day.lundiDePaques() ); // momentObj, jour de paques de l'année de day
    console.log( moment().lundiDePaques(2018) ); // momentObj, jour de paques de l'année 2018

    /*
    idem pour:

      day.ascension();
      day.pentecote();

      day.victoireDeAllies();
      day.feteNationaleFr();
      day.assomption();
      day.toussaint();
      day.armistice();

      day.jourDeLAn();
      day.feteNationaleCa();
      day.feteNationaleQc();
      day.feteDuTravail();
      day.paques();
      day.lundiDePaques();
      day.feteActionGrace();
      day.fetePatriote();
      day.noel();
    */


  [1]: http://momentjs.com/
