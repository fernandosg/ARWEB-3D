function App(){

}
App.prototype.start=function(){
  var geometry=new THREE.PlaneGeometry(1,1);
  var ambientLight = new THREE.AmbientLight( 0xcccccc, 1.4 );
  framework.realidadEscena.escena.add(ambientLight);
  var pointLight = new THREE.PointLight( 0xffffff, 0.8 );
  framework.realidadEscena.camara.add(pointLight);

        var loader = new THREE.GLTFLoader();
      	loader.load(
      		'./models/gnome.gltf',
      		function ( gltf ) {
            var gnome=framework.createElement({WIDTH:60,HEIGHT:60,GEOMETRY:geometry});
            gnome.init();
            gnome.get().add(gltf.scene);
            framework.addMarker({id:0,callback:this.gnomeAction,puntero:gnome,path:"patt.hiro"});
      		},
      		function ( xhr ) {
      			console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

      		},
      		function ( error ) {
      			console.log( 'Error' );

      		}
      	);
}

App.prototype.gnomeAction=function(puntero){
  console.dir(puntero);
}

App.prototype.loop=function(){

}
