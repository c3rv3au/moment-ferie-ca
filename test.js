var moment = require("./moment-ferie-ca");
var assert = require("assert");

var y2013 = moment("2013", "YYYY");
assert.equal(y2013.victoireDeAllies().format("DD/MM/YYYY"), "08/05/2013");
assert.equal(y2013.ascension().format("DD/MM/YYYY"), "09/05/2013");
assert.equal(y2013.pentecote().format("DD/MM/YYYY"), "20/05/2013");

var y2014 = moment("2014", "YYYY");
assert.equal(y2014.noel().format("DD/MM/YYYY"), "25/12/2014");
assert.equal(y2014.lundiDePaques().format("DD/MM/YYYY"), "21/04/2014");
assert.equal(y2014.ascension().format("DD/MM/YYYY"), "29/05/2014");
assert.equal(y2014.pentecote().format("DD/MM/YYYY"), "09/06/2014");
assert.equal(y2014.jourDeLAn().format("DD/MM/YYYY"), "01/01/2014");
//assert.equal(y2014.feteDuTravail().format("DD/MM/YYYY"), "01/05/2014");
assert.equal(y2014.victoireDeAllies().format("DD/MM/YYYY"), "08/05/2014");
assert.equal(y2014.feteNationaleFr().format("DD/MM/YYYY"), "14/07/2014");
assert.equal(y2014.assomption().format("DD/MM/YYYY"), "15/08/2014");
assert.equal(y2014.toussaint().format("DD/MM/YYYY"), "01/11/2014");
assert.equal(y2014.armistice().format("DD/MM/YYYY"), "11/11/2014");

assert.equal(moment().noel(2015).format("DD/MM/YYYY"), "25/12/2015");
assert.equal(moment().lundiDePaques(2015).format("DD/MM/YYYY"), "06/04/2015");
assert.equal(moment().ascension(2015).format("DD/MM/YYYY"), "14/05/2015");
assert.equal(moment().pentecote(2015).format("DD/MM/YYYY"), "25/05/2015");
assert.equal(moment().jourDeLAn(2015).format("DD/MM/YYYY"), "01/01/2015");
//assert.equal(moment().feteDuTravail(2015).format("DD/MM/YYYY"), "01/05/2015");
assert.equal(moment().victoireDeAllies(2015).format("DD/MM/YYYY"), "08/05/2015");
assert.equal(moment().feteNationaleFr(2015).format("DD/MM/YYYY"), "14/07/2015");
assert.equal(moment().assomption(2015).format("DD/MM/YYYY"), "15/08/2015");
assert.equal(moment().toussaint(2015).format("DD/MM/YYYY"), "01/11/2015");
assert.equal(moment().armistice(2015).format("DD/MM/YYYY"), "11/11/2015");

//console.log( moment("2015", "YYYY").getFerieList());
assert.equal(moment("2015", "YYYY").getFerieList()[0].name, "Jour de l\'an");
assert.equal(moment("2015", "YYYY").getFerieList()[0].date.format("DD/MM/YYYY"), "01/01/2015");

// Quebec and Canada
assert.equal(moment().fetePatriote(2018).format("DD/MM/YYYY"), "21/05/2018");
assert.equal(moment().feteDuTravail(2018).format("DD/MM/YYYY"), "03/09/2018");
assert.equal(moment().feteActionGrace(2018).format("DD/MM/YYYY"), "08/10/2018");
assert.equal(moment().lundiDePaques(2018).format("DD/MM/YYYY"), "02/04/2018");

assert.equal(moment().feteNationaleQc(2019).format("DD/MM/YYYY"), "24/06/2019");
assert.equal(moment().feteNationaleCa(2019).format("DD/MM/YYYY"), "01/07/2019");
assert.equal(moment().feteNoel(2019).format("DD/MM/YYYY"), "25/12/2019");
assert.equal(moment().fetePatriote(2019).format("DD/MM/YYYY"), "20/05/2019");
assert.equal(moment().feteDuTravail(2019).format("DD/MM/YYYY"), "02/09/2019");
assert.equal(moment().feteActionGrace(2019).format("DD/MM/YYYY"), "14/10/2019");
assert.equal(moment().lundiDePaques(2019).format("DD/MM/YYYY"), "22/04/2019");

var day = moment("9-6-2014", "DD-MM-YYYY");
assert.equal(true, day.isFerie());
assert.equal(day.getFerie(), "Pentecôte");

//day : 09/06/14 is a Monday but is "ferie"
assert.equal(false, day.isWorkingDay());
day.subtract(2, "days");
// now day is "saturday"
assert.equal(false, day.isWorkingDay());
// go to "sunday"
day.add(1, "days");
assert.equal(false, day.isWorkingDay());
//return to "tuesday"
day.add(2, "days");
assert.equal(true, day.isWorkingDay());

process.exit(0);
