<!-- Funcion que calcula tanto por ciento -->
function multiplicar(){
				m1 = document.getElementById("multiplicando").value;
				m2 = document.getElementById("multiplicador").value;
				r = m1*m2/100;
				document.getElementById("resultado").value = r;
				}
<!-- Funcion que calcula un cambio de unidad ascendente-->
function bitesmegas(){
				m3 = document.getElementById("numerouno").value;
				m4 = 1024;
				r2 = m3/m4;
				document.getElementById("resultadouno").value = r2;
				}
function megasgigas(){
				m8 = document.getElementById("numerotres").value;
				m9 = 1024;
				r4 = m8/m9;
				document.getElementById("resultadotres").value = r4;
				}
function gigasteras(){
				m10 = document.getElementById("numerocuatro").value;
				m11 = 1024;
				r5 = m10/m11;
				document.getElementById("resultadocuatro").value = r5;
				}				
<!-- Funcion que calcula un cambio de unidad descendente-->
function megasbites(){
				m5 = document.getElementById("numerodos").value;
				m6 = 1024;
				r3 = m5*m6;
				document.getElementById("resultadodos").value = r3;
				}
function gigasmegas(){
				m12 = document.getElementById("numerocinco").value;
				m13 = 1024;
				r6 = m12*m13;
				document.getElementById("resultadocinco").value = r6;
				}
function terasgigas(){
				m14 = document.getElementById("numeroseis").value;
				m15 = 1024;
				r7 = m14*m15;
				document.getElementById("resultadoseis").value = r7;
				}
<!-- Funcion que calcula dos cambio de unidad ascendente-->
function bitesgigas(){
				m16 = document.getElementById("numerosiete").value;
				m17 = 1048576;
				r8 = m16/m17;
				document.getElementById("resultadosiete").value = r8;
				}
function megasteras(){
				m20 = document.getElementById("numeronueve").value;
				m21 = 1048576;
				r10 = m20/m21;
				document.getElementById("resultadonueve").value = r10;
				}
<!-- Funcion que calcula dos cambio de unidad descendente-->
function gigasbites(){
				m22 = document.getElementById("numerodiez").value;
				m23 = 1048576;
				r11 = m22*m23;
				document.getElementById("resultadodiez").value = r11;
				}
function terasmegas(){
				m24 = document.getElementById("numeroonce").value;
				m25 = 1048576;
				r12 = m24*m25;
				document.getElementById("resultadoonce").value = r12;
				}
<!-- Funcion que calcula tres cambio de unidad ascendente-->
function bitesteras(){
				m18 = document.getElementById("numeroocho").value;
				m19 = 1073741824;
				r9 = m18/m19;
				document.getElementById("resultadoocho").value = r9;
				}
<!-- Funcion que calcula tres cambio de unidad descendente-->
function terasbites(){
				m26 = document.getElementById("numerodoce").value;
				m27 = 1073741824;
				r13 = m26*m27;
				document.getElementById("resultadodoce").value = r13;
				}
<!-- Funcion que calcula IVA-->
function ivauno(){
				m100 = 16;
				m101 = document.getElementById("cantidaduno").value;
				r100 = m100*m101/100;
				r101 = m101-r100;
				document.getElementById("resultadomil").value = r101;
				}
function ivados(){
				m200 = 7;
				m201 = document.getElementById("cantidaddos").value;
				r200 = m200*m201/100;
				r201 = m201-r200;
				document.getElementById("resultadomiluno").value = r201;
				}
function ivatres(){
				m300 = 4;
				m301 = document.getElementById("cantidadtres").value;
				r300 = m300*m301/100;
				r301 = m301-r300;
				document.getElementById("resultadomildos").value = r301;
				}
