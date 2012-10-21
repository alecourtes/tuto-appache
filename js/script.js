function  onUpdateReady() {
	alert('Nouvelle version de cache à jour');
}

//Utilisation de l'object window.applicationCache pour piloter le cache

window.applicationCache.addEventListener('updateready', onUpdateReady);

if(window.applicationCache.status == window.applicationCache.UPDATEREADY){
	onUpdateReady();
}
