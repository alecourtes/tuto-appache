function  onUpdateReady() {
	alert('Nouvelle version de cache à jour');
}

window.applicationCache.addEventListener('updateready', onUpdateReady);

if(window.applicationCache.status == window.applicationCache.UPDATEREADY){
	onUpdateReady();
}
