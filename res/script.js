/**
 * Faili nimi: script.js
 * Autor: Savva Novikov (RestITrant arendusmeeskonnaliige)
 *
 * Kirjeldus: 
 * See skript muudab broneeringu lehe dünaamiliseks.
 * Skript püüab kinni vormi saatmise, takistab lehe värskendamist 
 * ja kuvab kasutajale kohese tagasiside, peites vormi ja näidates teadet.
 *
 * Kasutatud allikad (Viited):
 * 3. Google Gemini - tegi 100% skripti, aitas arutada skripti loogikat ja struktuuri, kui tekkisid küsimused. Lisaks aitas kirjutada kommentaare.
 */

// Ootame, kuni kogu HTML leht on brauseris täielikult laetud
document.addEventListener('DOMContentLoaded', function() {
    
    // Leiame HTML-ist broneeringu vormi klassi nime järgi (.booking-form)
    var form = document.querySelector('.booking-form');

    // Leiame HTML-ist peidetud tänusõnumi kasti ID järgi (#success-message)
    var successMessage = document.getElementById('success-message');

    // Kontrollime, kas vorm on lehel olemas (et vältida vigu teistel lehtedel, nt avalehel)
    if (form) {
        
        // Lisame "kuulaja" (event listener), mis reageerib nupu "Kinnita Broneering" vajutamisele
        form.addEventListener('submit', function(event) {
            
            // 1. Keelame brauseri vaikimisi käitumise (prevent default).
            // See on kriitiline rida, mis takistab lehe uuesti laadimist (refresh),
            // et kasutaja ei kaotaks visuaalset kontakti lehega.
            event.preventDefault(); 
            
            // (Siia võiks reaalses rakenduses lisada AJAX päringu andmete serverisse saatmiseks)
            
            // 2. Peidame broneeringu vormi eest ära.
            // Muudame CSS-i omadust 'display' väärtuseks 'none'.
            form.style.display = 'none';
            
            // 3. Teeme tänusõnumi ja rohelise linnukese nähtavaks.
            // Muudame CSS-i omadust 'display' väärtuseks 'block'.
            successMessage.style.display = 'block';
            
            // 4. Kerime lehe automaatselt üles (scroll to top).
            // See on vajalik eriti mobiilivaates, et kasutaja kindlasti näeks teadet.
            window.scrollTo(0, 0);

            // Logime konsooli teate arendaja jaoks (debugging)
            console.log("Vorm edukalt saadetud ja tänusõnum kuvatud.");
        });
    }
});