function App(){

}

App.prototype.start=function(){
  var geometry=new THREE.PlaneGeometry(1,1);

  var loader = new THREE.ObjectLoader();
  var ambientLight = new THREE.AmbientLight( 0xcccccc, 0.4 );
  framework.realidadEscena.escena.add(ambientLight);
  var pointLight = new THREE.PointLight( 0xffffff, 0.8 );
  framework.realidadEscena.camara.add(pointLight);
  loader.load(
    "./source/SPACESHIP.json",
    function ( obj ) {
      console.dir(obj);
      var spaceship=framework.createElement({WIDTH:60,HEIGHT:60,GEOMETRY:geometry});
      spaceship.init();
      spaceship.get().add(obj);
      framework.addMarker({id:0,callback:this.spaceshipAction,puntero:spaceship,path:"patt.hiro"});
    },
    function ( xhr ) {
    },
    function ( err ) {
    }
  );
}

App.prototype.spaceshipAction=function(puntero){
  console.dir(puntero);
}

App.prototype.loop=function(){

}
