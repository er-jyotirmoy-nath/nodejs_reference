function Emitter(){
    this.emittype = {};
}

Emitter.prototype.on = function(type,listner){
    this.emittype[type] = this.emittype[type] || [];
    this.emittype[type].push(listner);
};

Emitter.prototype.emit = function(type){
    if(this.emittype[type]){
        this.emittype[type].forEach(function(element) {
            element();   
        });
    }
};

module.exports = Emitter;