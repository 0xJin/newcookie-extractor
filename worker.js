self.onmessage = function(e) {
    console.log('Worker started');
    // Prova a fare una richiesta a un dominio differente (es. google.com)
    fetch('https://www.google.com', { credentials: 'include' })
        .then(response => response.text())
        .then(data => {
            // Prova a recuperare i cookie dal documento
            // NOTA: Questo potrebbe fallire a causa di restrizioni di sicurezza (SOP)
            self.postMessage('Cookies from Google: ' + document.cookie);
        })
        .catch(error => {
            console.error('Error:', error);
            self.postMessage('Error fetching cookies: ' + error);
        });
};
