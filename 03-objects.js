var foo = {
	malte : 12,
	bar : "hallo",
	sag_hallo : function() {
		document.writeln("hallo");
	}
};

var x = 3;

foo.neue_eigenschaft = 12;

foo.sag_hallo();



/*
Aufgabe: Objekt mit *privater* Eigenschaft name (Default nach Erzeugung "Hans")
- Methode setName (Prüft, ob Argument String und nicht leer)
- Methode getName (lierfert Name)
- Methode sayName (document.writeln(dem Namen))
*/



var counter = ( function() {
		var i = 0;
		return {
			inc : function() {
				i++;
			},
			state : function() {
				return i;
			}
		}
	}());

document.writeln(counter.state()); // 0
for (var umpf = 0; umpf < 10; umpf++) {
	counter.inc();
}
counter.i = 13286458; // Objekt counter erhaelt Eigenschaft i
document.writeln(counter.state()); // 10
document.writeln(counter.i); // 13286458
