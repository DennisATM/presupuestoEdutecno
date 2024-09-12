
function Usuario(nombre, apellidoP, apellidoM, rutNumero, rutDV, telefono, email, presupuesto){
    let _nombre = nombre;
    let _apellidoP = apellidoP;
    let _apellidoM = apellidoM;
    let _rutNumero = rutNumero;
    let _rutDv = rutDV;
    let _telefono = telefono;
    let _email = email;
    let _presupuesto= presupuesto;
    let _gastos = [];
    
    // Metodos publicos de accesibilidad y modificación

    this.getAllProperties = function(){
        return{
            nombre : _nombre,
            apellidoP : _apellidoP,
            apellidoM : _apellidoM,
            telefono : _telefono,
            email : _email,
            presupuesto : _presupuesto

        }
    }

    this.getNombreCompleto = function(){
        return `${_nombre} ${_apellidoP} ${_apellidoM}`;
    }

    this.getNombre = function() {
        return _nombre;
    }

    this.getApellidoP = function() {
        return _apellidoP;
    }

    this.getApellidoM = function(){
        return _apellidoM;
    }

    this.getEmail = function(){
        return _email;
    }

    this.getTelefono = function(){
        return _telefono;
    }

    this.getPresupuesto = function(){
        return _presupuesto;
    }

    this.getGastos = function(){
        return _gastos;
    }

    this.getRut = function(){
        return `${_rutNumero}-${_rutDv}`;
    }

    //Setters
    this.setNombre = function(nuevoNombre){
        _nombre = nuevoNombre;
    }

    this.setApellidoP = function(nuevoApellidoP){
        _apellidoP = nuevoApellidoP;
    }

    this.setApellidoM = function(nuevoApellidoM){
        _apellidoM = nuevoApellidoM;
    }

    this.setEmail = function(nuevoEmail){
        _email = nuevoEmail;
    }

    this.setTelefono = function(nuevoTelefono){
        _telefono = nuevoTelefono;
    }

    this.setPresupuesto = function(nuevoPresupuesto){
        _presupuesto = nuevoPresupuesto;
    }

    this.setGastos = function(nuevoGastos){
        _gastos = nuevoGastos;
    }

}

