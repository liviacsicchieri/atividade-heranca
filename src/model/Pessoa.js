"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
var Pessoa = /** @class */ (function () {
    function Pessoa(_nome) {
        this.nome = _nome;
    }
    Pessoa.prototype.setNome = function (_nome) {
        this.nome = _nome;
    };
    Pessoa.prototype.getNome = function () {
        return this.nome;
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
